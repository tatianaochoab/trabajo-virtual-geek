//-------ÁRBOL DE NAVIDAD-------

const caracter = '▲';


let arbol = (altura) => {
    let ancho = "";
    let estrella = '★';
    console.log(multiCaracteres(" ", altura) + estrella);
    let espacio = altura;
    for (let i = 0; i < altura; i++) {
        if (i == 0) {
            ancho += caracter;
        } else {
            ancho += caracter + caracter;
        }
        console.log(multiCaracteres(" ", espacio) + ancho);
        espacio--;
    }
    let tronco = '||';
    console.log(multiCaracteres(" ", altura) + tronco);
}



let multiCaracteres = (xCaracter, nVeces) => {
    let resultado = "";
    for (let i = 0; i < nVeces; i++) {
        resultado += xCaracter;
    }
    return resultado;
}

arbol(10)