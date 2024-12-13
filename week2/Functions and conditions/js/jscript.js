alert("your JS file is connected!!");
/*Question 1
● Define a simple function named myFirst that prints the word "Hello" on the console
○ First define the function
○ Then call the function*/
function myFirst() {
  console.log("Hello word");
}
myFirst();
/*  Question 2
● Define a function called mySecond that takes a parameter and prints the parameter on
console
○ Feel free to give any value as a parameter in your function
 */
function mySecond(a) {
  if (typeof a == "number") {
    x = a;
    console.log(x);
  }
}
mySecond(20);

/* Question 3
● Define a function called myThird that takes a parameter and prints the parameter on the
console. But, it uses mySecond function to print the parameter on the console*/

function myThird(y) {
  if (typeof y == "number") {
    var z = mySecond(y);
  }
}
myThird(80);

/*Question 4
● Write a function named myFourth that takes an array as a parameter and prints only the first
value of the array on the console. Remember, this question is here to explain the concept of
function delegation in JavaScript. */
function myFourth(a) {
  console.log(a[0]);
}
myFourth(
  (array = [
    "Danile",
    "Misgan",
    "Mengie",
    24,
    "Male",
    "computerscience",
    "Hawassa University",
  ])
);
/*Question 5
● Write a function named myFifth that takes an array with two numbers in it as a parameter
and prints the sum of the two numbers on console*/
function myFifth(a) {
  if (Array.isArray(a) && a.length == 2) {
    if (typeof a[0] === "number" && typeof a[1] === "number") {
      var sum = a[1] + a[0];
      console.log(sum);
    } else {
      console.log("invalid Parameter");
    }
  } else {
    console.log("this is not array");
  }
}
var array1 = [21, 43];
myFifth(array1);
/**qusetions 6
 Write a function that takes an integer minutes and converts it to seconds.
 */
function MinuteToSecond(a) {
  if (typeof a == "number" && a >= 0) {
    a *= 60;
    console.log(a + "seconds");
  } else {
    console.log("it is not a number");
  }
}
MinuteToSecond(10);

/**Question 7
● Create a function that takes a number as a parameter, increments the number by +1 and
returns the result.

 */
function increments(a) {
  if (typeof a === "number") {
    a += 1;
    return a;
  } else {
    return " this is not A number";
  }
}
let increment = increments(20);
console.log(increment);
/**Question 8
● Write a function that takes the base and height of a triangle and returns its area.
 */
function AreaOfTriangle(b, h) {
  if (isNaN(b) || isNaN(h) & (b <= 0) & (h <= 0)) {
    return "we don't have calculate the area of rectangle because it is not a number";
  } else {
    var area = (b * h) / 2;
    return area;
  }
}
var areat = AreaOfTriangle(21, 21);
console.log(areat);
/**Question 9
● Create a function that returns the total number of legs of all the animals. In this challenge, a
farmer is asking you to tell him how many legs can be counted among all his animals. The
farmer breeds three species (chickens = 2 legs, cows =, 4 legs, pigs = 4 legs). Remember:
the farmer wants to know the total number of legs and not the total number of animals
 */
function TotalNumberanimal(cow, chiicken, pig) {
  if (
    typeof cow == "number" &&
    typeof chiicken == "number" &&
    typeof pig == "number" &&
    cow >= 1 &&
    chiicken >= 1 &&
    pig >= 1
  ) {
    var sum = 0;
    var c = cow * 4;
    var ch = chiicken * 2;
    var p = pig * 4;
    sum += c + ch + p;
    return sum;
  } else {
    return "invalid Parameter";
  }
}
var animals = TotalNumberanimal("cow", 4, 5);
console.log(animals);
/** Question 10 (not from edabit.com)
● Create a function that takes an array containing only TWO numbers as a parameter and
returns a value that is 3 times the first element of the array.*/
function multiply(arr) {
  if (Array.isArray(arr) && arr.length == 2 && arr[0] == "number") {
    var product;

    product = arr[0] * 3;
    return product;
  } else {
    return " invalid parameter ";
  }
}
var x = multiply([21, 43, 23]);
console.log(x);

/**Question 11
● Create a function that returns true when num1 is equal to num2; otherwise return false */
function EqualNumber(num1, num2) {
  if (typeof num1 == "number" && typeof num2 == "number") {
    if (num1 == num2) {
      return true;
    } else {
      return false;
    }
  } else {
    return "false parameter";
  }
}

var number = EqualNumber("abebe", 20);
console.log(number);
/**Question 12
● Create a function that takes an integer and returns true if it's divisible by 100, otherwise
return false.
 */
function divisible(num1) {
  if (num1 % 100 == 0) {
    return true;
  } else {
    return false;
  }
}
var number1 = divisible(1000);
console.log(number1);
/**Question 13
● Create a function that takes a number as an argument and returns "even" for even numbers
and "odd" for odd numbers. */
function EvenOddNumber(num1) {
  if (typeof num1 == "number") {
    if (num1 % 2 == 0) {
      return "this number is even number";
    } else {
      return "this number is odd number";
    }
  } else {
    return "this is not Anumber";
  }
}
var number2 = EvenOddNumber(3011);
console.log(number2);
/**Question 14
● Create a function that returns
○ “Invalid score” if score is above 100 or score is a negative number
○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
○ “Grade C” for any score below 79 */
function GradeResult(score) {
  if (typeof score == "number") {
    if (score > 100 || score < 0) {
      return "this grade is Invalid";
    } else if (score >= 90) {
      return "A+";
    } else if (score >= 85) {
      return "A";
    } else if (score >= 80) {
      return "A-";
    } else if (score >= 75) {
      return "B+";
    } else if (score >= 70) {
      return "B";
    } else if (score >= 65) {
      return "B-";
    } else if (score >= 60) {
      return "C+";
    } else if (score >= 50) {
      return "C";
    } else {
      return "F";
    }
  } else {
    return "it is not anumber";
  }
}
var number3 = GradeResult(95);
console.log(number3);

var myString = new String();
myString = "Created string with New";
console.log(myString.charAt(10));
console.log(myString.indexOf("with"));
console.log(myString.toLowerCase());
console.log(myString.toUpperCase());
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", "lomi"];
const citrus = fruits.slice(1, 4);
console.log(citrus);
let text = "How are you doing today?";
const myArray = text.split(" ", 4);
console.log(myArray);
var arr = new Array();
arr = [81, 45, 3, 43];
console.log(arr.sort());

//cat
// define function
// if numer or sting
//  if string
// for loop () forlooop

// symbol.lowercase() ===
// out lowercasel leter
// append
// out put return;
function lower(m) {
  var cocat = "";
  console.log(m.length);
  for (var i = 0; i < m.length; i++) {
    if (m[i] === m[i].toUpperCase()) {
      //F===f
      //G====g
      //c====c
      cocat = cocat + m[i]; //cat
    }
  }
  return cocat;
}
var aynye = lower("Aynalem Birhanie"); //cat

console.log(aynye);
// nested arrayfunction
//
function nestedArray(arr1, arry2) {
  if (Array.isArray(arr1) && Array.isArray(arry2)) {
    arry2.sort();
    arr1.sort();
    console.log(arry2);
    console.log(arr1);
    var array1min = arr1[0];
    var array2min = arry2[0];
    var array1max = arr1[arr1.length - 1];
    var array2max = arry2[arry2.length - 1];
    if (array1min >= array2min && array1max <= array2max) {
      return 1;
    } else {
      return 0;
    }
  }
}
var array4 = nestedArray([1, 2, 5, 6, 4, 3, 2, 10, 15, 12, 16], [4, 2, 5, 0]);
console.log(array4);
// define afunction
//check the inserted element is array or not
//for loop up to array.length
//if the first elemnt of the array >= the second element of the array
// swap
//if the second element of the array >= the third element of the array swap
// save the value of the array in sorting result
//return the result
function sortingArray(arr1) {
  if (Array.isArray(arr1)) {
    for (var j = 0; j < arr1.length; j++) {
      //5
      for (var i = j + 1; i < arr1.length; i++) {
        //1

        if (arr1[j] > arr1[i]) {
          //[6,4,2 ]
          //yes
          var temp = arr1[i]; //2
          arr1[i] = arr1[j]; //6
          arr1[j] = temp; //2
        }
      }
    }
    return arr1;
  }
}

var array4 = sortingArray([
  1, 9, 9, 8, 12, 1, 4, 56, 3, 8, 7, 6, 12, 0, 12, 1, 3,
]);
console.log(array4);

function animal(cow, chiicken, pig) {
  if (
    typeof cow == "number" &&
    typeof chiicken == "number" &&
    typeof pig == "number"
  ) {
    var sum = 0;
    var c = cow * 4;
    var ch = chiicken * 2;
    var p = pig * 4;
    sum += c + ch + p;
    return sum;
  } else {
    return "invalid Parameter";
  }
}
var animals = animal("cow", 4, 5);
console.log(animals);

function checksmallletter(a) {
  var resu = "";
  for (var i = 0; i < a.length; i++) {
    if (a.charAt(i).indexOf())
      if (a.charAt(i) == a.charAt(i).toLowerCase()) {
        var resu = resu + a.charAt(i);
      }
  }
  return resu;
}

var resul = checksmallletter("VBDBVNVFNaMNFyDHKJnRFLaDKlMMMm");
console.log(resul);

function NestedArray21(arr3, arr7) {
  let gmin = Math.min(...arr3);
  let hmin = Math.min(...arr7);
  let gmax = Math.max(...arr3);
  let hmax = Math.max(...arr7);
  console.log(gmin);
  console.log(hmin);
  console.log(gmax);
  console.log(hmax);
  if (Array.isArray(arr3) && Array.isArray(arr7)) {
    if (gmin >= hmin && gmax <= hmax) {
      return " the  array is nested array";
    } else {
      return "return false output";
    }
  } else {
    return "invalid parameter";
  }
}
var nestedarray31 = NestedArray21([1, 8, 5, 6, 2], [6, 6, 8, 0, 9]);
console.log(nestedarray31);

var abebe = {
  name: "danile",
  age: 26,
};
abebe.age = "belete";
console.log(abebe);
var danile = document.getElementById("two");
danile.style.background = "blue";
console.log(danile.className);
var danile2123 = document.querySelector(".green");

console.log(danile2123);

var class1 = document.getElementsByClassName("green");
class1.className = "red";
var class2 = document.getElementsByTagName("div");
console.log(class2);
class2.className = "red";

// for loop
//while loop
function addation(a) {
  var i = 1;
  var sum = 1;
  while (i <= a) {
    sum *= i;
    i++;
  }
  console.log(sum);
}
addation(50);
addation(100);
var array = [
  "belete",
  "misgan",
  24,
  "beletehucs192121@gmail.com",
  "0919393210",
];
console.log(array[1]);
var mulu = ["mulu", "alemu", "girma", "F", "091887", "red"];
console.log(mulu);
var mulu = {
  name: "mulu",
  MiddleName: " alemu",
  lastName: "girma",
  sex: "F",
  phone_no: "091833845",
  color: "red",
  functionName: function (a) {
    var c = 21000000;
    let product = c * a;
    return product;
  },
};

console.log(mulu.lastName);
var dn = mulu.functionName(10);
console.log(dn);

const staticList = document.querySelectorAll("div");
console.log(staticList.length); // prints: 2
// HTMLCollection (live collection)
const liveList = document.getElementsByTagName("div");
console.log(liveList.length); // prints: 2
// add a third paragraph using JS
const thirdPar = document.createElement("div");
thirdPar.textContent = "belete misgan";
thirdPar.className = "thirdPar";
console.log(thirdPar);
document.getElementById("div").appendChild(thirdPar);
thirdPar.style.background = "red";
thirdPar.style.textAlign = "center";
thirdPar.style.height = "80px";
thirdPar.style.fontSize = "21px";
thirdPar.style.padding = "30px";

// understand the problem
// write on the paper 44  is changed by 32
// general formula
// check the insrted element is array or not
// remove the last element of thearray
// add another new element in the last element of the array
//  save the result
// return the result

function JinkaUniversityspoint(sampleArray) {
  if (Array.isArray(sampleArray)) {
    // last elemnt of the array
    sampleArray[sampleArray.length - 1] = 32;
    // sampleArray.pop();
    // sampleArray.pop();
    // sampleArray.push(68);
    // sampleArray.push(32);
    console.log(sampleArray);
  }
}
JinkaUniversityspoint([5, 6, 99, 8, 76, 4, 68, 44]);
//10
let evangadiClass = {
  lengthOfCourse: "1 Month",
  website: "https://www.evangadi.com/",
  isChallenging: false,
  topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
  students: [
    {
      name: "Abebe",
      age: 34,
      sex: "M",
    },
    {
      name: "Kebede",
      age: 44,
      sex: "M",
    },
    {
      name: "Almaz",
      age: 27,
      sex: "F",
    },
    {
      name: "Challa",
      age: 22,
      sex: "M",
    },
    {
      name: "Chaltu",
      age: 19,
      sex: "F",
    },
  ],
  aynalem: function (evangadihClass) {
    var sum = 0;
    for (var i = 0; i <= 4; i++) {
      var average;
      var sum = sum + evangadiClass.students[i].age;
    }
    console.log(sum / 5);
  },
};
evangadiClass.topicsCovered[4] = "bootstrap";
evangadiClass.topicsCovered[5] = "jquery";

evangadiClass.lengthOfCourse = "5 month";

console.log(evangadiClass.students);
evangadiClass.aynalem();
var liElem = document.createElement("div");
liElem.className = "pink";
liElem.textContent = "this is web programming";
var parent = document.getElementById("div");
parent.appendChild(liElem);
console.log(parent);

var myDiv = document.getElementById("myDiv");

// Add event listeners to the div
myDiv.addEventListener("mouseover", function () {
  myDiv.style.backgroundColor = "red";
  myDiv.textContent = "Mouse Over";
  myDiv.style.color = "white";
});

myDiv.addEventListener("mouseout", function () {
  myDiv.style.backgroundColor = "yellow";
  myDiv.textContent = "Mouse Out";
  myDiv.style.color = "black";
});

myDiv.addEventListener("click", function () {
  myDiv.style.backgroundColor = "green";
  myDiv.textContent = "Clicked";
  myDiv.style.color = "white";
  document.body.style.backgroundColor = "red";
  document.body.section.button.style.backgroundColor = "blue";
});
var my = $("div");

my.text("this is Hawassa university");
my.on("mouseover", background);
function background() {
  $("body").css({
    backgroundColor: "#fafafa",
    color: "black",
    textAlign: "center",
  });
}
