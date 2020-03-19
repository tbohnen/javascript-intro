//node 1-variables.js "Gianluca" "Sacco"

var name = process.argv[2];
var surname = process.argv[3];

var fullName = name + " " + surname;

console.log("Name: ", name);
console.log("Surname: ", surname);
console.log("Hello World: ", fullName);
