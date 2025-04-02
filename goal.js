const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const header = document.querySelector('header');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('active');
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        if (window.innerWidth < 768) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('active');
        }
    });
});

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    header.classList.toggle('light-mode');
    themeToggle.classList.toggle('ph-moon');
    themeToggle.classList.toggle('ph-sun');
});

// Goal Setting Logic
const goalForm = document.getElementById('goal-form');
const goalList = document.getElementById('goal-list').querySelector('ul');
const clearGoalsButton = document.getElementById('clear-goals'); // Get the clear goals button
let goals = JSON.parse(localStorage.getItem('goals')) || [];

displayGoals();

function displayGoals() {
    goalList.innerHTML = '';
    goals.forEach((goal, index) => {
        let listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Goal:</strong> ${goal.goalName} | 
            <strong>Type:</strong> ${goal.goalType} | 
            <strong>Start:</strong> ${goal.startDate} | 
            <strong>End:</strong> ${goal.endDate} | 
            <strong>Target:</strong> ${goal.targetValue} | 
            <strong>Notes:</strong> ${goal.notes} 
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        goalList.appendChild(listItem);
    });
    attachDeleteHandlers();
}

function attachDeleteHandlers() {
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            goals.splice(index, 1);
            localStorage.setItem('goals', JSON.stringify(goals));
            displayGoals();
        });
    });
}

goalForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const goalName = document.getElementById('goal-name').value.trim();
    const goalType = document.getElementById('goal-type').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const targetValue = document.getElementById('target-value').value.trim();
    const notes = document.getElementById('goal-notes').value.trim();

    if (!goalName || !goalType || !startDate || !endDate || !targetValue) {
        alert('Please fill out all required fields.');
        return;
    }

    const newGoal = { goalName, goalType, startDate, endDate, targetValue, notes };
    goals.push(newGoal);
    localStorage.setItem('goals', JSON.stringify(goals));

    goalForm.reset();
    displayGoals();
    alert("Goal set successfully!");
});

// Clear Goals Button Event Listener
clearGoalsButton.addEventListener('click', () => {
    goals = [];
    localStorage.removeItem('goals');
    displayGoals(); // Update the displayed list
    alert("All goals cleared!");
});
