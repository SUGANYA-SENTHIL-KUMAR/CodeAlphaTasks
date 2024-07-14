// Retrieve expenses from local storage if available
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');

// Function to render expenses to UI
function renderExpenses() {
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${expense.name}</span>
            <span>$${expense.amount}</span>
            <button onclick="editExpense(${index})">Edit</button>
            <button onclick="deleteExpense(${index})">Delete</button>
        `;
        expenseList.appendChild(li);
    });
}

// Function to add new expense
function addExpense(name, amount) {
    const expense = {
        name,
        amount
    };
    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    renderExpenses();
    expenseForm.reset();
}

// Function to edit expense
function editExpense(index) {
    const newName = prompt('Enter new expense name:');
    const newAmount = prompt('Enter new amount:');
    if (newName && newAmount) {
        expenses[index].name = newName;
        expenses[index].amount = newAmount;
        localStorage.setItem('expenses', JSON.stringify(expenses));
        renderExpenses();
    }
}

// Function to delete expense
function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    renderExpenses();
}

// Event listener for form submission
expenseForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const expenseName = document.getElementById('expenseName').value.trim();
    const expenseAmount = document.getElementById('expenseAmount').value.trim();
    if (expenseName && expenseAmount) {
        addExpense(expenseName, expenseAmount);
    } else {
        alert('Please enter valid expense details.');
    }
});

// Initial rendering of expenses
renderExpenses();
