//------------CHIHUAHUAS, CHIHUAHUAS POR TODAS PARTES-------

// fetch('https://dog.ceo/api/breeds/chihuahua/image/random')
//     .then(function (response) {
//             return response.json();
//         }
//     ).then(function (data) {
//         const img = document.querySelector('img');
//         img.src = data.message;
//         img.alt = 'Un perro';
//         }
//     );


let mostrarChihuahua = () => {
fetch('https://dog.ceo/api/breed/chihuahua/images/random')
    .then(response => response.json())
    .then(data => {
        const img = document.querySelector('img');
        img.src = data.message;
        img.alt = 'Chihuahua';
    });
}

document.getElementById('btn').addEventListener('click', mostrarChihuahua);




