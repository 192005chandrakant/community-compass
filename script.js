// Eligibility Checker Function
document.getElementById('eligibility-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from refreshing the page

    // Get the input values
    const age = document.getElementById('age').value;
    const occupation = document.getElementById('occupation').value;
    const income = document.getElementById('income').value;

    let eligible = false;
    let message = '';

    // Simple eligibility logic (can be expanded as per real rules)
    if (age >= 18 && income <= 15000) {
        eligible = true;
    }

    // Display eligibility message
    if (eligible) {
        message = 'You are eligible for the scheme!';
    } else {
        message = 'Sorry, you are not eligible for any schemes.';
    }

    // Show the message to the user
    alert(message);
});

// Scroll to Schemes Section on "Learn More" Click
document.querySelector('.btn-light').addEventListener('click', function() {
    document.getElementById('schemes').scrollIntoView({ behavior: 'smooth' });
});

// Search Bar Filter Functionality
document.querySelector('.form-control[type="search"]').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    const schemes = document.querySelectorAll('.card');

    schemes.forEach(function(scheme) {
        const schemeTitle = scheme.querySelector('.card-title').textContent.toLowerCase();
        if (schemeTitle.includes(query)) {
            scheme.style.display = 'block';
        } else {
            scheme.style.display = 'none';
        }
    });
});

document.getElementById('contact').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    alert('Thank you for contacting us, ' + name + '! We will get back to you shortly.');
});
// script.js

// Function to set the language
function setLanguage(lang) {
    if (!translations[lang]) return; // Exit if the language is not supported

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Update select options if they have data-i18n
    document.querySelectorAll('select option[data-i18n]').forEach(option => {
        const key = option.getAttribute('data-i18n');
        if (translations[lang][key]) {
            option.textContent = translations[lang][key];
        }
    });

    // Update button values if necessary
    document.querySelectorAll('[data-i18n-value]').forEach(element => {
        const key = element.getAttribute('data-i18n-value');
        if (translations[lang][key]) {
            element.value = translations[lang][key];
        }
    });

    // Store the selected language in localStorage to persist it
    localStorage.setItem('language', lang);
}

// Initialize the language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'en'; // Default to English
    setLanguage(savedLanguage);
});

// Handle language switch without page reload
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = item.getAttribute('data-lang');
        setLanguage(lang);
    });
});

