// fetch('https://dog.ceo/api/breeds/list')
//     .then(response => response.json())
//     .then(data => {
//         console.log('Breeds data response: ', data);
//         const ul = document.querySelector('ul');
//         const breeds = data.message;
//         let ulContent = '';
//         for (const breed of breeds) {
//             const breedContent = `<li>${breed}</li>`;
//             ulContent += breedContent;
//         }
//         ul.innerHTML = ulContent;
//     }
//     );


// fetch('https://dog.ceo/api/breeds/list')
//     .then(breedsResponse => breedsResponse.json())
//     .then(breedsData => {
//         const breeds = breedsData.message;
//         return fetch('https://dog.ceo/api/breed/' + breeds[0] + '/images/random');
//     }
//     )
//     .then(imageResponse => imageResponse.json())
//     .then(imageData => {
//         const img = document.querySelector('img');
//         img.src = imageData.message;
//         img.alt = 'Un perro';
//     }
//     );



function searchOrg() {
    let nameOrg = document.getElementById('name').value;
    let url = `https://api.github.com/orgs/${nameOrg}`
    let list = document.querySelector('ul');

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const repos_url = data.repos_url;
            return fetch(repos_url)
        })
        .then(listResponse => listResponse.json())
        .then(repoName => {
            for (const name of repoName) {
                list.innerHTML += `<li>${name.name}</li>`
            };
        })



}

document.getElementById('btn').addEventListener('click', searchOrg);