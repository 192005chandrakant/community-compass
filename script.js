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


