// ion 4
// ● Write a function that takes an array as an argument and prints every element of the array on the
// console.
// ○ Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
// 1
// Hello
// 8
// 44
function array(array){
//  console.log(array);
//  console.log(array[1]);
 console.log(array.length);

}

array([1, "Hello", 8, 44])
array(["world", 13])

// function sumofNumber(arr){
//   let sum=0;
//   console.log(arr.length);
//   for(let i=0; i<arr.length; i++){
//     sum= sum + arr[i]; 
   
   
//   }
//   console.log(sum);
// }
// sumofNumber([5, 6, 99, 8, 76, 4, 68, 44])



// function loop(){ // function define 
//   for ( let i=1; i<=10; i=i+1){
//     console.log(i); //1 2 3 4 5 6 7 8 9 10
//   }

// }

// loop();

// Write a function that takes a single number as an argument and prints the next 5 numbers in the
// console. Note: each output should be displayed on a new line.
// ○ Test case: If you give 7 to the function, output should look like this:
// 8
// 9
// 10
// 11
// 12


// loop 


function oddEvenNumber(number){
  let sumodd=0;
  let sumeven=0;
  for(let i=0; i<number.length; i++){
if(number[i]%2==0){
  sumeven= sumeven+number[i]; //6+8+76+4+68+44;
}
else{
  sumodd= sumodd+number[i];//5 +99
}
  }
  let diff= sumeven-sumodd;
  console.log(diff);
}
oddEvenNumber([5, 6, 99, 8, 76, 4, 68, 44]);


function nextnumber(a){
for(i=a; i<a+5; i++){
  console.log(i);//8 9 10 11 12 
}
}
nextnumber(8);

// Write a function that takes a single number and prints the sum of the next 10 numbers after the
// given number.
// ○ Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+
// 11+ 12+ 13+ 14+ 15+ 16+ 17 = 125)

// function sum(a=7){
//   let sum =0;
// for(let i=a; i<a+10; i++ ){ i=10 i<17 i++=8
//  let  m = i+1; //8 //9//10 =11
//     sum=sum+m; //8+9=17=27+11=38
    
// }
// console.log(sum);
// }
// sum(7);


// Question 1
//  Write a function that prints the first 10 integers on the console starting from the number 1 using
// the JavaScript for loop.
//question 11, 12
// function integers() {
//   for (var i = 10; i >= 1; i--) {
//     console.log(11 - i);


//   }
// }

// integers();
// Question 2
// ● Write a function that takes a single number as an argument and prints the next 5 numbers in the
// console. Note: each output should be displayed on a new line.
// ○ Test case: If you give 7 to the function, output should look like this:
// 8
// 9
// 10
// 11
// 12

// let evangadiClass = {
//   lengthOfCourse: "1 Month",
//   website: "https://www.evangadi.com/",
//   isChallenging: false,
//   topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
//   students: [
//     {
//       name: "Abebe",
//       age: 34,
//       sex: "M",
//     },
//     {
//       name: "Kebede",
//       age: 44,
//       sex: "M",
//     },
//     {
//       name: "Almaz",
//       age: 27,
//       sex: "F",
//     },
//     {
//       name: "Challa",
//       age: 22,
//       sex: "M",
//     },
//     {
//       name: "Chaltu",
//       age: 19,
//       sex: "F",
//     },
//   ],
//   //question 13
//   average: function (asssignment) {
//     var sum = 0;
//     var av;
//     var percentage;
//     for (var i = 0; i < asssignment.students.length; i++) {
//       sum = sum + asssignment.students[i].age;
//       if (asssignment.students[i].sex == "M") {
//       }
//     }
//     av = sum / asssignment.students.length;
//     console.log(av);
//   },
//   //question 14
//   percentage: function (asssignment) {
//     var male = 0;
//     var female = 0;

//     var percentage;
//     for (var i = 0; i < asssignment.students.length; i++) {
//       if (asssignment.students[i].sex == "M") {
//         male = male + 1;
//       } else if (asssignment.students[i].sex == "F") {
//         var female = female + 1;
//       }
//     }
//     console.log((male * 100) / (male + female));
//   },
// };
// console.log(evangadiClass);
// // object.properties=" value";
// evangadiClass.lengthOfCourse = "5 month";
// console.log(evangadiClass);
// console.log(typeof evangadiClass.students[0]);
// evangadiClass.topicsCovered.push("bootstrap");
// console.log(evangadiClass.topicsCovered);
// //12
// evangadiClass.average(evangadiClass);
// evangadiClass.percentage(evangadiClass);
// //question 15
// function highlow(num1, num2) {
//   if (typeof num1 == "number" && typeof num2 == "number") {
//     if (num1 < num2) {
//       for (var i = num1; i < num2; i++) {
//         if (i % 3 == 0) {
//           console.log(i + "div3");
//         } else {
//           console.log(i);
//         }
//       }
//     } else if (num1 > num2) {
//       var temp = num1;
//       num1 = num2;
//       num2 = temp;
//       for (var i = num1; i < num2; i++) {
//         if (i % 3 == 0) {
//           console.log(i + "div3");
//         } else {
//           console.log(i);
//         }
//       }
//     } else {
//       if (num1 % 3 == 0) {
//         console.log(num1 + "div3");
//       } else {
//         console.log(num1);
//       }
//     }
//   }
// }
// highlow(10, 10);

// //question 16
// function multiple() {
//   for (var i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 != 0) {
//       console.log("fizz");
//     } else if (i % 5 == 0 && i % 3 !== 0) {
//       console.log("Buzz");
//     } else if (i % 5 == 0 && i % 3 == 0) {
//       console.log("fizzBuzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
// multiple();
// // question 19
// function evens(number) {
//   if (typeof number == "number" && Number.isInteger(number)) {
//     var num = number.toString();
//     var count = 0;
//     if (num.charAt(0) === "-") {
//       count = count + 1;
//     }
//     for (var i = 0; i < num.length; i++) {
//       if (num.charAt(i) % 2 == 0) {
//         count = count + 1; //2
//       } else if (num.charAt(i) % 2 == 0) {
//         count = count + 1; //2
//       }
//     }
//   }
//   if (count == num.length) {
//     console.log(1);
//   } else {
//     console.log(0);
//   }
// }

// evens(-6548);
// evens(648);
// function NextFiveNumbers(number) {
//   if (typeof number == "number") {
//     number = number + 1;
//     var nextNumber = number + 4;

//     for (i = number; number <= nextNumber; number++) {
//       console.log(number);
//     }
//   }
// }
// NextFiveNumbers(10);
// // Question 3
// // ● Write a function that takes a single number and prints the sum of the next 10 numbers after the
// // given number.
// // ○ Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+
// // 11+ 12+ 13+ 14+ 15+ 16+ 17 = 125)
// function sumNextTenNumbers(number) {
//   if (typeof number == "number") {
//     number = number + 1;
//     var nextNumber = number + 9;
//     var sum = 0;
//     for (i = number; number <= nextNumber; number++) {
//       sum = sum + i;
//     }
//     console.log(sum);
//   }
// }
// sumNextTenNumbers(12);
// // Question 4
// // ● Write a function that takes an array as an argument and prints every element of the array on the
// // console.
// // ○ Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
// // 1
// // Hello
// // 8
// // 44
// function array(array) {
//   if (Array.isArray(array) && array.length > 0) {
//     for (var i = 0; i <= array.length - 1; i++) {
//       console.log(array[i]);
//     }
//   }
// }
// array([1, 2, 3, "abebe", "Danile"]);
// // Question 5
// // ● Write a function that takes an array as an argument and prints the total number of elements
// // found in the array. Hint: use a property of the Array object to solve this question.
// // ○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
// // ○ Test case 2: Given the array a = ["world", 13], output should be: 2
// function LengthOfArray(array) {
//   if (Array.isArray(array) && array.length > 0) {
//     console.log(array.length);
//   }
// }

// LengthOfArray([1, 2, 3, "abebe", "Danile"]);
// //  Question 6
// //  Write a function that takes an array of numbers as a parameter and logs in the console the sum of all the numbers in the array. ○ Test case 1:
// //        If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 4 ○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because 3 + 0
// function Sumarray(array) {
//   if (Array.isArray(array) && array.length > 0) {
//     var sum = 0;
//     var sum1 = 0;
//     if (isNaN(array)) {
//       console.log("not anumber");
//     } else {
//       for (var i = 0; i < array.length; i++) {
//         sum = sum + array.at(i);
//       }
//       console.log(sum);
//     }
//   }
// }
// Sumarray([65, 66, 67, "cab", 45, 89]);

// // Question 7
// // ● Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all
// // odd numbers of the array from the total sum of all even numbers and logs the result in the
// // console.
// // ○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// // should be: 102
// // ■ Sum of odd numbers: 5 + 99 = 104
// // ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
// // ■ Difference between total even and total odd numbers: 206 - 104 = 102

// function EvenOdd(danile) {
//   var sum2 = 0;
//   var sum1 = 0;
//   var count = 0;
//   if (Array.isArray(danile) && danile.length > 0) {
//     for (var i = 0; i < danile.length; i++) {
//       if (!isNaN(danile[i])) {
//         if (danile[i] % 2 == 0) {
//           sum1 = sum1 + danile[i];
//           count = count + 1;
//         } else {
//           count = count + 1;
//           sum2 = sum2 + danile[i];
//         }
//       }
//     }
//     if (count == danile.length) {
//       var dif21 = sum1 - sum2;
//       console.log(dif21);
//     } else {
//       console.log("this is not anumber");
//     }
//   }
// }
// EvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 8, "f"]);
// // Question 8
// // ● Write a function that takes an array as a parameter and logs in the console the elements that have
// // even indexes only. Notice: this question is not asking you to log elements with even value, but
// // elements that are located on even indexes)
// // ○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
// // should be:
// // 5
// // 99
// // 76
// // 68
// // ○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
// // be:
// // 11
// // 3
// // car
// function evenIndex(array) {
//   if (Array.isArray(array)) {
//     for (var i = 0; i < array.length; i = i + 2) {
//       console.log(array[i]);
//     }
//   }
// }
// evenIndex([5, 6, 99, 8, 76, 4, 68, 44]);
// // Questions 9 and 10 are dependent on the sampleArray provided below:
// // let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
// // Question 9
// // Write a function that takes the sampleArray as a parameter, removes the last element from the array,
// // adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method
// function sampleArray21(a) {
//   if (Array.isArray(a)) {
//     console.log(a);
//     a.pop();
//     console.log(a);
//     a.push(32);
//     console.log(a);
//   }
// }
// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
// sampleArray21(sampleArray);
// // Question 10
// // ● Write a function that takes the sampleArray as an argument, sorts the array in ascending order
// // and prints the sorted array on the console
// // // Use the sort method. Make sure you understand just using the sort() method alphabetically.
// // You should use this sorting syntax - sort(function(a, b){return a-b});
// function sortArrayAscending(sampleArray) {
//   var sortedArray = sampleArray.sort(function (a, b) {
//     return a - b;
//   });

//   console.log(sortedArray);
// }

// var sampleArray15 = [5, 6, 99, 8, 76, 4, 68, 44];
// sortArrayAscending(sampleArray15);
// // Question 11
// // ● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the
// // console
// // ○ // Use the dot notation "." to call the property you want to change
// let evangadiClass = {
//   lengthOfCourse: "1 Month",
//   website: "https://www.evangadi.com/",
//   isChallenging: false,
//   topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
//   students: [
//     {
//       name: "Abebe",
//       age: 34,
//       sex: "M",
//     },
//     {
//       name: "Kebede",
//       age: 44,
//       sex: "M",
//     },
//     {
//       name: "Almaz",
//       age: 27,
//       sex: "F",
//     },
//     {
//       name: "Challa",
//       age: 22,
//       sex: "M",
//     },
//     {
//       name: "Chaltu",
//       age: 19,
//       sex: "F",
//     },
//   ],
//   // Question 13
//   // ● Write a function that takes the "evangadiClass" object as an argument and calculates the average
//   // age of the class. Print the result on the console

//   average: function (asssignment) {
//     var sum = 0;

//     var av;
//     var percentage;
//     for (var i = 0; i < asssignment.students.length; i++) {
//       sum = sum + asssignment.students[i].age;
//       if (asssignment.students[i].sex == "M") {
//       }
//     }
//     av = sum / asssignment.students.length;
//     console.log(av);
//   },
//   //   Question 14
//   // ● Write a function that takes the "evangadiClass" object as an argument and calculates the
//   // percentage of male students in the class. Print the result on the console
//   percentage: function (asssignment) {
//     var male = 0;
//     var female = 0;

//     var percentage;
//     for (var i = 0; i < asssignment.students.length; i++) {
//       if (asssignment.students[i].sex == "M") {
//         male = male + 1;
//       } else if (asssignment.students[i].sex == "F") {
//         var female = female + 1;
//       }
//     }
//     console.log((male * 100) / (male + female));
//   },
// };
// console.log(evangadiClass);
// // object.properties=" value";
// evangadiClass.lengthOfCourse = "5 month";
// console.log(evangadiClass);
// console.log(typeof evangadiClass.students[0]);
// // Question 12
// // ● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the
// // console
// // ○ // Use an array method

// evangadiClass.topicsCovered.push("bootstrap");
// console.log(evangadiClass.topicsCovered);
// evangadiClass.average(evangadiClass);
// evangadiClass.percentage(evangadiClass);
// // Question 15: Test the divisors of three
// // ● Write a function that takes 2 parameters: a low and high number. Your goal is to print all
// // numbers (on the console) between low and high, and for each of these numbers print
// // whether or not the number is divisible by 3. If the number is divisible by 3, print the word
// // "div3" directly after the number
// function highlow(num1, num2) {
//   if (typeof num1 == "number" && typeof num2 == "number") {
//     if (num1 < num2) {
//       for (var i = num1; i < num2; i++) {
//         if (i % 3 == 0) {
//           console.log(i + "div3");
//         } else {
//           console.log(i);
//         }
//       }
//     } else if (num1 > num2) {
//       var temp = num1;
//       num1 = num2;
//       num2 = temp;
//       for (var i = num1; i < num2; i++) {
//         if (i % 3 == 0) {
//           console.log(i + "div3");
//         } else {
//           console.log(i);
//         }
//       }
//     } else {
//       if (num1 % 3 == 0) {
//         console.log(num1 + "div3");
//       } else {
//         console.log(num1);
//       }
//     }
//   }
// }
// highlow(10, 10);
// // Question 16: The famous coding interview question (FizzBuzz)
// // ● Write a function that prints in the console the numbers from 1 to 100. But for multiples of
// // three print “Fizz” instead of the number and for the multiples of five print “Buzz” and for
// // numbers which are multiples of both three and five print "FizzBuzz".
// function multiple() {
//   for (var i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 != 0) {
//       console.log("fizz");
//     } else if (i % 5 == 0 && i % 3 !== 0) {
//       console.log("Buzz");
//     } else if (i % 5 == 0 && i % 3 == 0) {
//       console.log("fizzBuzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
// multiple();
// //Question 19: Evens number
// // ● An Evens number is an integer whose digits are all even. For example 2426 is an Evens
// // number but 3224 is not. Write a function named isEvens that prints on the console 1 if its
// // integer argument is an Evens number. The function prints 0 otherwise.
// function evens(number) {
//   if (typeof number == "number" && Number.isInteger(number)) {
//     var num = number.toString();
//     var count = 0;
//     for (var i = 0; i < num.length; i++) {
//       if (num.charAt(i) % 2 == 0) {
//         count = count + 1; //2
//       }
//     }
//     if (count == num.length) {
//       console.log(1);
//     } else {
//       console.log(0);
//     }
//   }
// }
// evens(-6348);

// // methods is in the object any function is methods
// function DualArrAY(array) {
//   if (Array.isArray(array) && array.length > 0) {
//     // var cont = 0;
//     // for (var z = 0; z < array.length; z++) {
//     //   if (typeof array[z] === "number") {
//     //     cont = cont + 1;
//     //   }
//     // }
//     // if (cont === array.length) {
//     var m = 0;
//     for (j = 0; j < array.length; j++) {
//       var count = 0;
//       for (i = 0; i < array.length; i++) {
//         if (array[j] === array[i]) {
//           count = count + 1; //4
//         }
//       }

//       if (count == 2) {
//         var m = m + 2;
//         console.log(m);
//       }
//     }
//     // }
//     if (m === array.length * 2) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }

//   // }
//   else {
//     return "this not array";
//   }
// }

// var dan = DualArrAY([1, 2, 1, 2, 5, 5]);
// console.log(dan);

// function evenindexandnumbers(array) {
//   if (Array.isArray(array) && array.length > 0) {
//     for (i = 0; i < array.length; i++) {
//       if (i % 2 == 0 && array[i] % 2 == 0) {
//         console.log(array[i]);
//       }
//     }
//   }
// }
// evenindexandnumbers([1, 2, 3, 6, 4, 8]);
// evenindexandnumbers([0, 1, 2, 3, 4]);

// function reverse(number) {
//   if (typeof number === "number") {
//     if (number >= 10 && number < 100) {
//       var m = number.toString();
//       console.log(m);
//       for (i = 0; i < 1; i++) {
//         var b = m.charAt(1) + m.charAt(0);
//         console.log(m);
//         var n = parseInt("m");
//         if (number > b) {
//           return "ok";
//         } else {
//           return "Notok";
//         }
//       }
//     } else {
//       return "the number is not two digit";
//     }
//   }
// }
// var mid = reverse(100);
// console.log(mid);
// //
// function merrayArray(array) {
//   if (Array.isArray(array) && array.length > 0) {
//     var count = 0;
//     for (i = 0; i < array.length; i++) {
//       for (j = 0; j < array.length; j++) {
//         if (array[i] == array[j] * 2) {
//           count = count + 1;
//         }
//       }
//     }
//     if (count >= 1) {
//       return "I am NOT a Meera array";
//     } else {
//       return "I am  a Meera array";
//     }
//   } else {
//     return "this not an array";
//   }
// }

// var mearry = merrayArray([10, 4, 0, 5]);
// console.log(mearry);
// function factorial(number) {
//   if (typeof number == "number" && number >= 0) {
//     if (number == 0) {
//       return 1;
//     } else {
//       return number * factorial(number - 1);
//     }
//   } else {
//     return " this is not anumber";
//   }
// }
// var num = factorial(5);
// console.log(num);
// function secondsToHour(number) {
//   let hours = Math.floor(number / 3600);
//   let minutes = Math.floor((hours % 3600) / 60);
//   let seconds = Math.floor(minutes % 60);
//   return (
//     ("0" + hours).slice(-2) +
//     ":" +
//     ("0" + minutes).slice(-2) +
//     ":" +
//     ("0" + seconds).slice(-2) +
//     "HH:MM:SS"
//   );
// }

// var m = secondsToHour(5025);
// console.log(m);
