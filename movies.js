let movies =['Jumanji','Twilight','Notebook']

module.exports = movies //allows movies array available to other files

let food = require('./food.js'); // syntax to require acceptance of another JS file 
let songs = require('./songs.js');
let games = require('./games.js');

console.log(food,songs,games,movies); // prints arrays to console

