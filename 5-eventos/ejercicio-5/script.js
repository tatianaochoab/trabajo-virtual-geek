//--------FAVORITOS---------

const sectionAboutElement = document.getElementsByClassName('teacher');


for (let i = 0; i < sectionAboutElement.length; i++) {
    const element = sectionAboutElement[i]
    element.addEventListener('click', () => {
        element.classList.toggle('teacher--selected');
        if (element.getElementsByClassName('favorite')[0].innerHTML == 'Añadir') {
            element.getElementsByClassName('favorite')[0].innerHTML = 'Quitar';
        }else{
            element.getElementsByClassName('favorite')[0].innerHTML = 'Añadir';
        }
    })
}

// document.getElementsByClassName('teachers').addEventListener('click', (e) =>{
//     alert('Hola');