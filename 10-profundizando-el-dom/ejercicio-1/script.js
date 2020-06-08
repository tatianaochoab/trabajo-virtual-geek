// const item1 = document.querySelector('.item--1');
// console.log(item1); // Devuelve una representación del elemento como HTML
// console.dir(item1); // Devuelve una representación del elemento como objeto

// const mother = item1.parentElement;

// console.log(`La madre de nuestro elemento es un <${mother.nodeName.toLowerCase()}> y tiene la clase .${mother.className}`);
// // Devuelve "La madre de nuestro elemento es un <ul> y tiene la clase .items"

// // Creamos un elemento nuevo, un <li>
// const newItem = document.createElement('li');
// console.log(newItem); // Devuelve "<li></li>"

// // Ahora creamos algo de contenido
// const newContent = document.createTextNode('Item nuevo');

// // Y se lo añadimos a nuestro <li>
// newItem.appendChild(newContent);
// console.log(newItem); // Devuelve "<li>Item nuevo</li>"

// const newItem = document.createElement('li');
// const newContent = document.createTextNode('Item nuevo');
// newItem.appendChild(newContent);

// const items = document.querySelector('.items');
// items.appendChild(newItem);


const numbers = [1, 2, 3]

for (let i = 0; i < numbers.length; i++) {
    const list = document.createElement('li');
    const content = document.createTextNode(`${numbers[i]}`);
    list.appendChild(content)

    document.querySelector('.items').appendChild(list);

}

