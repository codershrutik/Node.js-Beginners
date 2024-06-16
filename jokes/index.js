const jokes = require('give-me-a-joke');
const colord = require('colors');
// console.dir(jokes);
jokes.getRandomDadJoke(function(junk){
    console.log(jokes.rainbow);
});