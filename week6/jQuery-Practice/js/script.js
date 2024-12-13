// question number one 
// Question 1:
// The following three questions are based on the two paragraphs under the section which says,
// "For Question 1".
// 1.1. Select the element with an id of "sample1" using jQuery.
// 1.2. Print the element itself on the console upon page refresh.
// 1.3. Print the content of the element on the console upon page refresh. Use jQuery to
// select the content of the element
// the first dev that print or display the the element of sample div
let week6= $("#sample1");// select through Jquery id selection.
console.log(week6);// display the out put of element 
console.log(week6.text());// display only the content 
// question number two
// Question 2:
// The following questions are based on the HTML code found under the section labeled "For
// question 2".
// 2.1. Select the element with an ID of "techCompanies" and display it on your console.
let m1=$("#techCompanies")// select tech companies through id selection of Jquery.
console.log(m1);

// 2.2. How many tech companies are listed under the ul element with an id of "techCompanies"? 
let m2= $("#techCompanies li");
console.log(m2.length);

//    2.3. Select all elements with a class of "red" and display them on the console.
let m3= $(".red");
console.log(m3);
//  2.4. Create a new li HTML element with a content of "Facebook" and display it on console
let m4= $("<li></>");
m4.text("facebook");

console.log(m4);
// 2.5. Give the newly created element a class of "blue" using jQuery
 m4.addClass("blue");
// 2.6. Append the newly created element next to the the "Sony" <li> element
m1.append(m4);
m4.css("background-color", "#06c");
// 2.7. How many of the tech companies are labeled blue? Find the result using jQuery and
// display the result inside the "blueCompanies" div.
let m5= $("#techCompanies .blue");
console.log(m5.length);
let m6= $("#blueCompanies");
    m6.text("the length of blue companies shift from tech companies to blue companies"+ " "+ m5.length);

    // Question 3:
    // A form with two text fields is provided under the section which says "For question 3". Write a
    // jQuery code which takes the values of the two fields, checks if they are number values and
    // calculate the sum and average of the two numbers.
    // 3.1. Display the result on the console
    // 3.2. Display the result underneath the form
    // 3.3. If any of the numbers provided is not a number, display a message that says "Please
    // enter numerical values only" underneath the form

