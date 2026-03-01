// What is JSON?
// JSON is a lightweight format for storing and exchanging data. It is text-based, easy for humans to read, and easy for machines to parse.

const person = {
    name: "mahbuba",
    age: 22,
    isStudent: true
}

console.log(person); //{ name: 'mahbuba', age: 22, isStudent: true }



/* JSON.stringify() 
 JS object বা value → JSON string
 এটি JS object কে text (string) আকারে রূপান্তর করে
 প্রয়োগ হয় tobe shongkha ebong bnoolean string hoyna ebong key value pair hishebe thake.  
 */
const jsonString = JSON.stringify(person);
console.log(jsonString); //{"name":"mahbuba","age":22,"isStudent":true}



// to Parse: you can convert this again to parse that string into an array or object again. 

const obj = JSON.parse(jsonString);
console.log(obj) //{ name: 'mahbuba', age: 22, isStudent: true }