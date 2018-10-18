'use strict'

//https://reqres.in/api/users  -> Hacer ejercicios con esta URI

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


/*
Para enviar datos por POST con fetch
fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({a: 1, b: 'Cadena de texto'})
  });*/

