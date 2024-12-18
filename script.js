// Script for Online Shoes Store

document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.product .btn');

    cartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.closest('.product');
            const productName = product.querySelector('h3').textContent;
            const productPrice = product.querySelector('p').textContent;

            // alert(`Added to Cart:\nProduct: ${productName}\nPrice: ${productPrice}`);
        });
    });

    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent successfully.`);
            contactForm.reset();
        } else {
            alert('Please fill in all fields before submitting.');
        }
    });
    document.getElementById('signInForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username === 'email' && password === 'name') {
            alert('Login Successful!');
        } else {
            alert('Invalid username or password');
        }
    });
});
