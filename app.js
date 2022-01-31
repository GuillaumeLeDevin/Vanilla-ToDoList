const form = document.querySelector('form');
const list = document.querySelector('ul');
const input = document.querySelector('input');
let allTasks = [];

form.addEventListener('submit', event => {
    event.preventDefault();

    const text = input.value.trim();
    if(text !== '') {
        addTask(text);
        input.value = '';
    }
})

function addTask(text) {

    const toDo = {
        text,
        // Date.now is the number of milliseconds pasted from the 01/01/1970
        id: Date.now()
    }
    displayList(toDo);
}
function displayList(toDo) {
    const item = document.createElement('li');
    item.setAttribute('data-key', toDo.id);

    const input = document.createElement('input');
    input.setAttribute('type','checkbox');
    input.addEventListener('click', taskDone);
    item.appendChild(input);

    const txt = document.createElement('span');
    txt.innerText = toDo.text;
    item.appendChild(txt);

    const btn = document.createElement('button');
    btn.addEventListener('click', taskToDelete);
    const img = document.createElement('img');
    img.setAttribute('src', 'ressources/fermer.svg');
    btn.appendChild(img);
    item.appendChild(btn);

    list.appendChild(item);
    allTasks.push(item);
}
function taskDone(e) {
    e.target.parentNode.classList.toggle('endedTask');
}
function taskToDelete(e) {
    allTasks.forEach(el => {
        if(e.target.parentNode.getAttribute('data-key') === el.getAttribute('data-key')) {
            el.remove();
            allTasks = allTasks.filter( li => li.dataset.key !== el.dataset.key);
        }
    })
}