'use strict';

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

    const updateBudgetDisplay = (value) => {
        budgetValue.textContent = `$${parseInt(value).toLocaleString()}`;
    };

    updateBudgetDisplay(budgetInput.value);

    budgetInput.addEventListener("input", (event) => updateBudgetDisplay(event.target.value));
};

const initializeBookMeeting = () => {
    const bookMeetingButton = document.getElementById("bookMeeting");
    bookMeetingButton.addEventListener("click", handleBookMeeting);
};

const initializeFormHandler = () => {
    const form = document.querySelector(".contact__form--form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const { name, message } = form.elements;

        if (name.value.trim() === "" || message.value.trim() === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const list = document.querySelector(".contact__info--list");
        const newItem = document.createElement("li");
        newItem.classList.add("contact__info--item");

        const icon = document.createElement("span");
        icon.classList.add("fa-solid", "fa-user");

        const text = document.createElement("span");
        text.textContent = `${name.value}: ${message.value}`;

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
