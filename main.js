let numList = document.getElementById('todo-list');

let tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];

for (let i=0; i<tasks.length; i++) {
    let list = document.createElement('li');
    list.classList.add('task');
    list.innerHTML += tasks[i];
      numList.append(list);
}






