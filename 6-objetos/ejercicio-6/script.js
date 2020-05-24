//----------CREAR UN CONTADOR---------

let contador = {
    valorMaximo: 20,
    valorMinimo: 5,
    valorActual: 10,
    valorInicial: 0
}

let aumentar = () => {
    if (contador.valorActual < contador.valorMaximo) {
        contador.valorActual++;
    }
}

let disminuir = () => {
    if (contador.valorActual === contador.valorMaximo) {
        contador.valorActual--
    }
}

aumentar();
console.log(contador.valorActual);
aumentar();
console.log(contador.valorActual);

