// Destructing


// In JavaScript, it is used to assign different values to the values of array or objects.
/* 
  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  const [frontEnd, backEnd] = fullStack
  
  console.log(frontEnd) // ["HTML", "CSS", "JS", "React"]
  console.log(backEnd)  // ["Node", "Express", "MongoDB"]
     */


// If we like to skip on of the values in the array we use additional comma. The comma helps to omit the value at that specific index
/* 
  const numbers = [1, 2, 3]
  let [numOne, , numThree] = numbers //2 is omitted

  console.log(numOne, numThree)    // this will display values according to the index of array and will omit the additional comma index.

// Example 2 in this context
   const names = ['Asabeneh', 'Brook', 'David', 'John']
  let [, secondPerson, , fourthPerson] = names // first and third person is omitted

  console.log(secondPerson, fourthPerson)
Brook John
   */


// We can use default value in case the value of array for that index is undefined:
/* 
const names = [undefined, 'Brook', 'David']
let [ firstPerson = 'Asabeneh', secondPerson, thirdPerson] = names

console.log(firstPerson, secondPerson, thirdPerson) 
 */



// We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...).
/* 
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)
 */



// Destructuring during iteration
/* 
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
console.log(country, city)
}
// Finland Helsinki
// Sweden Stockholm
// Norway Oslo

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

for(const [first, second, third] of fullStack) {
console.log(first, second, third)
}
// HTML CSS JS
// Node Express MongoDB
 */



// Destructuring Object
// When destructuring object, the new name should exactly be the same as in object otherwise it will not display the value.
/* 
const data = {
  fullName : "Muhammad Abdullah",
  uni : "Comsats",
  age : "19"
}

let {fullName, uni, age} = data

console.log(fullName, uni, age)
 */

// But if i want to rename values, we can use this method for object.
/* 
const data = {
  fullName : "Muhammad Abdullah",
  uni : "Comsats",
  age : "19"
}

let {fullName: user, uni : study, age : growth} = data

console.log(user, study, growth) // Now it will display we renamed it.
 */



/* // Object parameter without destructuring
// Without destructuring
const rect = {
  width: 20,
  height: 10
}
const calculatePerimeter = rectangle => {
  return 2 * (rectangle.width + rectangle.height)
}

console.log(calculatePerimeter(rect)) // 60

//Another Example
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)']
}
// Let us create a function which give information about the person object without destructuring

const getPersonInfo = obj => {
  const skills = obj.skills
  const formattedSkills = skills.slice(0, -1).join(', ')
  const languages = obj.languages
  const formattedLanguages = languages.slice(0, -1).join(', ')

  personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
    obj.age
  } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

  return personInfo
}

console.log(getPersonInfo(person))
Object parameter with destructuring
const calculatePerimeter = ({ width, height }) => {
  return 2 * (width + height)
}

console.log(calculatePerimeter(rect)) // 60
// Let us create a function which give information about the person object with destructuring
const getPersonInfo = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages
}) => {
  const formattedSkills = skills.slice(0, -1).join(', ')
  const formattedLanguages = languages.slice(0, -1).join(', ')

  personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

  return personInfo
}
console.log(getPersonInfo(person))
/*
Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
*/
 








// Level 1 Exercises


// 1 - Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
/* 
const constants = [2.72, 3.14, 9.81, 37, 100]

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);
 */


// 2 - Destructure and assign the elements of countries array to fin, est, sw, den, nor
/* 
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

let [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor);
 */


// 3 - Destructure the rectangle object by its properties or keys.
/* 
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

let {width,height,area,perimeter} = rectangle
console.log(width,height,area,perimeter);
 */






// Level 2 Exercises

/* 
const users = [
  {
    name:'Brook',
    scores:75,
    skills:['HTML', 'CSS', 'JS'],
    age:16
  },
  {
    name:'Alex',
    scores:80,
    skills:['HTML', 'CSS', 'JS'],
    age:18
  },
  {
    name:'David',
    scores:75,
    skills:['HTML', 'CSS'],
    age:22
  },
  {
    name:'John',
    scores:85,
    skills:['HTML'],
    age:25
  },
  {
    name:'Sara',
    scores:95,
    skills:['HTML', 'CSS', 'JS'],
    age: 26
  },
  {
    name:'Martha',
    scores:80,
    skills:['HTML', 'CSS', 'JS'],
    age:18
  },
  {
    name:'Thomas',
    scores:90,
    skills:['HTML', 'CSS', 'JS'],
    age:20
  }
  ]
 */

// 1 - Iterate through the users array and get all the keys of the object using destructuring
/* 
  for (const { name, scores, skills, age } of users) {
    console.log(name, scores, skills, age);
  }
   */

// 2 - Find the persons who have less than two skills
/* 
  for (const { name, scores, skills, age } of users) {
    if (skills.length < 2) {
      console.log(name, "has less than two skills");
    }
  }
  */

// Level 3 Exercises

// 1 - A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
/* 
const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];

let [studentName, skills, [htmlScore, cssScore, jsScore, reactScore]] = student;
console.log(studentName, skills, jsScore, reactScore);
 */





// 2 - Write a function called convertArrayToObject which can convert the array to a structure object.
/* 
const students = [
  ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTML", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

const convertArrayToObject = (obj) => {
  for (const [user, skills, [htmlScore,cssScore,jsScore,reactScore]] of obj) {
    let object = {
      Name: user,
      skills: skills,
      scores: { 
       htmlScore : htmlScore,
       cssScore : cssScore,
       jsScore : jsScore,
       reactScore : reactScore
    }
    };
    console.log(object);
  }
};

convertArrayToObject(students);
 */
