let buscar = () => {
    let usuario = document.getElementById('user').value;
    fetch(`https://api.github.com/users/${usuario}?`)
    .then(response => response.json())
    .then(data => {
        let name = data.name;
        let img = data.avatar_url;
        let numRepos = data.public_repos;
        document.getElementById('information').innerHTML = `<h2>Resultados</h2>
                                                            <h4>Nombre</h4>
                                                            <p>${name}</p>
                                                            <h4>Foto</h4>
                                                            <img src=${img}/>
                                                            <h4>Número de repositorios</h4>
                                                            <p>${numRepos}</p>`
    });

}

document.getElementById('btn').addEventListener('click', buscar);