//----------DAME IPSUM-----------


HTML = `<p>Este es un párrafo nuevo</p>`
document.getElementById('paragraph').addEventListener('mouseover', () => {
    document.getElementById('new-paragraph').innerHTML = HTML
});