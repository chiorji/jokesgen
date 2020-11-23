var mathLib = require("./lib");
var jokeLib = require('./jokes/index')

var app = {};

app.config = {
  timeBetweenJokes: 3000,
};

app.printAJoke = function () {
  var allJokes = jokeLib.allJokes()
  var numberOfJokes = allJokes.length
  var randomNumber = mathLib.getRandomNumber(1, numberOfJokes)
  var selectedJoke = allJokes[randomNumber - 1]
  console.log(selectedJoke)
}

app.indefinteLoop = function () {
  setInterval(app.printAJoke, app.config.timeBetweenJokes)
}

app.indefinteLoop()