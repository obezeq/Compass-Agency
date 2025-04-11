'use strict'

const gallerySection = document.querySelector('.gallery');
const uploadArea = gallerySection.querySelector('.gallery-upload');
const fileInput = gallerySection.querySelector('#fileInput');
const galleryList = gallerySection.querySelector('.gallery-list');
const lightbox = gallerySection.querySelector('.gallery-lightbox');
const lightboxImage = lightbox.querySelector('.gallery-lightbox-image');
const lightboxThumbnails = lightbox.querySelector('.gallery-thumbnails');

let currentIndex = 0;
let images = [];
let draggedItem = null;

document.addEventListener('DOMContentLoaded', () => {
    images = Array.from(galleryList.querySelectorAll('.gallery-image'));
    setupEventListeners();
    updateImageArray();
});

const setupEventListeners = () => {
    
    uploadArea.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', handleFiles);

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, preventDefaults, false);
    });

    ['dragenter', 'dragover'].forEach(eventName => {
        uploadArea.addEventListener(eventName, () => {
            uploadArea.classList.add('gallery-upload--active');
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, () => {
            uploadArea.classList.remove('gallery-upload--active');
        });
    });

    uploadArea.addEventListener('drop', handleDrop, false);

    galleryList.addEventListener('dragover', handleDragOver);
    
    lightbox.querySelector('.gallery-lightbox-close').addEventListener('click', closeLightbox);
    lightbox.querySelector('[data-direction="prev"]').addEventListener('click', () => changeImage(-1));
    lightbox.querySelector('[data-direction="next"]').addEventListener('click', () => changeImage(1));

    document.addEventListener('keydown', handleKeyDown);
}

const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
}

const handleDrop = (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles({ target: { files } });
}

const handleFiles = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (event) => {
                addImageToGallery(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
}

const addImageToGallery = (src) => {
    const listItem = document.createElement('li');
    listItem.className = 'gallery-list-item';
    listItem.draggable = true;
    listItem.innerHTML = `
        <figure class="gallery-figure">
            <img src="${src}" alt="Imagen subida" class="gallery-image">
            <button class="gallery-delete-btn" aria-label="Eliminar imagen">×</button>
        </figure>
    `;

    galleryList.appendChild(listItem);
    setupListItemEvents(listItem);
    updateImageArray();
}

const setupListItemEvents = (item) => {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
    
    const deleteBtn = item.querySelector('.gallery-delete-btn');
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        deleteImage(item);
    });

    const img = item.querySelector('.gallery-image');
    img.addEventListener('click', () => {
        currentIndex = images.indexOf(img);
        openLightbox();
    });
}

const deleteImage = (item) => {
    const img = item.querySelector('.gallery-image');
    const imgIndex = images.indexOf(img);
    
    item.remove();
    updateImageArray();
    
    if (currentIndex >= images.length) currentIndex = images.length - 1;
    if (currentIndex < 0 && images.length > 0) currentIndex = 0;
    
    if (images.length === 0) {
        closeLightbox();
    } else if (imgIndex <= currentIndex) {
        updateLightboxImage();
    }
}

const handleDragStart = (e) => {
    draggedItem = e.currentTarget;
    setTimeout(() => {
        draggedItem.classList.add('gallery-list-item--dragging');
    }, 0);
}

const handleDragOver = (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(galleryList, e.clientY);
    
    if (afterElement == null) {
        galleryList.appendChild(draggedItem);
    } else {
        galleryList.insertBefore(draggedItem, afterElement);
    }
}

const handleDragEnd = () => {
    draggedItem.classList.remove('gallery-list-item--dragging');
    updateImageArray();
}

const getDragAfterElement = (container, y) => {
    const draggableElements = [...container.querySelectorAll('.gallery-list-item:not(.gallery-list-item--dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

const openLightbox = () => {
    updateLightboxImage();
    lightbox.showModal();
    document.body.style.overflow = 'hidden';
}

const closeLightbox = () => {
    lightbox.close();
    document.body.style.overflow = 'auto';
}

const changeImage = (direction) => {
    currentIndex += direction;
    
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    
    updateLightboxImage();
}

const updateLightboxImage = () => {
    if (images.length === 0) return;
    
    const currentImage = images[currentIndex];
    lightboxImage.src = currentImage.src;
    lightboxImage.alt = currentImage.alt;
    
    updateThumbnails();
}

const updateThumbnails = () => {
    lightboxThumbnails.innerHTML = '';
    
    images.forEach((img, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = img.src;
        thumbnail.alt = `Miniatura ${index + 1}`;
        thumbnail.className = 'gallery-thumbnail';
        
        if (index === currentIndex) {
            thumbnail.classList.add('gallery-thumbnail--active');
        }
        
        thumbnail.addEventListener('click', () => {
            currentIndex = index;
            updateLightboxImage();
        });
        
        lightboxThumbnails.appendChild(thumbnail);
    });
}

const updateImageArray = () => {
    images = Array.from(galleryList.querySelectorAll('.gallery-image'));
}

const handleKeyDown = (e) => {
    if (lightbox.open) {
        switch(e.key) {
            case 'ArrowLeft':
                changeImage(-1);
                break;
            case 'ArrowRight':
                changeImage(1);
                break;
            case 'Escape':
                closeLightbox();
                break;
        }
    }
}

document.querySelectorAll('.gallery-list-item').forEach(setupListItemEvents);