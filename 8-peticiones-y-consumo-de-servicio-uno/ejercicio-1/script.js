//-----NÚMERO ALEATORIO---------

//---Ejemplo Codepen-------
fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
    .then(response => response.json())
    .then(data => document.body.innerHTML = data.result)

//------------------------------------------------------------------

fetch('https://rand.fun/number/integer')
    .then(response => response.json())
    .then(data => document.body.innerHTML = data.result)