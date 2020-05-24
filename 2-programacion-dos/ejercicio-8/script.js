const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';

const html = `<ul>
                <li><img src = '${firstDogImage}'/><p>${firstDogName}</p></li>
                <li><img src = '${secondDogImage}'/><p>${secondDogName}</p></li>
                <li><img src = '${thirdDogImage}'/><p>${thirdDogName}</p></li>
             </ul>`

documentElement.innerHTML = html;