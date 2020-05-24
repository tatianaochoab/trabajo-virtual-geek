function total(precio, peso) {
    return (precio * peso);
}
var totalCompra = total (5, 2);
totalCompra += total(2, 3);
totalCompra += total(4, 0.5);

console.log (totalCompra);
