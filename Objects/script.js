// Now, the person object has firstName, lastName, age, location, skills and isMarried properties. The value of properties or keys could be a string, number, boolean, an object, null, undefined or a function.
/*
const rectangle = {
    length: 20,
    width: 20
  }
  console.log(rectangle) // {length: 20, width: 20}
  
  const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    isMarried: true
  }
  console.log(person)
  */


// We can access values of object using two methods:
// 1 : using . followed by key name if the key-name is a one word
// 2 : using square bracket and a quote
/*
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    getFullName: function() {
      return `${this.firstName}${this.lastName}`
    },
    'phone number': '+3584545454545'
  }
  
  // accessing values using .
  console.log(person.firstName)
  console.log(person.lastName)
  console.log(person.age)
  console.log(person.location) // undefined
  
  // value can be accessed using square bracket and key name
  console.log(person['firstName'])
  console.log(person['lastName'])
  console.log(person['age'])
  console.log(person['country'])
  console.log(person['skills'])
  console.log(person['location']) // undefined
  
  // for instance to access the phone number we only use the square bracket method
  console.log(person['phone number'])
  */

  // Now, the person object has getFullName properties. The getFullName is function inside the person object and we call it an object method. The this key word refers to the object itself. We can use the word this to access the values of different properties of the object. We can not use an arrow function as object method because the word this refers to the window inside an arrow function instead of the object itself.



  
/*
  const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city:'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki'
    },
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
  }
  
  //Object methods: Object.assign, Object.keys, Object.values, Object.entries
  //hasOwnProperty
  
  const copyPerson = person.getPersonInfo()
  console.log(copyPerson)
*/




// # 1 --- A Complex Problem Having Multiple Questions Related To It.

/*
  const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node.js'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node.js'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

// 1. Find the person who has many skills in the users object.
let maxSkillUser = '';
let maxSkillCount = 0;
for (let user in users) {
  if (users[user].skills.length > maxSkillCount) {
    maxSkillCount = users[user].skills.length
    maxSkillUser = user
  }
}
console.log(maxSkillUser)

// 2. Count logged in users.
let userLogged = 0;
for (const user in users) {
  if(users[user].isLoggedIn) {
    userLogged++;
  }
}
console.log(userLogged)

// 3. Count users having greater than or equal to 50 points.
let highPointsCount = 0;
for (let user in users) {
  if (users[user].points >= 50){
    highPointsCount++;
  }
}
console.log(highPointsCount)

// 4. Find people who are MERN stack developers from the users object.
let mernDev = []
for ( let user in users ) {
  const skill = users[user].skills
  if (skill.includes('MongoDB') && skill.includes('Express') && skill.includes('React') && skill.includes('Node.js') ) {
    mernDev.push(user)
  }
}
console.log(mernDev)

*/




/* 
// #2 --- A Complex Problem Having Multiple Questions Related To It.
// Users
const users = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

// Products
  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: ['ab12ex','eefamr','zwf8md']
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy','eefamr','ghderc']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy','ab12ex','zwf8md']
}
]
 */


// Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
/*
const signUp = (newUser) => {
  const userExists = users.some(user => user.email === newUser.email)
  if (userExists) {
    console.log("User Already Exists !!!")
  } else {
    users.push({
      ...newUser,
      _id : Math.random().toString(36).slice(2,7),
      createdAt : new Date().toLocaleString(),
      isLoggedIn : false
    })
    console.log("Added Succesfully !!!")
  }
}

signUp({
  username : 'Abdullah',
  email : "abdullah@gmail.com",
  password : "132141"
})
console.log(users)
*/


// Create a function called signIn which allows user to sign in to the application
/*
const signIn = (email,password) => {
  const user = users.find(user => user.email === email && user.password === password)
  if (user) {
    user.isLoggedIn = true ;
    console.log("Succesfully Logged In !!!")
  } else {
    console.log("Invalid Email or Password")
  }
}
signIn ('asab@asab.com', '123456')
*/





// The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product
/*
const rateProduct = (productId,userId,rating) => {
  const product = products.find(product => product._id === productId)
  if(product) {
    const existingRating = product.ratings.find(r => r.userId === userId)
    if(existingRating) {
      existingRating.rate = rating
      console.log("Rating Updated Succesfully");
    } else {
      product.ratings.push({ userId, rate: rating })
      console.log("Rating Added Succesfully")
    }
  } else {
    console.log("Product not found !!!")
  }
}

rateProduct('eedfcf','fg12cy2',5)     // run on live server
rateProduct('aegfal','fg12c2',5)
rateProduct('eedfcf','fg12cy',4)
rateProduct('hedfcg','fg13y2',5)
console.log(products)
*/ 




// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
/* 
const likeProducts = (productId,userId) => {
    const product = products.find(product => product._id === productId) 
    if (product) {
     const userIndex = product.likes.indexOf(userId)
     if (userIndex === -1) {
      product.likes.push(userId)
      console.log("Product Liked")
     } else {
      product.likes.splice(userIndex,1)
      console.log("Product Unliked")
     }
    } else [
      console.log("Product Not Found !!!!")
    ]
}

likeProducts("hedfcg",'ab12ex')
console.log(products)
*/