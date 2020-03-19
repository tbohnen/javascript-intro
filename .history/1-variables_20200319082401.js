console.log(process.argv)


var name = process.argv[2];
var surname = "Bohnen";

var fullName = name + " " + surname;

console.log("Name: ", name);
console.log("Surname: ", surname);
console.log("Hello World: ", fullName);

name = "G";

console.log("-----------------");

console.log("Name: ", name);
console.log("Surname: ", surname);
console.log("Hello World: ", fullName);