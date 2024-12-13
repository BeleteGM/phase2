// Question 1
// Given an array of numbers, write a function that prints in the console another array
// which contains all the even numbers in the original array, which also have even indexes only.
// ○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
// ○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]
// step :1 understand the problem
//  step: 2 write on paper  [1, 2, 3, 6, 4, 8]print 4
// step : 3 write general formula, so the general formula is if an array element is both even number and even index display or generate an array of elements.
// step: 4 write c do code step by step:
// define the function  name evenindexandnumbers
// create variable these variable empty space of array
//check an element is an array or not and also check the length of the array is greater than 0 or not
// write for loop
//check if both index and array of element is even or not
// if even  save on empty space of array variable
// display the result;
// finally call the functions.
function evenindexandnumbers(array) {
  var number = [];
  if (Array.isArray(array) && array.length > 0) {
    for (i = 0; i < array.length; i++) {
      if (i % 2 == 0 && array[i] % 2 == 0) {
        number.push(array[i]);
      }
    }
    console.log(number);
  }
}
evenindexandnumbers([1, 2, 3, 6, 4, 8]);
evenindexandnumbers([0, 1, 2, 3, 4]);

// question2
// ● Create a function that takes a two-digit number as an parameter and prints "Ok" in
// the console if the given string is greater than its reversed digit version. If not, the
// function will print "Not ok"
// ○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
// ○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32
// understand the problem
// write on paper  (72)=27 is not
// general formula that means if we have take one element in the parameter and reverse the number and if the orginal number is greater than the reverse number print ok otherwise not ok
// write c code based on step by step
//  define the function  named reverse
// check typeof element is number or not
//check number is two digit or not
// change the number in to string
// write for loop
//reverse this string
// change this string into number
// if the orginal number is greater than the reverse of the number print ok otherwise print not ok
function reverse(number) {
  if (typeof number === "number") {
    if (number >= 10 && number < 100) {
      var m = number.toString();

      var b = m.charAt(1) + m.charAt(0);
      console.log(m);
      var n = parseInt("m");
      if (number > b) {
        return "ok";
      } else {
        return "Not ok";
      }
    } else if (number >= -99 && number <= -10) {
      var m = number.toString();

      var b = m.charAt(0) + m.charAt(2) + m.charAt(1);

      var n = parseInt("m");
      if (number > b) {
        return "ok";
      } else {
        return "Not ok";
      }
    } else {
      return "the number is not two digit";
    }
  }
}
var mid = reverse(-21); //test
console.log(mid);

// Question 3
// ● Write a function that takes a positive integer and returns the factorial of the number.
// Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
// factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
// 4 * 3 * 2 * 1 = 24)
// ○ Test 1: returnFactorial(5) outputs 120
// ○ Test 2: returnFactorial(6) outputs 720
// ○ Test 3: returnFactorial(0) outputs 1
// understand the problem
// write on paper  // ○ Test 1: returnFactorial(5) outputs 120
// ○ Test 2: returnFactorial(6) outputs 720
// write general formula  return number*factorial(number-1);
//  write c code
//define function function name
// check type of element is number or not and length of that element is greater than 0
//check if the number is one return 0
// else return number*factorial(number-1);
function factorial(number) {
  if (typeof number == "number" && number >= 0) {
    if (number == 0) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  } else {
    return " this is not anumber";
  }
}
var num = factorial(5); // test
// Question 4 (Meera array)
// ● A Meera array is defined to be an array containing only numbers as its elements and for
// all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
// because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
// 2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
// array of numbered elements and prints “I am a Meera array” in the console if its array
// does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
// Meera array”
// ○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
// 2 is 10
// ○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
// ○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
// *2 is -6
//c code
// defie function function name
// check the  given element array or not
// check the array of length is greater than 0
//check the array is number or not
// forlop
// for loop
// if the the orginal element or array is equal to 2 *times the orginal element of the array
//if equal it is not meera array
// else not meera array
// call function
function merrayArray(array) {
  if (Array.isArray(array) && array.length > 0) {
    var m = 0;
    for (var z = 0; z < array.length; z++) {
      if (array[z] === "number") {
        m = m + 1;
      }
    }

    if (m === array.length) {
      var count = 0;
      for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
          if (array[i] == array[j] * 2) {
            count = count + 1;
          }
        }
      }

      if (count >= 1) {
        return "I am NOT a Meera array";
      } else {
        return "I am  a Meera array";
      }
    } else {
      return "please return only number in the array element";
    }
  } else {
    return "this not an array";
  }
}
var mearry = merrayArray([10, 4, "ab", 5]);
console.log(mearry);
// Question 5 (Dual array)
// ● Define a Dual array to be an array where every value occurs exactly twice. For example,
// {1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
// occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
// times) Write a function named isDual that returns 1 if its array argument is a Dual array.
// Otherwise it returns 0.

function DualArrAY(array) {
  if (Array.isArray(array) && array.length > 0) {
    // var cont = 0;
    // for (var z = 0; z < array.length; z++) {
    //   if (typeof array[z] === "number") {
    //     cont = cont + 1;
    //   }
    // }
    // if (cont === array.length) {
    var m = 0;
    for (j = 0; j < array.length; j++) {
      var count = 0;
      for (i = 0; i < array.length; i++) {
        if (array[j] === array[i]) {
          count = count + 1; //4
        }
      }

      if (count == 2) {
        var m = m + 2;
      }
    }
    // }
    if (m === array.length * 2) {
      return 1;
    } else {
      return 0;
    }
  }

  // }
  else {
    return "this not array";
  }
}

var dan = DualArrAY([1, 2, 1, 2, 5, 5]);
console.log(dan);

//

console.log(num);
// Question 6
// ● Write a function that takes the number of seconds and returns the digital format clock
// time as a string. Time should be counted from 00:00:00.
// ○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
// secs.
// ■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
// ■ digitalClock(87000) as "00:10:00" It's 00:10 next day.

function secondsToHour(number) {
  let hours = Math.floor(number / 3600);
  let minutes = Math.floor((hours % 3600) / 60);
  let seconds = Math.floor(minutes % 60);
  return (
    ("0" + hours).slice(-2) +
    ":" +
    ("0" + minutes).slice(-2) +
    ":" +
    ("0" + seconds).slice(-2) +
    " " +
    "HH:MM:SS"
  );
}

var m = secondsToHour(5025);
console.log(m);

var redColor = document.getElementById("red");
console.log(redColor);
var greenColor = document.querySelector(".yellow");
console.log(greenColor);

var parentElement = document.querySelector(".black").parentElement;
console.log(parentElement);
// querseleall
// byclassname
// bytagname
//byname
var mult = document.querySelectorAll(".green");
console.log(mult);
var allblack = document.getElementsByClassName("black");
console.log(allblack);
var tagname = document.getElementsByTagName("li");
console.log(tagname);
var name21 = document.getElementsByName("firstname");
console.log(name21);
var aynalem = document.createElement("li");
aynalem.className = "gren";
aynalem.textContent = "aynalem";

var mulu = document.querySelector(".green");
mulu.classList.add("red");
console.log(mulu);

var abebe = document.querySelector(".green");
console.log(abebe);
console.log(abebe.hasAttribute("name"));
console.log(abebe.getAttribute("name"));
abebe.setAttribute("id", "tomato");
abebe.removeAttribute("id");
var tewedaj = document.getElementById("two");
tewedaj.style.backgroundColor = "blue";
tewedaj.style.width = "100%";
tewedaj.style.height = "300px";
tewedaj.style.color = "green";
var button1 = document.getElementById("btn1");
button1.onclick = change;
let allparent = document.getElementById("listOfFruits");
function change() {
  allparent.style.backgroundColor = "green";
  allparent.style.color = "red";
  document.querySelectorAll("#red").style.color = "#06c";
}
function changeColor() {
  document.body.style.backgroundColor = "red";
}
