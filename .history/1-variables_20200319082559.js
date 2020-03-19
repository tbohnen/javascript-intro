const names = ["Theo", "Gianluca"];

console.log(names[1])
console.log(names[2])


var name = process.argv[2];
var surname = process.argv[3];

var fullName = name + " " + surname;

console.log("Name: ", name);
console.log("Surname: ", surname);
console.log("Hello World: ", fullName);
