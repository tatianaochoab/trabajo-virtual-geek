//-------ESTRUCTURA DE DATOS PARA UN USUARIO------

let user = {};

const job = 'developer';

user.firstName = 'Tatiana';
user.lastName = 'Ochoa';
user.age = 24;
user.job = job;

console.log(user);

user.firstName = 'Otro distinto';
user.age += 1;

console.log(user);
