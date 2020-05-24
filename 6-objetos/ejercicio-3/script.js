//----------BIO DE GEEK--------

const geekGirl1 = {
    name: 'Susana',
    age: '34 años',
    profession: 'Periodista'
};

const geekGirl2 = {
    name: 'Rocío',
    age: '25 años',
    profession: 'Actriz'
};

showBio = (geekGirl) => {
    return `Mi nombre es ${geekGirl.name}, tengo ${geekGirl.age} y soy ${geekGirl.profession}`
}

alert(showBio(geekGirl1));
alert(showBio(geekGirl2));



