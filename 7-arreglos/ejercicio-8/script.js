//-----MI LISTA DE TAREAS-------

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false }
];
//crear un elemento con la información del ul con class= list
let list = document.getElementById('lista');

//Recorrer el arreglo tasks 
for (const task of tasks) {

    //Creación de los elementos li 
    let itemLista = document.createElement('li');
    //Creación de los elementos input
    let itemInput = document.createElement('input');
    //Convertir el input en un tipo checkbox
    itemInput.setAttribute('type', 'checkbox');
    //Preguntar si la tarea está completada
    if (task.completed) {
        //Cambiar le atributo checked al input para marcar la tarea completada
        itemInput.setAttribute('checked', 'checked');
        //Agragar clase tachado al elemento lista 
        itemLista.setAttribute('class', 'tachado');
    }
    //Agregar el evento de tipo click al elemento input
    itemInput.addEventListener('click', (e) => {
        //Preguntar si el input está chekeado
        if (e.target.checked) {
            //Cambio del contenido de la tarea a completada por medio de la funcion checktask 
            checkTask(e.target.parentNode.textContent, true);
            //Agregar la clase tachado al elemento padre del input que es el li
            e.target.parentNode.classList.add('tachado');
        } else {
            checkTask(e.target.parentNode.textContent, false);
            e.target.parentNode.classList.remove('tachado');
        }
        updateTasks();
    })
    //Definición de item input como elemento hijo del itemlista
    itemLista.appendChild(itemInput);
    //Ponerle el texto de la tarea al itemlista
    itemLista.appendChild(document.createTextNode(task.name));
    //Agragar otro elemento li a la lista
    list.appendChild(itemLista);
}

//debemos modificar su estado (propiedad completed) en el array tasks
let checkTask = (name, completed) => {
    for (const task of tasks) {
        if (name == task.name) {
            task.completed = completed;
        }
    }
}


//Definir total de tareas, completas e incompletas para imprimirlas en pantalla
let tasksTotal = () => {
    return tasks.length;
}

let tasksCompleted = () => {
    let numberCompleted = 0;
    for (const task of tasks) {
        if (task.completed === true) {
            numberCompleted++;
        }
    }
    return numberCompleted;
}

let tasksIncompleted = () => {
    let numberIncompleted = 0;
    for (const task of tasks) {
        if (task.completed === false) {
            numberIncompleted++;
        }
    }
    return numberIncompleted;
}

let updateTasks = () => {
    document.getElementById('frase').innerHTML = `Tienes ${tasksTotal()} tareas, ${tasksCompleted()} completadas y ${tasksIncompleted()} por realizar`;
}

updateTasks();

