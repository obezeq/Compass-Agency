'use strict';

const handleBookMeeting = () => {
    let bookDate;
    do {
        bookDate = prompt("Introduce the day of the meeting (YYYY-MM-DD):");
    } while (!/^\d{4}-\d{2}-\d{2}$/.test(bookDate)); // Valido con regex para este formato YYYY-MM-DD

    alert(`The meeting is booked on ${bookDate}`);
};

const initializeQuoteManager = () => {

    const quote = document.getElementById("quote");
    const quoteButton = document.getElementById("quoteButton");

    let isQuoteVisible = true;

    quoteButton.addEventListener("click", (event) => {
        event.preventDefault();

        if (isQuoteVisible) {
            quote.style.display = "none"; 
            quoteButton.textContent = "Show Quote"; 
        } else {
            quote.style.display = "block"; 
            quoteButton.textContent = "Hide Quote"; 
        }

        isQuoteVisible = !isQuoteVisible; 
    });
}

const initializeBudgetSlider = () => {
    const budgetInput = document.getElementById("budget");
    const budgetValue = document.getElementById("budget-value");

    function updateBudgetDisplay(value) {
        budgetValue.textContent = `$${parseInt(value).toLocaleString()}`;
    }

    updateBudgetDisplay(budgetInput.value);

    budgetInput.addEventListener("input", (event) => {
        updateBudgetDisplay(event.target.value);
    });
}

const initializeBookMeeting = () => {
    const bookMeetingButton = document.getElementById("bookMeeting");
    bookMeetingButton.addEventListener("click", handleBookMeeting);
}

const initializeFormHandler = () => {
    const form = document.querySelector(".contact__form--form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;

        if (name.trim() === "" || message.trim() === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const list = document.querySelector(".contact__info--list");
        const newItem = document.createElement("li");
        newItem.classList.add("contact__info--item");

        const icon = document.createElement("span");
        icon.classList.add("fa-solid", "fa-user");

        const text = document.createElement("span");
        text.textContent = `${name}: ${message}`;

        newItem.appendChild(icon);
        newItem.appendChild(text);

        list.appendChild(newItem);

        form.reset();

        alert("Contacted");
    });
};

document.addEventListener("DOMContentLoaded", () => {
    initializeQuoteManager();
    initializeBudgetSlider();
    initializeBookMeeting();
    initializeFormHandler();
});
