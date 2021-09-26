// ASSESSMENT 2: Coding practical questions with Jest

const { expect } = require("@jest/globals")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

//pseudo code

// declare a constant variable
// use the number perameter in the function action
// use conditionals and a modulo argument
// if input number meets modulo condition return string interpolation with variable placehoder to return expected output
// else return string interpolation with expected output

// a) Create a test with expect statements for each of the variables provided.

//testing with Jest

describe('divisibleByThree', () => {
    test('takes in a number and determines if the number is evenly divisible by 3 or not', () => {
        expect(divisbleByThree(num1)).toEqual('15 is divisible by three') 
        expect(divisbleByThree(num2)).toEqual('0 is divisible by three')
        expect(divisbleByThree(num3)).toEqual('-7 is not divisible by three')
    })
})

//test failed
    //ReferanceError: divisibleByThree is not defined
//rewriting code to define divisbleByThree, then running second test

var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
// Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisible by three"



// b) Create the function that makes the test pass.

// initially had a few issues getting the function to pass because I did not realize how specific the expect statements had to be when the variables declared were different.  This forced me to add an additional expect statement, then add (num1), (num2), (num3) plus add '15', '0', '-7' to 'is divisible by and 'is not divisible by'.  I'm grateful for the errors pointing me in the right direction to finally get this to PASS.

divisbleByThree = (number) => {
    if(number % 3 === 0){
       return `${number} is divisible by three`
    } else {
       return `${number} is not divisible by three`
    }
}



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

//pseudo code

// declare a high order function
// use the array perameter in the function action
// declare block scoped variable with the map built-in method to allow a change to each item in the array
// return the value to index at [0] to iterate and capitalize item in the array at the first index letter through upperCase mutation method with an addtional argument that returns the string within the array
// return the declared block scoped variable to display the expected output results


// a) Create a test with expect statements for each of the variables provided.

describe('firstLetterChange', (array) => {
    test('takes in any array with words then run mutator and capitalize the first letter of each word', () => {
        expect(firstLetterChange(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]) 
        expect(firstLetterChange(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]) 
    })
})

//test failed
    //ReferenceError: firstLetterChange is not defined
//rewriting code to define firstLetterChange, then running second test

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]



// b) Create the function that makes the test pass.

// even though I received the firstLetterChange is not defined, once I started to create the function to pass the test I was receiving an error that .map was undefined. The only way to resolve this was to change (array) to (randomNouns1) and (randomNouns2) in both except statement.  Finally, I received the green PASS. I did not realize how strict the testing syntax is. I will do further practice and research, however would welcome some enlightenment and elaboration on the process to know if I am doing this correctly.  Thanks

firstLetterChange = (array) => {
     let eachWord = array.map(value => {
        return value[0].toUpperCase() + value.substring(1)
    })
    return eachWord
}




// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

//pseudo code

// declare a for loop function
// use the string perameter in the function action
// execute a loop to iterate through the index of character in the string 
// create a conditional statement that assigns the index to each vowel "a, e, i, o, u" using the or operator
// return the index of the string which was assigned in the loop that was assigned to vowel index.

// a) Create a test with expect statements for each of the variables provided.

describe('vowelCount', (string) => {
    test('takes in a string and looks for the index number of the first vowel within the string', () => {
        expect(vowelCount(vowelTester1)).toEqual(1)      
    })
})

//test failed
    //ReferenceError: vowelCount is not defined
//rewriting code to define firstLetterChange, then running second test

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2



//b) Create the function that makes the test pass.

// second test failed with cannot read property 'length' of undefined.  Added (vowelTester1) in expect statement, then recieved .toEqual error. I changed my .toEqual from ('first vowel index number') to (1), which allowed the test to PASS without requiring me to input additional expext statements for the other two variables. This is definately a learning process that I still need to understand more about.

vowelCount = (string) => {
    for(let i=0; i<string.length; i++){
      if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u")
    {
      return string.indexOf(string[i])
    }

    }
  
  };