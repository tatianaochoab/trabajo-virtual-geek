const name = [];
const gen = [];
const informationStarWars = () => {

    let name = document.getElementById("people").value;
    let information = document.getElementById("information");

    fetch(`https://swapi.dev/api/people/?search=${name}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.results)
            for (const result of data.results) {
                information.innerHTML += `<ul>
                                              <li>Nombre: ${result.name}</li>
                                              <li>Genero:${result.gen}<li>
                                          </ul>`
            }
        });
};

document.getElementById('btn').addEventListener('click', informationStarWars);