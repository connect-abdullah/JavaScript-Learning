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






// Level 3

// Use the countries data to find the 10 most spoken languages:

/* 
  const countries = [
    { name: 'United States', languages: ['English'] },
    { name: 'Canada', languages: ['English', 'French'] },
    { name: 'France', languages: ['French'] },
    { name: 'Russia', languages: ['Russian'] },
    { name: 'Spain', languages: ['Spanish'] },
    { name: 'Portugal', languages: ['Portuguese'] },
    { name: 'Germany', languages: ['German'] },
    { name: 'Netherlands', languages: ['Dutch'] },
    { name: 'China', languages: ['Chinese'] },
    { name: 'Kenya', languages: ['Swahili', 'English'] },
    { name: 'Tanzania', languages: ['Swahili', 'English'] },
  ];
  
  // Step 1: Count the languages
  const languageCounts = {};
  countries.forEach(country => {
    country.languages.forEach(language => {
      if (languageCounts[language]) {
        languageCounts[language]++;
      } else {
        languageCounts[language] = 1;
      }
    });
  });
  
  // Step 2: Convert the counts to an array
  const languageArray = Object.entries(languageCounts).map(([language, count]) => {
    return { [language]: count };
  });
  
  // Step 3: Sort the array by count
  const sortedLanguages = languageArray.sort((a, b) => {
    const countA = Object.values(a)[0];
    const countB = Object.values(b)[0];
    return countB - countA;
  });
  
  // Step 4: Get the top N languages
  function mostSpokenLanguages(countries, topN) {
    return sortedLanguages.slice(0, topN);
  }
  
  console.log(mostSpokenLanguages(countries, 10));
  console.log(mostSpokenLanguages(countries, 3));
   */