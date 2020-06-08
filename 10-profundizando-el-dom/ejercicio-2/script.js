let ciudades = ['Madrid', 'París', 'New York'];
for (let i = 0; i < ciudades.length; i++) {
    const option = document.createElement('option');
    const name = document.createTextNode(`${ciudades[i]}`);
    option.appendChild(name);
    document.getElementById('select').appendChild(option);
}

let imgCiudad = [
    ['./images/madrid1.jpg', './images/madrid2.jpg', './images/madrid3.jpg'],
    ['./images/paris1.jpg', './images/paris2.jpg', './images/paris3.jpg'],
    ['./images/newYork1.jpg', './images/newYork2.jpg', './images/newYork3.jpg']
]

document.getElementById('select').addEventListener('change', (e) => {
    console.log(e.target.value);
    let nombreCiudad = e.target.value
    selectCiudad(nombreCiudad);
});


let selectCiudad = (ciudad) => {
    let remove = document.querySelectorAll('.img-city');
    if (remove !== null){
        for (const iterator of remove) {
            iterator.remove();
        }
    }
    switch (ciudad) {
        case 'Madrid':
            for (let i = 0; i < imgCiudad[0].length; i++) {
                let images = document.createElement('img');
                images.setAttribute('class', 'img-city');
                images.setAttribute('src', `${imgCiudad[0][i]}`)
                document.getElementById('container').appendChild(images);
            }
            break;
        case 'París':
            for (let i = 0; i < imgCiudad[1].length; i++) {
                let images = document.createElement('img');
                images.setAttribute('class', 'img-city');
                images.setAttribute('src', `${imgCiudad[1][i]}`)
                document.getElementById('container').appendChild(images);
            }
            break;
        case 'New York':
            for (let i = 0; i < imgCiudad[2].length; i++) {
                let images = document.createElement('img');
                images.setAttribute('class', 'img-city');
                images.setAttribute('src', `${imgCiudad[2][i]}`)
                document.getElementById('container').appendChild(images);
            }
        default:
            break;
    }

}



