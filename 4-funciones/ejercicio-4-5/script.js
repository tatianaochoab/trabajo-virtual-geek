//----------CALCULADOR DE MODELO DE CAJA---------

let calculator = (typeBox, width, padding, border) => {
    let contentBox = width + padding + border;
    let borderBox = width
    if (typeBox) {
        return borderBox;
    }else{
        return contentBox;
    }
}
console.log(calculator());