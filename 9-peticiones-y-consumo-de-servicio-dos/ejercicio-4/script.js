const savelocalStorage = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data));
}

const getLocalStorage = key => JSON.parse(localStorage.getItem(key));

const informationStarWars = () => {

    let name = document.getElementById("people").value;
    let information = document.getElementById("information");

    if (getLocalStorage('response')[0].name === name) {
        let locals = getLocalStorage('response')
        for (const local of locals) {
            information.innerHTML += `<ul>
                                           <li>Nombre: ${local.name}</li>
                                           <li>Genero:${local.gen}<li>
                                      </ul>`
        }
    } else {
        fetch(`https://swapi.dev/api/people/?search=${name}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results, 'estos son los datos')
                savelocalStorage('response', data.results)
                for (const result of data.results) {
                    information.innerHTML += `<ul>
                                              <li>Nombre: ${result.name}</li>
                                              <li>Genero:${result.gen}<li>
                                          </ul>`
                }
            });
    }


};

document.getElementById('btn').addEventListener('click', informationStarWars);


