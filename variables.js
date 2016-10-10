//Intentional made global by leaving off var before variable
log = console.log.bind(console);

var defaultName = 'Troy';

function sayHello(name) {
    if (name === undefined) {
        console.log('Hello, ' + defaultName + '!');
    }
    else {
        console.log('Hello, ' + name + '!');
    }
}

/*sayHello();
sayHello('Big Guy');
sayHello('Other Guy');
sayHello('James');*/

//console.log(global);
//console.log('Hello');

var transportationName = 'Malibu';
var transportationType = 'Car';
var $cost = 'Too Much';
var _gree = true;
var transportationNumber1 =true;
var snake_case_variables_is_okay = true;
var camelCaseIsBest = true;

var thisIsAVariable = true;
let thisBeTrue = true;
const thisNeverChange = true;

function testVariables () {
    var thisIsNotAvailableOutside = true;
    console.log(thisIsAVariable);
}

if (true === true) {
    let thisIsAvailableOutside = true;
}

//log(thisIsAvailableOutside);

const thisCannotChange = true;
//thisCannotChange = false;

//console.log(thisIsNotAvailableOutside);

var firstName = 'Troy';
firstName = 'Marie';

var lastName;
console.log(lastName);  //<- output at this point in the code

var thisIsUndefined;
var thisIsNull = null;
var thisIsBoolean = false;
var thisIsNumber = 12.34;
var thisIsAString = 'My favorite number is 12.34';
var thisIsExpression = (1 + 1 * 100 / 4 - 8);
//var thisIsInput = inputs.first_name;
var favoriteMovie = 'Star Trek Beyond';
var favoriteMovieDirector = 'Ang Li';
var favoriteMovieYear = 2016;
var favoriteMovieGenre = 'Sci-Fi';
var isMovie = true;
console.log(favoriteMovie, favoriteMovieDirector, favoriteMovieYear, favoriteMovieGenre, isMovie);

var verb = 'ran';
var sentence = 'Flying by the tower, I' + verb + 'to ' +
'safety';
console.log(sentence);

var verb = '1';
var sentence = 12 + Number(verb) + 12;
console.log(sentence);

var verb = 'ran';
var sentence = `Flying by the tower, I ${verb} to
safety`;
console.log(sentence);

var on = false;
var lightSwitch = (on ? 'The light is on.' : 'The light is off.')
console.log(lightSwitch);

if (lightSwitch === 'The light is on.');
