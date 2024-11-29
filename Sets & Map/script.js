// Level 1 Exercise.


// Create an empty set
/* 
const newSet = new Set()
console.log(newSet)
*/


// Create a set containing 0 to 10 using loop
/* const numberSet = new Set();
for (let i = 1; i <= 10; i++) {
numberSet.add(i)
console.log(numberSet);
}
*/


// Remove an element from a set
/* 
const a = [4, 5, 8, 9]
newSet = new Set(a)
console.log(newSet.delete(9));
console.log(newSet);
*/


// Clear a set
/* 
const a = [4, 5, 8, 9]
const clearSet = new Set(a)
clearSet.clear();
console.log(clearSet); 
*/


// Create a set of 5 string elements from array
/* 
const stringArray = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];
const strSet = new Set(stringArray.slice(0,5))
console.log(strSet);
*/


// Create a map of countries and number of characters of a country
/* 
const countries = ['Ethiopia', 'Kenya', 'Uganda', 'Tanzania', 'Somalia'];

const countryMap = new Map();

countries.forEach(country => {
countryMap.set(country, country.length); // Key: country, Value: number of characters
});

console.log(countryMap);
*/