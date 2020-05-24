//----------JUGANDO CON EL TECLADO---------

document.getElementById('container').addEventListener('keypress', (e) => {
    console.log(e);
    if (e.key === 'r' || e.key === 'R') {
        e.target.classList.remove("purple");
        e.target.classList.add("red");
    }
    if (e.key === 'm' || e.key === 'M') {
        e.target.classList.remove("red");
        e.target.classList.add("purple");
    }
})