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









// Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.
/* 
  const statistics = {
    data: [],
  
    // Method to set data
    setData(sample) {
      this.data = sample;
    },
  
    // Count of data points
    count() {
      return this.data.length;
    },
  
    // Minimum value
    min() {
      return Math.min(...this.data);
    },
  
    // Maximum value
    max() {
      return Math.max(...this.data);
    },
  
    // Range
    range() {
      return this.max() - this.min();
    },
  
    // Mean (Average)
    mean() {
      return this.data.reduce((sum, value) => sum + value, 0) / this.count();
    },
  
    // Median
    median() {
      const sorted = [...this.data].sort((a, b) => a - b);
      const mid = Math.floor(sorted.length / 2);
      return sorted.length % 2 === 0
        ? (sorted[mid - 1] + sorted[mid]) / 2
        : sorted[mid];
    },
  
    // Mode
    mode() {
      const frequency = {};
      this.data.forEach(value => {
        frequency[value] = (frequency[value] || 0) + 1;
      });
  
      const maxFreq = Math.max(...Object.values(frequency));
      const modes = Object.keys(frequency)
        .filter(key => frequency[key] === maxFreq)
        .map(Number);
  
      return { mode: modes, frequency: maxFreq };
    },
  
    // Variance
    variance() {
      const mean = this.mean();
      return (
        this.data.reduce((sum, value) => sum + (value - mean) ** 2, 0) /
        this.count()
      );
    },
  
    // Standard Deviation
    stdDev() {
      return Math.sqrt(this.variance());
    },
  
    // Percentile
    percentile(percentile) {
      const sorted = [...this.data].sort((a, b) => a - b);
      const index = Math.ceil((percentile / 100) * sorted.length) - 1;
      return sorted[index];
    },
  
    // Frequency Distribution
    frequencyDistribution() {
      const frequency = {};
      this.data.forEach(value => {
        frequency[value] = (frequency[value] || 0) + 1;
      });
  
      return Object.entries(frequency)
        .map(([value, count]) => ({ value: Number(value), frequency: count }))
        .sort((a, b) => b.frequency - a.frequency);
    },
  };
  
  // Example Usage:
statistics.setData([10, 20, 20, 30, 40, 50, 60, 10, 70, 20, 80, 90]);
  console.log('Count:', statistics.count());
  console.log('Min:', statistics.min());
  console.log('Max:', statistics.max());
  console.log('Range:', statistics.range());
  console.log('Mean:', statistics.mean());
  console.log('Median:', statistics.median());
  console.log('Mode:', statistics.mode());
  console.log('Variance:', statistics.variance());
  console.log('Standard Deviation:', statistics.stdDev());
  console.log('25th Percentile:', statistics.percentile(25));
  console.log('Frequency Distribution:', statistics.frequencyDistribution());
 */