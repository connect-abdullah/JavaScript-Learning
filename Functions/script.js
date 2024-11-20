// ----  Functions  ----


// Practice Q1
// Convert Celcius to Fahrenheit
/*
const convertCelsiusToFahrenheit = (oC) => {
    oF = Math.floor((oC * 9/5) + 32)
    return oF
}
console.log(convertCelsiusToFahrenheit(34))
*/




// Practice Q2
// Take input of the month and tell in which month it falls.
/*
const checkSeason = (month) => {
if (month == "August" || "September" || "October") {
    console.log('Autumn Season')
} else if (month == "November" || "December" || "January") {
    console.log('Winter Season')
} else if (month == "Feburary" || "March" || "April") {
    console.log('Spring Season')
} else {
    console.log('Summer Season')
}
}
checkSeason('September')
*/




// Practice Q3
// Make a function to find the Max number out of the parameters.
/*
const findMax = (a,b,c) => {
if (a > b && a > c ) {
    console.log(a)
} else if ( b > a && b > c ) {
    console.log(b)
} else {
    console.log(c)
}
}

findMax(13,86,23)
*/




// Practice Q4
// Write Linear Variable
/*
  const linear = (a,b,c) => {
console.log (`${a}x + ${b}y + ${c} = ${a+b+c}`)
  }
  linear(1,2,3)
  */




// Practice Q5
// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
/*
let arr = [];
const printArray = (arr) => {
    arr.forEach((ele) => {
        console.log(ele)
    })
    return arr
}
console.log(printArray([1,2,4,5]))
*/



// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
/*
const showDateTime = () => {
    const d = new Date();
    // Getting Date
    const day = String(d.getDate()).padStart(2,"0");
    const month = String(d.getMonth() + 1).padStart(2,"0")
    const year = String(d.getFullYear()).padStart(2,"0")

    // Getting Time
    const hours = String(d.getHours()).padStart(2,"0")
    const minutes = String(d.getMinutes()).padStart(2,"0")

    let fullDateTime = `Date : ${day}/${month}/${year}  Time : ${hours}:${minutes}`

    return fullDateTime
}

console.log( showDateTime() ); 
*/




// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
/*
const reverseArray = (arr) => {
    let reversed = [];

    for (let i = arr.length - 1 ; i >= 0; i--) {    // arr.length - 1 gives us the index of last element.
        reversed.push(arr[i]);  // ADD elements in reverse order. For example i = 4 means at 4th index element is 5. so when we push it to the array, 5 is written first. 
    }
    return reversed;
}
console.log (reverseArray([1,2,3,4,5]))
*/




//Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item.
/*
const removeItem = (arr,index) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if ( i !== index ) {   // in this condition we are saying that if i is not equal to index given, only then push i to the arr, but if it is equal then don't push
            result.push(arr[i])
        }
    }
    return result;
}

console.log( removeItem ([1,2,3,4,5],2))  // here when we put the index 2, then when i bceomes equal to 2, then if condition don't run and the code is not pushed to the array. Then for the next number it check again that is it equal to index or not, if it is not then it pushes the code to the array
*/




// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item.
/* 
function addItem(arr, item) {
    const result = []; // Create a new array to store the result
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]); // Copy each element from the original array
    }
    result.push(item); // Add the new item at the end
    return result; // Return the updated array
}

console.log(addItem([1, 2, 3, 4], 5)); // Output: [1, 2, 3, 4, 5]
*/




// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
/*
const sumOfNumbers = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};
console.log(sumOfNumber(10));
*/




// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
/*
const sumOfOdds = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
};
console.log(sumOfOdds(10));
*/




// Declare a function name sumOfEvens. It takes a number parameter and it adds all the even numbers in that - range.
/*
const sumOfEvens = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        sum += i;
      }
    }
    return sum;
  };
  console.log(sumOfEvens(10));
*/




// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
/*
const evensAndOdds = (n) => {
    let evens = 0; // Initialize count for evens
    let odds = 0;  // Initialize count for odds

    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            evens++; // Increment evens count for even numbers
        } else {
            odds++;  // Increment odds count for odd numbers
        }
    }

    console.log(`Evens: ${evens}, Odds: ${odds}`);
    return { evens, odds }; // Return the counts as an object
}

console.log(evensAndOdds(10)); // Output: Evens: 6, Odds: 5
console.log(evensAndOdds(15)); // Output: Evens: 8, Odds: 8
*/




// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
/*
const randomHexColor = () => {
    let hex = "#"  // As hex code starts with #
    const characters = "0123456789ABCDEF"

    for (let i = 0; i < 6; i++) {   // we have set the limit to 6 bcz in hex code,there are 6 characters after #. ( RRGGBB )
        
        const randomIdx = Math.floor(Math.random() * characters.length)
        hex += characters[randomIdx]  // Adding # to characters. characters[randomIdx] takes random characters based upon randomIdx. randomIdx generates random number with according to character length.
        
    }
    return hex;
}

console.log(randomHexColor())
*/




// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
/*
const randomUserID = () => {
    let id = "#"  // As id starts with #
    const characters = "0123456789ABCDEFGHIKLMNOPQRSTUXYZ"

    for (let i = 0; i < 7; i++) {   // we have set the limit to 6 bcz in hex code,there are 6 characters after #. ( RRGGBB )
        
        const randomIdx = Math.floor(Math.random() * characters.length)
    id += characters[randomIdx]  // Adding # to characters. characters[randomIdx] takes random characters based upon randomIdx. randomIdx generates random number with according to character length.
        
    }
    return id;
}

console.log(randomUserID())
*/




// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
/*
const userIdGeneratedByUser = () => {
    const numChars = parseInt(prompt("Enter the length of ID :",10))  // Prompt the user for the number of characters per ID and also converting it into decimal form using parseInt.

    const numID = parseInt(prompt("Enter the number of ids to be generated :", 10))  // Prompt the user for the number of IDs to be generated and also converting it into decimal form using parseInt.

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    // Helper function to generate a single ID
    const generateID = () => {
        let id = '';
        for (let i = 0; i < numChars; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length);
            id += characters[randomIndex];   // Append the random character to the ID
        }
        return id;
    }

    // Array to store all the generated IDs
    let ids = []
    for (let i = 0; i < numID; i++) {  // Generate IDs based on the specified count
        ids.push(generateID())  // Add each generated ID to the array
    }

    return ids.join("\n");  // Return the IDs as a newline-separated string
}
console.log(userIdGeneratedByUser())
*/