// =======================================================================
// Class Constructor

// The constructor is a builtin function which allows as to create a blueprint for our object. The constructor function starts with a keyword constructor followed by a parenthesis. Inside the parenthesis we pass the properties of the object as parameter. We use the this keyword to attach the constructor parameters with the class.
// =======================================================================



// The following Person class constructor has firstName and lastName property. These properties are attached to the Person class using this keyword. This refers to the class itself.
/* 
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person = new Person()

console.log(person)
 */
// Person {firstName: undefined, lastName:undefined}




// All the keys of the object are undefined. When ever we instantiate we should pass the value of the properties. Let us pass value at this time when we instantiate the class.

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//   }
// }

// const person1 = new Person('Asabeneh', 'Yetayeh')

// console.log(person1)

// Person {firstName: "Asabeneh", lastName: "Yetayeh"}




// As we have stated at the very beginning that once we create a class we can create many object using the class. Now, let us create many person objects using the Person class.
/* 
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh')
const person2 = new Person('Lidiya', 'Tekle')
const person3 = new Person('Abraham', 'Yetayeh')

console.log(person1)
console.log(person2)
console.log(person3)
 */
// Person {firstName: "Asabeneh", lastName: "Yetayeh"}
// Person {firstName: "Lidiya", lastName: "Tekle"}
// Person {firstName: "Abraham", lastName: "Yetayeh"}




// Using the class Person we created three persons object. As you can see our class did not many properties let us add more properties to the class.
/* 
class Person {
  constructor(firstName, lastName, age, country, city) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')

console.log(person1)
 */
// Person {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki"}




/* 
class Person {
    constructor (firstName,lastName,age,city,country) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.city = city
        this.country = country
    }
    getFullName() {
        const fullName = this.firstName + " " + this.lastName
        return fullName
    }
}

const person1 = new Person("Muhammad","Abdullah",18,'Islamabad','Pakistan')
const person1Properties = {city: person1.city, Country: person1.country}
console.log(person1 , person1Properties)

 */



// =======================================================================
// Make a program that take input from user and insert data in class and        automatically display the new persons data.
// =======================================================================

/* 
class Person {
    constructor (firstName,lastName,age,city,country) {
        this.firstName = prompt("Enter First Name :",firstName)
        this.lastName = prompt("Enter Last Name :",lastName)
        this.age = prompt("Enter your age",age)
        this.city = prompt("Enter your city",city)
        this.country = prompt("Enter your country",country)
    }
    getFullName() {
        const fullName = this.firstName + " " + this.lastName
        return fullName
    }
    address() {
        const address = this.firstName + " " + this.lastName + " ives in " + this.city + " City, Which is in " + this.country 

        return address
    }
}

const person1 = new Person()


console.log(person1)
console.log(person1.getFullName())
console.log(person1.address())
 */




// =========================
//           Getter
// =========================

// The get method allow us to access value from the object. We write a get method using keyword get followed by a function. Instead of accessing properties directly from the object we use getter to get the value. See the example bellow
/* 
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.getScore) // We do not need parenthesis to call a getter method
console.log(person2.getScore)

console.log(person1.getSkills)
console.log(person2.getSkills)
 */




// =========================
//           Setter
// =========================

// The setter method allow us to modify the value of certain properties. We write a setter method using keyword set followed by a function. See the example bellow.
/* 
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

person2.setScore = 1
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

console.log(person1.score)
console.log(person2.score)

console.log(person1.skills)
console.log(person2.skills)
 */





// =============================================================================

// Overriding methods

// As you can see, we manage to access all the methods in the Person Class and we used it in the Student child class. We can customize the parent methods, we can add additional properties to a child class. If we want to customize, the methods and if we want to add extra properties, we need to use the constructor function the child class too. Inside the constructor function we call the super() function to access all the properties from the parent class. The Person class didn't have gender but now let us give gender property for the child class, Student. If the same method name used in the child class, the parent method will be overridden.

// =============================================================================

/* 
class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
}
  
class Student extends Person {
    constructor(firstName, lastName, age, country, city,gender) {
        super(firstName, lastName, age, country, city)
        this.gender = gender
    }
}

const s1 = new Student('Muhammad','Abdullah','Age','Pakistan','Phalia','Male')
console.log(s1)
console.log(s1.getFullName()); 
*/



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// =============================================================================

// Exercises Level 1

// 1 - Create an Animal class. The class will have name, age, color, legs properties and create different methods
// 2 - Create a Dog and Cat child class from the Animal Class.

// =============================================================================
/* 
class Animal {
    constructor (name, age, color, legs) {
        this.name = name
        this.age = age + " Years"
        this.color = color
        this.legs = legs + " Legs"
    }
} 

class Cat extends Animal {
    constructor (name, age, color, legs, owner) {
        super(name, age, color, legs)
        this.owner = owner 
    }
}

class Dog extends Cat {

}

const cat = new Cat("ManoBilli", 2, "Black", 4, "Abdullah")
const dog = new Dog("Shera", 5, "Brown", 4, "Abdullah")

console.log(cat);
console.log(dog);
 */





// =============================================================================

// Exercises Level 3

/* Write a JavaScript class Calculations that includes methods to calculate statistical measures such as count, sum, min, max, range, mean, median, mode, variance, and standard deviation for a given dataset.

Then, extend this class with a new class called Statistics without adding any new methods or properties, and use it to calculate the statistical measures for the dataset.
Finally, print the results of all calculations using console.log. */

// =============================================================================
/* 
class Calculations {
    constructor(data) {
      this.data = data; // Store the data array in the instance
    }
  
    // Count
    count() {
      return this.data.length;
    }
  
    // Sum
    sum() {
      return this.data.reduce((acc, num) => acc + num, 0);
    }
  
    // Min
    min() {
      return Math.min(...this.data);
    }
  
    // Max
    max() {
      return Math.max(...this.data);
    }
  
    // Range
    range() {
      return this.max() - this.min();
    }
  
    // Mean (Average)
    mean() {
      return this.sum() / this.count();
    }
  
    // Median
    median() {
      const sorted = [...this.data].sort((a, b) => a - b);
      const mid = Math.floor(sorted.length / 2);
      return sorted.length % 2 === 0
        ? (sorted[mid - 1] + sorted[mid]) / 2
        : sorted[mid];
    }
  
    // Mode
    mode() {
      const frequency = {};
      this.data.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
      });
      const maxFreq = Math.max(...Object.values(frequency));
      const mode = Object.keys(frequency).find(key => frequency[key] === maxFreq);
      return { mode: Number(mode), count: maxFreq };
    }
  
    // Variance
    var() {
      const mean = this.mean();
      const variance =
        this.data.reduce((acc, num) => acc + Math.pow(num - mean, 2), 0) /
        this.count();
      return variance;
    }
  
    // Standard Deviation
    std() {
      return Math.sqrt(this.var());
    }
  
    // Frequency Distribution
    freqDist() {
      const frequency = {};
      this.data.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
      });
      const total = this.count();
      return Object.entries(frequency).map(([num, count]) => [
        (count / total) * 100,
        Number(num),
      ]);
    }
  }

class Statistics extends Calculations {

}

let data = [26, 26, 26, 26, 26, 27, 32, 37, 34, 33, 31, 24, 38, 29, 25]
const stats = new Statistics(data)

console.log('Count:', stats.count());
console.log('Sum:', stats.sum());
console.log('Min:', stats.min());
console.log('Max:', stats.max());
console.log('Range:', stats.range());
console.log('Mean:', stats.mean());
console.log('Median:', stats.median());
console.log('Mode:', stats.mode());
console.log('Variance:', stats.var());
console.log('Standard Deviation:', stats.std());
 */