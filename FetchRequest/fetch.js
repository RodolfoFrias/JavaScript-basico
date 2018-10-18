'use strict'

var div = document.querySelector("#items");
var usuarios = [];

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(users => {
        usuarios = users;
        console.log(usuarios);

        usuarios.map((user, i) => {
            let items = document.createElement('h3');
            items.innerHTML = i + ". "+ user.body;
            div.appendChild(items);
            document.querySelector('.load').style.display = 'none';
        });
});