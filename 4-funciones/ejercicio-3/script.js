//----------TICKET CON IVA---------

let price = (num) => {
    let iva = 2.1;
    let total = num + iva;
    console.log(`Precio sin IVA: ${num}, IVA: ${iva} y TOTAL: ${total}`);
}

price(2000);