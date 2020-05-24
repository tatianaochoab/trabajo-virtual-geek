//-----------QUÉ VEMOS ESTA NOCHE------------

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

HTML = `<ul>
            <li>${inception}</li>
            <li>${theButterFlyEffect}</li>
            <li>${eternalSunshineOfTheSM}</li>
            <li>${blueVelvet}</li>
            <li>${split}</li> 
        </ul>`;

document.getElementById('list-movie').innerHTML = HTML;

document.getElementById('list-movie').addEventListener('click', (e) => {
    alert(e.target.nodeName);
});