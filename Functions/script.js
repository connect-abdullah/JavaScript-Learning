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