'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const reviewsContainer = document.querySelector('.reviews__container');
    const filterButtons = document.querySelectorAll('.filter__btn');
    const allReviews = document.querySelectorAll('.reviews__review');

    const filterReviews = (rating) => {
        allReviews.forEach(review => {
            const starsElement = review.querySelector('.review__stars');
            const starCount = starsElement.textContent.trim().length;
            
            if (rating === 'all' || starCount === parseInt(rating)) {
                review.style.display = 'block';
                setTimeout(() => review.style.opacity = '1', 10);
            } else {
                review.style.opacity = '0';
                setTimeout(() => review.style.display = 'none', 300);
            }
        });
    };

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            button.classList.add('active');
            
            const rating = button.dataset.rating;
            
            filterReviews(rating);
        });
    });

    filterReviews('all');
});
