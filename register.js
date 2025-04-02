// register.js (frontend-only, no JSON, using a simple object)

document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.querySelector('.register-form form');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.style.display = 'none';
    document.body.appendChild(modal);

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modal.appendChild(modalContent);

    const closeModal = document.createElement('span');
    closeModal.classList.add('close-modal');
    closeModal.textContent = '×';
    modalContent.appendChild(closeModal);

    const modalMessage = document.createElement('p');
    modalContent.appendChild(modalMessage);

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm_password').value;

            if (!username || !email || !password || !confirmPassword) {
                modalMessage.textContent = 'Please fill in all fields.';
                modal.style.display = 'block';
                return;
            }

            if (password !== confirmPassword) {
                modalMessage.textContent = 'Passwords do not match.';
                modal.style.display = 'block';
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                modalMessage.textContent = 'Please enter a valid email address.';
                modal.style.display = 'block';
                return;
            }

            // Simulated registration logic (frontend-only)
            // Use window.getUsers and window.setUsers functions to access the user object.
            let users = window.getUsers() || {};

            if (users[username]) {
                modalMessage.textContent = 'Username already exists.';
                modal.style.display = 'block';
                return;
            }

            users[username] = password;
            window.setUsers(users);

            modalMessage.textContent = 'Registration successful!';
            modal.style.display = 'block';

            setTimeout(function() {
                window.location.href = 'login.html';
            }, 1500);
        });
    }
});