// Practice Q1
// Iterate 0 to 10 using for loop, do the same using while and do while loop

/* for (let i = 0; i <= 10 ; i++) {
    console.log(i);    
} */

// let i = 0;
/* do {
    console.log(i);
    i++;
    } while (i <= 10) */

/*   while (i <= 10) {
        console.log(i);
        i++;
    } */



// Practice Q2        
// Iterate 10 to 0 using for loop, do the same using while and do while loop

/* for (let i = 10; i >= 0 ; i--) {
    console.log(i);    
} */

// let i = 10;
/* do {
    console.log(i);
    i--;
} while (i >= 0); */

/* while (i >= 0) {
    console.log(i);
    i--;
} */



// Practice Q3
// Iterate 0 to n using for loop

/* for (let i = 0; i >= 0; i++) {
console.log(i);    
} */



// Practice Q4
/* Write a loop that makes the following pattern using console.log():

*
**
***
****
*****
******
            
*/


/* let pattern = "";
for (let i = 0; i <= 6 ; i++) {
     pattern = pattern + "*".repeat(i) + "\n";
}
console.log(pattern) */




// Practice Q5
/* Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100 
*/

/* for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i} = ${i * i}`);
} */




// Practice Q6
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

/* let sumEven = 0;
let sumOdd = 0;
let arr = [];

for (let i = 0; i <= 100; i++) {
if ( i % 2 == 0 ) {
    sumEven += i; // it will print sum of even
} else {
    sumOdd += i; // It will print sum of odds
}
}

arr.unshift(sumEven,sumOdd)  // adds these two to the start of array
console.log(arr) */




// Practice Q7
// Develop a small script which generate any number of characters random id.
function generateRandomId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Characters to use
    let randomId = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length); // Get a random index
        randomId += characters[randomIndex]; // Append the random characterz
    }
    
    return randomId;
}

// Example usage:
const randomId = generateRandomId(10); // Generate a random ID of 10 characters
console.log(randomId);





// Practice Q8
// Print all the elements of array as one array from 2d, then make the output in line in uppercase.

/* const fullStack = [
   ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

  fullStack.flat().forEach(element => {
    console.log(element.toString().toUpperCase());
  }); */
 
  // flat(): Flattens the 2D array into a single array: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Express', 'MongoDB'].