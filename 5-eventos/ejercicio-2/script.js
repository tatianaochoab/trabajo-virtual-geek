//----------COMO TE LLAMAS------------
let name = document.getElementById('name');
document.getElementById('button').addEventListener('click', () => {
    console.log('Hola ' + name.value);
} );