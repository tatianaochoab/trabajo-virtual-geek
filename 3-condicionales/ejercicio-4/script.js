//--------CONVERSOR DE EDAD DE PERRO A HUMANO--------

const firstYearDog = 15;
const secondYearDog = 9;
const thirdYearDog = 5;

let calcularEdad = (ageDog) => {
    var moreYear = (ageDog - 2);
    if (ageDog === 1) {
        console.log(`El perro tiene ${firstYearDog} años humanos`);
    } else if (ageDog === 2) {
        console.log(`El perro tiene ${firstYearDog + secondYearDog} años humanos`);
    } else if (ageDog === 3) {
        console.log(`El perro tiene ${firstYearDog + secondYearDog + thirdYearDog} años humanos`);
    } else {
        console.log(`El perro tiene ${firstYearDog + secondYearDog + thirdYearDog * moreYear} años humanos`);
    }
}

calcularEdad();