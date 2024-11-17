// Practice Q1
// Remove, Replace, Add Company in an Array
/* let comp = ['Bloomberg','Microsoft','Uber','Google','IBM','Netflix']
let remComp = comp.shift();
console.log(comp,"Here is the removed company :", remComp)

let repComp = comp.splice(1,1,"Ola")
console.log(comp ,"Here is the replaced company :", repComp)

let newComp = comp.push("Amazon")
console.log(comp ,"Here is the new company :") */




// Practice Q2
// Create square of numbers in an array using functions and .map & .forEach
/* let arr = [1,2,3,4,5]
let newArr = arr.map((val) => {
    return val**2;
})
console.log (arr)
console.log(newArr) */




// Practice Q3
// Filter out marks of student that are above 90%
/* let arr = [87,96,76,90,93,91,67]

let marks = arr.filter ((val) => {
    return val > 90 ;
})
console.log(marks) */



// Practice Q4
// Take iput from user to already given array of numbers and then add them using .reduce method of array.
/* let arr = [2,5,3,6,]
let input = arr.push(Number(prompt('Enter Number :')))
console.log(arr);
let newArr = arr.reduce((res,curr)=>{
    return res + curr;
})
console.log(newArr) */




// Practice Q5
// Take a input from the user to generate n number of array and then add & multiply them using .reduce method.
/* let n = prompt('Enter the number :')

let arr = [];

for (let i = 1; i <=  n; i++) {
    arr[i-1] = i;   // Adjusting for Zero-Indexing or we can also use = arr.push(i)
}
console.log(arr)

let sum = arr.reduce((prev,curr)=>{
    return prev + curr;
})
console.log('Here is the Sum :',sum)

let mul = arr.reduce((prev,curr)=>{
    return prev * curr;
})
console.log('Here is the Multiplication :',mul) */




// Practice Q6
// Taking input to add items into array
// let items = ["apple","soap","tissues",'door handles']

// to push only one item
/* let newItem = items.push(prompt());
console.log(items) */

// To push items continously
/* let i = 0;
do {
    items.push(prompt());
    console.log(items);
} while (i <= items.length); */




// Practice Q7
//Taking input from user to push the fruit into an array and then checking if it is true or not.
/* const arr = ['apple','banana','peach']
let input = prompt("Enter Fruit Grapes Below :")
    userInput = arr.push(input)
if ( input == "Grapes") {
    console.log ("Very Good")
} else {
    console.log("You have entered a wrong fruit !!")
}

console.log (userInput);
console.log (arr) */



// Practice Q8
// Take input from user to enter their first and last name, show it together as string and also as an array. atleast 4
/* const userNames = () => {
    // Create an array to store user names
    let users = [];

    // Loop to collect 4 usernames
    for (let i = 1; i <= 4; i++) {
        let firstName = prompt("Enter First Name:");
        let lastName = prompt("Enter Last Name:");
        let fullName = firstName + " " + lastName;

        // Add the full name to the array
        users.push(fullName);
    }

    // Display all usernames
    console.log("Usernames:", users.toString());

    // Display as an array
    console.log("Array format:", users);
};
// Call the function to test
userNames(); */





// Practice Q9
/* const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'C++',
    "Python"
  ]

  // Print the first,middle,and last company
  console.log(webTechs[0])
  let middleIndex = webTechs.length - 5;
  console.log(webTechs[middleIndex])
let lastIndex = webTechs.length - 1;
console.log(webTechs[lastIndex])

// Print out each company in capital letters
for (const val of webTechs) {
    console.log (val.toUpperCase());
}


// Print As Sentence
let Sentence = `${webTechs.toString()} are great web technologies. `
console.log(Sentence)

*/




// Practice Q10
// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
/*
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
    'Pakistan',
    'Korea'
  ];

// Calculate the midpoint
const mid = Math.ceil(countries.length / 2)  // we are using ceil bcz we want one more in the first array, if we wanted one more in second array, we would have used .floor as it shifts the number towards nearest possible integer.
console.log(mid)


let firstArr = countries.slice(0,mid)
let secondArr = countries.slice(mid,)

console.log ("First Array :", firstArr)
console.log ("Second Array :", secondArr)
*/