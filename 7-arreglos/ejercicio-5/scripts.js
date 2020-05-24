//---------LA MEDIA-----------

let numbers = [1, 3, 6, 4, 7];
numbers[5] = 5;

//mi acumulador---->   +=
let promedio = 0;
for (let i = 0; i < numbers.length; i++) {
    promedio += numbers[i];
}

promedio = promedio / numbers.length;

console.log(promedio);



//---PASO 2-------

let avarege = (numbers) => {
    let promedio = 0;
    for (let i = 0; i < numbers.length; i++) {
        promedio += numbers[i];
    }
    promedio = promedio / numbers.length;

    return(promedio);

}

console.log(avarege([2, 3, 5, 9, 1, 0]));
