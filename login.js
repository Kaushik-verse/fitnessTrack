// login.js (frontend-only, no JSON, using a simple object)

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form form');
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

    // Simple object to store user data (replace with your actual frontend storage)
    let users = {};

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (!username || !password) {
                modalMessage.textContent = 'Please fill in all fields.';
                modal.style.display = 'block';
                return;
            }

            // Simulated login logic (frontend-only)
            if (users[username] && users[username] === password) {
                modalMessage.textContent = 'Login successful!';
                modal.style.display = 'block';

                setTimeout(function() {
                    window.location.href = 'index.html';
                }, 1500);

            } else {
                modalMessage.textContent = 'Invalid username or password.';
                modal.style.display = 'block';
            }
        });
    }

    // Function to set the users object.
    window.setUsers = function(newUsers) {
        users = newUsers;
    };

    // Function to get the users object.
    window.getUsers = function() {
        return users;
    }
});