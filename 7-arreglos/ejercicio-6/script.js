//----------TENEMOS MUCHO EN COMÚN--------

let obras = [];

document.getElementById('submit').addEventListener('click', () => {
    //extraer la información de un input
    obras[0] = document.getElementById('respuesta1').value;
    obras[1] = document.getElementById('respuesta2').value;

    for (const obra of obras){
        alert(`¡A mí también me encantó ${obra} ! Tenemos mucho en común, humana.`);
    }
});


