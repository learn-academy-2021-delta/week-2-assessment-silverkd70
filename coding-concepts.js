// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
console.log(cohort.split(""))

// a) Your answer: 'D', 'e', 'l', 't', 'a', ' ', '2', '0', '2', '1'
// b) Verify and explain: My answer was correct because the built-in method .split with the double quotes and no spaces calls on the variable cohart to split the string between each character.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer:'Hello, LEARN Student!'
// b) Verify and explain: OK, obiously I just looked and the console.log when I should have noticed that the function was missing the return command.  If a function does not have the return command, then calling on or invoking the function will generate the output of "undefined" because the function has not been assigned a value.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: the code is declaring the variable multBy2 and defining the array with the high order function .map that invokes the arguement/paramaters.  It uses the value paramater to multiply each number within the array by 2 and the map mathod to iterate each element within the array.


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
console.log(oddsOnly)

// a) Your answer: [12, 14]
// b) Verify and explain: although the variable is declared as oddsOnly, the high order function .filter is envoking the arguement/paramaters to sort through each element within the array and only identify each element that is divisible by 2.  This will cause the console.log to call on oddsOnly and result in and iterations that only displays the elements within the array that are divisible by 2.


// --------------------5) What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: student: "George", cohort: "Delta", year: 2021
// b) Verify and explain: It actually displayed Learn { student: 'George', cohort: 'Delta', year: 2021 }.  With more coding and practice I will be more familiar with how things will be displayed when conosoled to the terminal.  I assumed that the new variable declaration for learnStudent was calling on the Learn class by using the keyword 'new' and identiying "George" to be the student name since the constructor method is indicating the name type or object to be created within the class.  Therefore the console.log calls on the class to display student: name declared as "George" along with the predefined cohort: "Delta", and predefined year: 2021.
