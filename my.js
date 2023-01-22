let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function() {
    var list = document.createElement('p');
    toDoContainer.appendChild(list);
    list.innerText = inputField.value;
    inputField.value = "";
    list.classList.add('paragraph-styling')
    list.addEventListener('click', function() {
        list.style.textDecoration = "line-through";
    })
    list.addEventListener('dblclick', function() {
        toDoContainer.removeChild(list);
    })
})
