let passwordElement = document.querySelector('#password');
passwordElement.innerHTML = 'Mi contaseña es: ********';

//introducir elementos HTML dentro del HTML 
const listElement = document.querySelector('.list');
const content = '<li><a href="#">Home</a></li><li><a href="#">Contact</a></li>';
listElement.innerHTML = content;

alert('Hola');