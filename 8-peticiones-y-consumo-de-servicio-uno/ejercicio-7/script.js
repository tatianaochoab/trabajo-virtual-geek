// fetch('https://rand.fun/number/integer')
//     .then(response => response.json())
//     .then(data => document.body.innerHTML = data.result)

fetch('https://rand.fun/number/integer')
.then(response => response.json())
.then(data => document.body.innerHTML = data.result)
.catch(error => console.log(`Ha sucedido un error: ${error}`));