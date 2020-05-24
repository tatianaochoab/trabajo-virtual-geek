//------------NOTIFICACIONES ARCOIRIS-----------

const activableSection = document.querySelector('.activable-section');
const activableTitle = document.querySelector('.title');
const activableParagraph = document.querySelector('.paragraph');

if (activableSection.classList.contains('warning')) {
    activableTitle.innerHTML = 'AVISO';
    activableParagraph.innerHTML = 'Tenga cuidado';

} else if (activableSection.classList.contains('error')) {
    activableTitle.innerHTML = 'ERROR';
    activableParagraph.innerHTML = 'Ha surgido un error';

} else if (activableSection.classList.contains('succces')) {
    activableTitle.innerHTML = 'CORRECTO';
    activableParagraph.innerHTML = 'Los datos son correctos';
}