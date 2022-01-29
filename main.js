let numList = document.getElementById('todo-list');

let tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
alert(tasks);


let list = document.createElement('li');


 list.classList.add('task');

 for (let i = 0; i < tasks.length; i++) {
    numList.appendChild(list);
    list.textContent +=  tasks[i] ;

  
   
    
 }



