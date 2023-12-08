// The const keyword was introduced in ES6 (2015)
// Variables defined with const cannot be Redeclared

// Variables defined with const cannot be Reassigned

// Variables defined with const have Block Scope

const  pi  = 3.1415  ; // correct way
// pi = 3.14151; // this will give error
//pi = 3.141212+10 ; // this will give also error


 // when used const keyword word uyse 
// always declare a variable with const when you know that value should not change

// used const keyword

// a new array
// a new object 
// a new fuction
// a new RegExp


const car = ["honda","audi","bmw"]

// you can change element of array

car[0] = "saab";
console.log(car)
// add element 
car.push("Volvo")
console.log(car)


//const car = ["honda","audi","bmw"]
//car =["honda","audi","bmw","saab"]  // this will give a error ,you cannot reasign value

// const with object in javascript

const person = {
    name: "abc",
    age :20,
    gender: "'male",
    role:"developer",
}
console.log(person)

// you can change properties
person.age=24
// you can add a properties
person.status = "single";
console.log(person)

