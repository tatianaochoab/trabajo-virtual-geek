//----------BONUS---------
const anoActual = 2020;

let calcularBisiesto = () => {
    let modBisiesto = anoActual % 4;
    if (modBisiesto === 0) {
        console.log (`El proximo año biciesto va a ser el ${anoActual + 4}.`);
    }else {
        console.log (`El proximo año biciesto va a ser el ${anoActual + 4 - modBisiesto}.`);
    }
}

calcularBisiesto()