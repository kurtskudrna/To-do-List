let inputField = document.getElementById('input');
let dateElement = document.getElementById('date')
let addToDoButton = document.getElementById('addButton');
let toDoList = document.getElementById('list');
let ul = document.querySelector('ul')
let refresh = document.querySelector('.refresh')


const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const today = new Date();
dateElement.innerHTML = today.toLocaleTimeString('en-US', options);


addToDoButton.addEventListener('click', function () {
    if (!inputField.value) {
        alert('You must enter a To-Do');
        return;
    }
    let newLi = document.createElement('li');
    newLi.innerText = inputField.value;
    toDoList.appendChild(newLi);
    inputField.value = '';

});

toDoList.addEventListener('click', function (e) {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('checked')
    }
})

refresh.addEventListener('click', function () {
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
})








