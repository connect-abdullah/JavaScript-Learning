// =============================================================================

// Promise

// Promises in JavaScript are similar to promises in real life. Either the promise is fulfilled, and we get what was promised, or it is broken, and we don't. In JavaScript, a Promise allows us to plan ahead by specifying what to do if the promise is fulfilled and how to handle the situation if it is not.

// "Hey, JavaScript, I promise to get something done (like fetching data). Once it's done, I'll tell you if it worked or failed."

// =============================================================================


// Promise Example

/* 

const doPromise = new Promise((resolve,reject) => {   // Promise take two parameters, resolve & reject.
    // Resolve parameter do the things if the promise is fulfilled
    // Reject parameter do the things if the promise isn't fulfilled

    const skills = ["HTML", "CSS", "JS"]
    if (skills.length > 4) {
        resolve(skills)  // Here, if the condition is fulfilled, skills arr is assigned to resolve parameter
    } else {
        reject("Skills not provided") // But, if the condition isn't fulfilled, this string is assigned to reject parameter
    }

})

doPromise.then(result => console.log("These are the skills :",result)).catch(err => console.log("ERROR : ",err))

// We Call promises using the name we assigned to a promise and then by using (.then , .catch) methods.
// In (.then) method, we pass a parameter which takes up the value of resolve parameter of Promise automatically.
// In (.catch) method, we pass a parameter which takes up the value of reject parameter of Promise automatically.
// Hence we can determine that what to do if the promise is fulfilled or not.

 */


// =============================================================================

// Fetch API and its usage with Promise

// =============================================================================
/* 
const url = 'https://restcountries.com/v2/all' // countries api


fetch(url)
    .then(response => response.json()) // accessing the API data as JSON
    .then(data => {
    data.forEach(country => {
        const name = country.name;
        const region = country.region;
        const capital = country.capital;
        const code = country.alpha2Code;
        const population = country.population;
        // Safely extract the first language name (if available)
        const lang = country.languages && country.languages.length > 0 
        ? country.languages[0].name 
        : 'No language data';
        // Safely extract the first currency symbol (if available)
        const currency = country.currencies && country.currencies.length > 0 
        ? `${country.currencies[0].code} : ${country.currencies[0].name}`
        : 'No currency data'; // Turnery Operation Condition ? Fulfilled : Unfulfilled

        console.log(`{ 
            Name: ${name} 
            Region: ${region}
            Capital City: ${capital}
            Country Code: ${code} 
            Population: ${population} 
            Language: ${lang}
            Currency: ${currency}
            }`); // Fetching & Extracting Multiple Properties from api.
      });
  })
  .catch(error => console.error(error)) // handling error if something wrong happens

 */


// =============================================================================

// Using Async Await

// =============================================================================

/* 
const url = "https://restcountries.com/v2/all"; // countries api

const fetchData = async () => {
  try {
    const response = await fetch(url) 
    // Waiting until it Fetches the data from url and assigning it to response variable
    const data = await response.json() 
    // Waiting until we can access the API data as JSON 
      
        data.forEach((country) => {
          const name = country.name;
          const region = country.region;
          const capital = country.capital;
          const code = country.alpha2Code;
          const population = country.population;
          // Safely extract the first language name (if available)
          const lang =
            country.languages && country.languages.length > 0
              ? country.languages[0].name
              : "No language data";
          // Safely extract the first currency symbol (if available)
          const currency =
            country.currencies && country.currencies.length > 0
              ? `${country.currencies[0].code} : ${country.currencies[0].name}`
              : "No currency data"; // Turnery Operation Condition ? Fulfilled : Unfulfilled

          console.log(`{ 
            Name: ${name} 
            Region: ${region}
            Capital City: ${capital}
            Country Code: ${code} 
            Population: ${population} 
            Language: ${lang}
            Currency: ${currency}
            }`); // Fetching & Extracting Multiple Properties from api.
        });
      ;
  } catch (error) {
    console.error(error);
  }
};

fetchData();
 */

