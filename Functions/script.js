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





// Calculate marks of different subjects and then grade them by taking avarage.
/*
const calculateMarks = () => {
  let chemistry = parseInt(prompt("Enter Chemistry Marks:"))
  let physics = parseInt(prompt("Enter physics Marks:"))
  let biology = parseInt(prompt("Enter biology Marks:"))
  let maths = parseInt(prompt("Enter maths Marks:"))
  totalMarks = biology + chemistry + physics + maths;
  totalPercentage = (totalMarks / 400) * 100
  console.log(totalPercentage)

  if (totalPercentage > 100) {
    return "You have entered wrong subject numbers."
  } else if (totalPercentage >= 90) {
    return "Grade A"
  } else if (totalPercentage >= 80) {
    return "Grade B"
  } else if (totalPercentage >= 60){
    return "Grade D"
  } else if (totalPercentage >= 40) {
    return "Grade E"
  } else {
    return "Fail"
  }

}

console.log(calculateMarks());
*/




// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
/*
const modifyArr = (arr) => {
    if ( arr.length >= 5) {
      arr[4] = arr[4].toUpperCase()
      return arr
    } else {
      return "length is smaller."
    }

}

console.log(modifyArr(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot','Abdullah']))
*/




// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
/*
const average = (arr) => {

   // Check if all items in the array are numbers
   if (!arr.every(item => typeof item === 'number')) {
    return 'Array contains non-number items.';
}

// Check if the array is empty
if (arr.length === 0) {
    return 'Array is empty, cannot calculate average.';
}

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    
  }
  return sum / arr.length;
}

console.log(average([1,2,3,4,5,7,2,6,3]))
*/




// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
/*
const sumArray = (arr) => {

  if (arr.some(value => typeof value !== 'number')) {
    return "Array include another type" ;
  }


  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum
} 
console.log(sumArray([1,2,3,4,5,7,2,6,3]))
*/




// Write a functions which checks if all items are unique in the array.
/*
const unique = (arr) => {
    // Convert the array to a Set, which automatically removes duplicates
    const uniqueItems = new Set(arr);
    return uniqueItems.size === arr.length; // If sizes match, all items are unique
};

// Test cases
console.log(unique([1, 2, 3, 4, 5])); // Output: true (all items are unique)
console.log(unique([1, 2, 2, 4, 5])); // Output: false (2 is repeated)
*/




// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
/*
const generateRandomNumber = () => {
  let numbers = [];
  for (let i = 0; numbers.length < 7 ; i++) {
    const randomNumber = Math.floor(Math.random() * 10);

  // Only add the random number if it's not already in the array.
  if (!numbers.includes(randomNumber)) {
    numbers.push(randomNumber)
  }
  }
  return numbers;
}

let randomNumbers = generateRandomNumber()
console.log(randomNumbers)
*/