/* 
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland', "Egypt"]
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: '' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
] 
*/



/* 
// Use forEach to console.log each country in the countries array.
let countryName = countries.forEach(country => console.log(country))
console.log(countryName)

// Use forEach to console.log each name in the names array.
let allNames = names.forEach(name => console.log(name))
console.log(allNames)   // it will also give undefined value in the answer bcz console.log is also used in the function. Second time calling the console.log gives undefined values

// Use forEach to console.log each number in the numbers array.
const allNo = numbers.forEach(num => console.log(num))
allNo    // here it will not give the undefined answer as output bcz we have'nt called the console.log second time.
*/

/* 
// Use map to create a new array by changing each country to uppercase in the countries array.
let uppCountry = countries.map(country => country.toUpperCase())
console.log(uppCountry)

// Use map to create an array of countries length from countries array.
let lengthCountry = countries.map(country => country.length)
console.log(lengthCountry)

// Use map to create a new array by changing each number to square in the numbers array
let sqrNum = numbers.map(num => num ** 2)
console.log(sqrNum);

// Use map to map the products array to its corresponding prices.
let prices = products.map(product => product.price)
console.log(prices);
*/


/* 
// Use filter to filter out countries containing land.
let landCountry = countries.filter(country => country.includes("land"))
console.log(landCountry);

// Use filter to filter out countries containing six letters and more in the country array.
let lengthCountry = countries.filter(country => country.length >= 6)
console.log(lengthCountry);

// Use filter to filter out country start with 'E'.
let eCountry = countries.filter(country => country.startsWith('E'))
console.log(eCountry);

// Use filter to filter out only prices with values.
const validPrices = products.filter(item => typeof item.price === 'number' && item.price > 0);
console.log(validPrices);

// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
let sumPrices = products.filter(product => typeof product.price === 'number' && product.price > 0).map(product => product.price).reduce((arr,curr) => arr + curr,0)
console.log(sumPrices);
*/