const image = document.getElementById('img-dog');
let breed;

fetch('https://dog.ceo/api/breeds/list')
    .then(response => response.json())
    .then(dataList => {
        let breed = dataList.message;
        return fetch(`https://api.rand.fun/number/integer?max=${breed.length}&min=0`);
    })
    .then(numberResponse => numberResponse.json())
    .then(numberData => {
        let number = numberData.result
        return fetch(`https://dog.ceo/api/breed/${breeds[number]}/images/random`);
    })
    .then(response => response.json())
    .then(imageData => {
        image.src = imageData.message;
        image.alt = 'a dog';
    });

