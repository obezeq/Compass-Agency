'use strict';

const updateBudgetValue = (budget) => {
    const budgetValue = document.getElementById("budget-value");
    budgetValue.textContent = `$${parseInt(budget).toLocaleString()}`;
}

const handleBookMeeting = () => {
    let bookDate;
    do {
        bookDate = prompt("Introduce the day of the meeting (YYYY-MM-DD):");
    } while (!/^\d{4}-\d{2}-\d{2}$/.test(bookDate)); // Regex para formato YYYY-MM-DD

    alert(`The meeting is booked on ${bookDate}`);
};

const initializeQuoteManager = () => {
    const quote = document.getElementById("quote");
    const quoteButton = document.getElementById("quoteButton");

    let isQuoteVisible = true;

    quoteButton.addEventListener("click", (event) => {
        event.preventDefault();
        quote.style.display = isQuoteVisible ? "none" : "block";
        quoteButton.textContent = isQuoteVisible ? "Show Quote" : "Hide Quote";
        isQuoteVisible = !isQuoteVisible;
    });
};

const initializeBudgetSlider = () => {
    const budgetInput = document.getElementById("budget");
    const budgetValue = document.getElementById("budget-value");

    budgetInput.value = 5500;
    updateBudgetValue(budgetInput.value);

    const updateBudgetDisplay = (value) => {
        updateBudgetValue(value);
    };

    updateBudgetDisplay(budgetInput.value);

    budgetInput.addEventListener("input", (event) => {
        updateBudgetValue(event.target.value);
    });
};

const initializeBookMeeting = () => {
    const bookMeetingButton = document.getElementById("bookMeeting");
    bookMeetingButton.addEventListener("click", handleBookMeeting);
};

const initializeFormHandler = () => {
    
    const form = document.querySelector(".contact__form--form");
    const notificationContainer = document.createElement('div');
    notificationContainer.id = 'notification-container';
    document.body.appendChild(notificationContainer);

    const showNotification = (message, isSuccess) => {
        const notification = document.createElement('div');
        notification.className = `notification ${isSuccess ? 'success' : 'error'}`;
        notification.textContent = message;
        
        // Aqui estoy aplicando el optional chaining poniendo el "?" para evitar errores si el elemento no existe
        notificationContainer?.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('hide');
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    };

    // Con esto elimino cualquier tipo de infiltracion maliciosa mediante codigos HTML, y devuelvo el input limpio
    const sanitizeInput = (value) => {
        return value.replace(/<[^>]*>?/gm, '');
    };

    const validateForm = ({ name, email, phone, message, services }) => {
        const errors = [];
        
        // VERIFICACIÓN DE CAMPO name DEL FORMULARIO
        if (name.length < 2 || name.length > 50) {
            errors.push('The name should be within 2-50 valid characters');
        }
    
        for (let i = 0; i < name.length; i++) {
            const char = name[i];
            if (!(
                (char >= 'A' && char <= 'Z') ||
                (char >= 'a' && char <= 'z') ||
                (char >= 'À' && char <= 'ÿ') ||
                char === ' ' ||
                char === "'"
            )) {
                errors.push('The name contain no valid characters');
                break;
            }
        }
        
        // VALIDACIÓN DE EMAIL
        const temporaryDomains = [
            'tempmail.com',
            '10minutemail.com',
            'mailinator.com',
            'guerrillamail.com',
            'yopmail.com',
            'throwawaymail.com',
            'getnada.com',
            'maildrop.cc',
            'sharklasers.com',
            'discard.email'
        ];        

        if (email.includes(' ')) {
            errors.push("The email can't contain any spaces");
        }

        if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
            errors.push('The email is not valid');
        } else {
            const emailDomain = email.split('@')[1];

            if (temporaryDomains.includes(emailDomain)) {
                errors.push("The email can't be a disposable email")
            }
        }
        
        // VERIFICACIÓN DEL TELEFONO MOVIL
        if (phone.length < 7 || phone.length > 20) {
            errors.push('The phone number should be within 7-20 characters');
        }
    
        for (let i = 0; i < phone.length; i++) {
            const char = phone[i];
            if (!(
                (char >= '0' && char <= '9') ||
                char === ' ' ||
                char === '-' ||
                char === '(' ||
                char === ')' ||
                char === '+'
            )) {
                errors.push('The phone number containts invalid characters');
                break;
            }
        }

        // AQUI VALIDO QUE AL MENOS SE SELECCIONE 1 SERVICIO
        if (services.length === 0) {
            errors.push('You should select at least one service');
        }
        
        // VALIDO EL MENSAJE DEL USUARIO
        const cleanMessage = sanitizeInput(message);
        if (cleanMessage.length < 50 || cleanMessage.length > 5000) {
            errors.push('The message should be within 50-5000 caracteres');
        }
        
        return errors;
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const selectedServices = Array.from(
            document.querySelectorAll('.contact__form--checkbox:checked')
        ).map(checkbox => checkbox.value);
        
        const formData = {
            name: sanitizeInput(form.elements.name.value.trim()),
            email: form.elements.email.value.trim(),
            phone: form.elements.phone.value.trim(),
            message: sanitizeInput(form.elements.message.value.trim()),
            services: selectedServices,
            budget: form.elements.budget.value
        };

        const validationErrors = validateForm(formData);
        
        if (validationErrors.length > 0) {
            validationErrors.forEach(error => {
                showNotification(error, false);
            });
            return;
        }
        
        showNotification('Formulario enviado con éxito', true);
        form.reset();
        updateBudgetValue('5500');

        localStorage.removeItem('selectedServices');
        document.querySelectorAll('.contact__form--checkbox').forEach(checkbox => {
            checkbox.checked = false;
        });
    });
};

const getSavedServices = () => {
    try {
        return JSON.parse(localStorage.getItem('selectedServices')) || [];
    } catch (error) {
        return [];
    }
};

const initializeServiceSelection = () => {
    const getSavedServices = () => {
        try {
            return JSON.parse(localStorage.getItem('selectedServices')) || [];
        } catch (error) {
            return [];
        }
    };

    const updateLocalStorage = (services) => {
        localStorage.setItem('selectedServices', JSON.stringify(services));
    };

    const checkboxes = document.querySelectorAll('.contact__form--checkbox');
    let savedServices = getSavedServices();

    checkboxes.forEach(checkbox => {
        checkbox.checked = savedServices.includes(checkbox.value);
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', ({ target }) => {
            const serviceId = target.value;
            let currentServices = getSavedServices();

            if (target.checked) {
                if (!currentServices.includes(serviceId)) {
                    currentServices.push(serviceId);
                }
            } else {
                currentServices = currentServices.filter(id => id !== serviceId);
            }

            updateLocalStorage(currentServices);
        });
    });
};

document.addEventListener("DOMContentLoaded", () => {
    initializeQuoteManager();
    initializeBudgetSlider();
    initializeBookMeeting();
    initializeFormHandler();
    initializeServiceSelection();
});
