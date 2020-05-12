const container = document.querySelector(".container")
let inputValue = document.querySelector(".input")
const add = document.querySelector(".add")

if(window.localStorage.getitem('todos') == undefined ) {
    let todos = [];
    window.localStorage.setitem('todos', JSON.stringify(todos));
}

let todosEX = window.localStorage.getitem('todos');
let todos = JSON.parse(todosEX);

class item{
    constructor(name){
        this.createItem(name);
    }
    createItem(name){
        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let input = document.createElement('input');
        input.type = 'text';
        input.value = name;
        input.classList.add('item_input');

        let edit = document.createElement('button');
        edit.classList.add('edit');
        edit.innerHTML = 'EDIT';
        edit.addEventListener('click', () => this.edit(input, name));

        container.appendChild(itemBox);
        itemBox.appendChild(edit);
    }

    edit(input, name) {
        if (input.disabled == true) {
            input.disabled = input.disabled;
        } else {
            input.disabled = input.disabled;
            let indexof = todos.indexOf(name);
            todos[indexof] = input.value;
            window.localStorage.setitem('todos', JSON.stringify(todos));        
        }
    }
}
add.addEventListener('click',check);
window.addEventListener('keydown', (e) => {
    if (e.which == 13){
        check;
    }
    })

function check(){
    if (inputValue.value != ''){
        new item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setitem('todos', JSON.stringify(todos));
        inputValue.value = '';
    }
}

for (let v = 0; v < todos.length; v++) {
    new item(todos[v]);
}

new item('sport');