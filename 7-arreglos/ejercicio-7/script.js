//----------A STORY "of" GEEKGIRL

let geekGirls = [
    {
        name: 'María',
        age: 29,
        profession: 'Diseñadora'
    },
    {
        name: 'Lucía',
        age: 31,
        profession: 'Ingeniera Química'
    },
    {
        name: 'Susana',
        age: 34,
        profession: 'Periodista'
    },
    {
        name: 'Rocío',
        age: 25,
        profession: 'Actriz'
    },
    {
        name: 'Inmaculada',
        age: 21,
        profession: 'Diseñadora'
    }
]

let countGeekGirls = () => {
    return geekGirls.length;
}

let averageAge = () => {
    let media = 0;
    for (const geekGirl of geekGirls) {
        media += geekGirl.age;
    }
    media = media/geekGirls.length;
    return media;
}

let theYoungest = () => {
    let nameYoung;
    let ageYoung = 0;
    for (const geekGirl of geekGirls) {
        if (ageYoung === 0 || ageYoung > geekGirl.age) {
            ageYoung = geekGirl.age;
            nameYoung = geekGirl.name;
        }
    }
    return nameYoung;
}
let countDesigners = (profession) => {
    let number = 0;
    for (const geekGirl of geekGirls) {
        if (profession === geekGirl.profession){
            number ++;
        }
    }
    return number;
}

