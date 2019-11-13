const superheroes = require('superheroes');
const supervillains = require('supervillains');

let mySuperheroName = superheroes.random();
let mySupervillainsName = supervillains.random();

console.log('The random superhero: ' + mySuperheroName);
console.log('The random supervillains: ' + mySupervillainsName);