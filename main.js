let p = document.getElementById('p');

let date = new Date();
p.textContent ="Current time : " +  date.getHours()  + " : " + date.getMinutes() + " : " + date.getSeconds();