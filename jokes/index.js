var fs = require('fs')

var jokes = {}

jokes.allJokes = function () {
  var fileContent = fs.readFileSync(__dirname + '/jokes.txt', 'utf-8')
  var arrayOfJokes = fileContent.split(/\r?\n/)
  return arrayOfJokes
}

module.exports = jokes