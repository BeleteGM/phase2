alert("your JS file is connected!!");
// question prt 1 one
console.log(1 == true);
console.log(2 < "12");
console.log(0 == 2);
console.log(2.0 === 2);
console.log(2.0 == "2");
console.log(2 < "John");
console.log(2 > "John");
console.log("2" < "2");
console.log("2" > "12");
console.log(1 == 1 || 3 == 2 || 3 == 7); //tue
console.log(1 == 1 && 2 == 2 && 3 == 7); //false
console.log(1 == 1 || (2 == 2 && 3 == 7)); //true
console.log(
  (1 == true && 0 > true) || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1")
);
/* question part 2*/

console.log("1" === 1);
console.log(1 == 1);
console.log(1 === 1);
let x = 1 == true;
console.log(x);
x = 10;
let y = x > 5 && x < 15;
console.log(y);
x = 5;
x += 3;
console.log(x);
x = 10;
y = x++;
console.log(y);
x = 1;
y = x !== 2;
console.log(y);
console.log(+"2" + 2);
console.log(7 % 3);
console.log(2 + true);
/* question part 3 */

let a, b, c;
a = 1;
b = 2;
c = a + b;
console.log(c);
/* question part 4*
//Create a variable to hold your first name
● Create another variable to hold your last name
● Create a third variable to hold your full name
● Assign the value of your first name and last name to the first two variable
● Use "+" to concatenate your first name and last name to assign the result to your last name's
variable
● Don't forget to include space between your first and last name
● Display the value of your full name on the console
*/

var firstName, lastName, FullName;
firstName = "Belete";
lastName = "Misgan";
FullName = firstName + " " + lastName;
console.log(FullName);
//if grade =90 A+
// else if grade=80 A
//ESLSE IF GRADE 50 C
var score = 90;
switch (true) {
  case score >= 90:
    console.log("A+");
    break;
  case score >= 80:
    console.log("A");
    break;
  default:
    console.log("F");
    break;
}

var abebe = {
  firstName: "Belete",
  MidName: "Misgan",
  lastName: "Mengie",
  age: 24,
  sex: "male",
  xx: function () {
    console.log("this page is coded by Belete Misgan Mengie");
  },
};
console.log(abebe["firstName"]);
console.log(abebe.MidName);
console.log(abebe.lastName);
console.log(abebe.age);
console.log(abebe.sex);
abebe.xx();
