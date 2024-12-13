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
    $(document).ready(function() {
        $('#adder').submit(function(e) {
          e.preventDefault(); // Prevent form submission
    
          // Get the values entered by the user
          var num1 = parseInt($("#first-value").val());
          var num2 = parseInt($("#second-value").val());
          if ($("#first-value").length>0 && $("#second-value").length>0){
            
          
     if ($.isNumeric(num1)&& $.isNumeric(num2)){
        var sum = num1 + num2;
        var average=sum/2;
    
        // Display the result
       
        $('#sum').html('sum:' + sum +'<br>Average:'+average);
    }
    else{
        $('#sum').text("please enter only numerical value ");
    }
        // Calculate the sum
    }
        });
      });
    
    // Question 4:
    // Create an HTML form which asks users to provide their First name, Last name and Email
    // address. All the fields should be labeled as required. Once the user submits, write a JavaScript
    // function that checks if all the fields are provided. If not, it should show an error message above
    // the form.
    // If the user provides all the values, hide the form input fields, and display all the values provided
    // by the user on the browser
    $(document).ready(function() {
        $("#validation21") .submit(function(event){
        event.preventDefault();
        let firstName= $("#firstName").val();
        let lastName= $("#lastName").val();
        let email = $("#email").val();
        let password = $("#password").val();
        let confirmpassword= $("#cpassword").val();
        let f1= $(".first-name");
        let f2= $(".last-name");
        let f3= $(".email");
        let f4 = $(".password");
        let f5 = $(".confirmpassword");
        if(firstName===""){
            f1.css("color", "red");
           f1.text("please enter first name");
        }
        else if(firstName.length<=2){
            f1.css("color", "red")
            f1.text("please enter at least three Character");
        }
        else {
            f1.css("color", "green");
            f1.text("you have enterd correct FirstName");
            
            
        }
        if(lastName===""){
            f2.css("color", "red");
           f2.text("please enter Last name");
        }
        else if(lastName.length<=2){
            f2.css("color", "red")
            f2.text("please enter at least three Character");
        }
        else {
            f2.css("color", "green");
            f2.text("you have enterd correct LastName");
            
            
        }
        if(email===""){
            f3.css("color", "red");
           f3.text("please enter email address");
        }
        else if(email.length<=15){
            f3.css("color", "red")
            f3.text("please enter at least 15 Character");
        }
        else {
            f3.css("color", "green");
            f3.text("you have enterd correct email address");   
        }
        if(password===""){
            f4.css("color", "red");
           f4.text("please enter correct password");
        }
        else if(password.length<=8){
            f4.css("color", "red")
            f4.text("please enter at least 8 Character");
        }
        else {
            f4.css("color", "green");
            f4.text("you have enterd correct password");
            
            
        }
        if(confirmpassword===""){
            f5.css("color", "red");
           f5.text("please enter confirm password");
        }
        else if(confirmpassword<=8){
            f5.css("color", "red")
            f5.text("please enter at least 8 confirm password");
        }
        else if (confirmpassword !== password){
            f5.css("color", "red")
            f5.text("the password and the conifrm password doesn't match");
        }
        else {
            f5.css("color", "green");
            f5.text("you have enterd correct  conifrm password");
            
            
        }
        
        });
        });









let toggle2= $(".mulu");
toggle2.on('click',function(){
    $("#validation21").stop();
})



//  })
//  let toggle1= $("#validation21");
//  toggle1.on('click',function(){
//     $("#validation21").slideToggle(5000);

//  })
// $("#validation21").show();

// let addis = document.getElementById("submitButton");
// // addis.addEventListener("click", addation);
// function add(e){
//     e.preventDefault();
    
// let num1=parseInt(document.getElementsByName("first-value").value);
//     let num2=parseInt(document.getElementsByName("second-value").value);
//     let oper1= document.getElementById("all-section1").value;
   
//     if(oper1==='+'){
//         let sum=num1+num2;
//       document.getElementById("sum").innerHTML=sum;

//     }
//     if(oper1==='-'){
//         let dif=num1-num2;
//      document.getElementById("sum").innerHTML=dif;
     

//     }
//     if(oper1==='*'){
//         let pro=num1*num2;
//         document.getElementById("sum").innerHTML=pro;

//     }
//     if(oper1==='/'){
//         let div=num1/num2;
//         document.getElementById("sum").innerHTML=div;

//     }
// }

//     // e.preventDefault();
// //  let a= document.getElementsByName("first-value").value;
// // let b=document.getElementsByName("second-value").value;
// // var c= a+b;
// // a=8;
// // console.log(typeof (a));
// // let news1=document.getElementsByClassName("submit");

// function addation21(){
//     let n1=parseInt(document.getElementById("n1").value);
//     let n2=parseInt(document.getElementById("n2").value);
    
//     let oper= document.getElementById("all-section").value;
   
//     if(oper==='+'){
//         document.getElementById("result").value=n1+n2;

//     }
//     if(oper==='-'){
//         document.getElementById("result").value=n1-n2;

//     }
//     if(oper==='*'){
//         document.getElementById("result").value=n1*n2;

//     }
//     if(oper==='/'){
//         document.getElementById("result").value=n1/n2;

//     }


//     }
//     let adderform = document.getElementById("adder");
// adderform . onsubmit= haddleAddtion;
// function haddleAddtion (event){
//         event.preventDefault();
//         let firstValue = document.getElementById("first-value").value;
//         let secondValue =  document.getElementById("second-value").value;
//         let resultHolder = document.getElementById("sum");
//         let result = ""
//         if(isNaN(firstValue) || isNaN(secondValue)){
//             result = "please please inser anumber";
//             console.log(result);
//         }else {
//             result= adder(firstValue,secondValue);
//             console.log(result);
//         }
//       resultHolder.textContent="result";
//     }
//     function adder(a,b){
// a=Number(a);
// b=Number(b);
// return a+b;
//     }




    

// //     if (!elFirstNameValue) {
// //             numbers.push("First value field is required");//abebe
           
// //           }
        
// //           else if (typeof elFirstNameValue!=="number") {
// //             errors.push("please insert number value ");
// //           }

// //           if (!elseconddValue) {
// //             numbers.push("First value field is required");//abebe
           
// //           }
        
// //           else if (typeof elseconddValue!=="number") {
// //             errors.push("please insert number value ");
// //           }
// //   else{
// //     for(i=0; i<2; i++){
// //         sum.innerHTML += numbers[0] + numbers[1] +"<br>";
// //     }
   
// //   }
// //   e.preventDefault();


let e7= $("#techCompanies li:nth-child(6)");
console.log(e7);
e7.css("background-color", "lightgreen");
console.log($("div").has("p"));
let e8= $("#techCompanies li").even();
e8.hide();
$("#techCompanies :visible").css("background-color", "green");

e8.show();



$(".btn1").on('mouseenter', function(){
    $("#techCompanies").toggle(5000);
});
$(".btn2").on('mouseenter', function(){
    $("#techCompanies").to(5000);
});

// $("#validation21").validate({
//     rules:{
//         firstName: "required",
//         lastName: "required",
//         email: {
//             required: true,
//             email:true},
//         password: {
//             required:true,
//             minlength: 5
//         },
//     },
// message:{
//        firstName: "please enter first name",
//        lastName: "please enter last name",
//        email: {
//         required: "please enter the correct email address",
//         email: " please enter valid email"},
//        password :{
//         required: "please enter your password",
//         minlength: "password must be 8 chracter"
//        } ,    

//         }
    
// })



//  $("#techCompanies");// id sdelect 
//  $(".technocompanies")// class selection method 
//  $("ul")// tag selection method 

 $("#techCompanies").css("background-color", "blue");

let tech= $("#techCompanies li").last();
tech.css("background-color"," blue");
console.log(tech);
// let tech1= $("#techCompanies li").even();
// tech1.css("background-color"," blue");
// console.log(tech1);
let tech2= $("#techCompanies li").odd();
tech2.css("background-color"," green");
console.log(tech2);
let tech3= $("#techCompanies li:nth-child(7)");
tech3.css("background-color"," red");
console.log(tech3);
let bluecomp= $("#blueCompanies").has("div").css("background-color", "pink");
// $(".red:contains(Apple)").css("background-color", "yellow");
bluecomp.empty();
let tech1= $("#techCompanies li").even();
tech1.css("background-color"," blue");

console.log(tech1);
tech1.hide();
let tech5= $("#techCompanies li:visible");
tech5.css("background-color","aqua");
tech5.css("font-size", "50px");
console.log(tech5);
 tech1.show();

 let header5= $(".header5").html("<p> the heade5 text is small than <br> the  header 4 text</p");
 header5.text("aynalem and mulu is full or Mern stack developer");
let div="<li> samusung galaxy</li>";
let div2= "<li> software developer</li>";

let red= $("#techCompanies .red1");
red.before(div);
red.after(div);

let app2= $("#techCompanies");
app2.append(div2);
app2.prepend(div2);
app2.addClass("mulu aynalem");
console.log(app2);
app2.removeClass("mulu");
app2.css("background-color", "green");
$(".red1").siblings().css({ border: "4px solid red" });
// document.getElementsByTagName("li").style.backgroundcolor="black";
$( ".aynalem" ).on( "click", function() {
    alert( "was clicked" );
   })
   $("#sample1").on({
    click: function () {
        $("#sample1").css("background-color", "green");
    },
    mouseenter: function () {
    $("#sample1").css("background-color", "yellow");
    },
    mouseleave: function () {
        $("#sample1").css("background-color", "blue");
    },
    });
   

// for(i=0; i<dom.length; i++){
//     let m1= dom[i];
//     m1.style.backgroundcolor="pink";
// }

// $("li").css("background-color", "#fafafa");



// var errors = [];
//   var elErrorsDisplay = document.getElementById("errorsDisplay");
//   elErrorsDisplay.innerHTML = "";

//   var elFirstName = document.getElementsByName("first-name");

//   var elPassword = document.getElementsByName("password");
//   var elLastName= document.getElementsByName("last-name");
//   // Get their values
//   var elFirstNameValue = elFirstName[0].value;
//   var elPasswordValue = elPassword[0].value;
//   var elLastNameValue=elLastName[0].value;

//   if (!elFirstNameValue) {
//     errors.push("First name field is required");//abebe
   
    
//   }
//   else if (elFirstNameValue.length <3) {
//     errors.push("FirstName not strong enough");
//   }
//   if(!elLastNameValue){
//     errors.push("last name field is required");
   
//   }
//   else if   (elLastNameValue.length < 3)
//    {
//     errors.push("lastname not strong enough");
//   }
//   if (!elPasswordValue) {
//     errors.push("Password is empty"); // input value or none 
//   } else if (elPasswordValue.length < 5) {
//     errors.push("Password not strong enough");
//   } else {
//   }
//   // if (elPasswordValue.length < 5) {
//   //   errors.push("Password is empty or not strong enough");
//   // }
//   // console.log(errors);
//   if (errors.length > 0) {
//     e.preventDefault(); // Stops the form from submitting

//     elErrorsDisplay.style.display = "block";
    
//        elErrorsDisplay.innerHTML += errors[0] + "<br>";
    
//   }
//    else {
//     document.write("submitted sucessfully");
//   }
$(document).ready(function(){
    let e7 =$("#adder");
    e7.submit(function(e){
        e.preventDefault();
        let firstName=parseInt($("input[name='first-value']"));
    let secondName=parseInt($("input[name='second-value']"));
    let placeHolder = $("#sum")
    let firstValue =firstName.val();
    let secondValue =secondName.val();
        if(firstValue.isNumeric() && secondValue.isNumeric()){
            let sum = firstValue + secondValue;
            console.log(sum);
            let average = sum/2
        
        }
    });
    });
// console.log("task1");
// setTimeout(()=>console.log("task2"),5000);
// console.log("task3");
console.log("hi");
function greet(second){
setTimeout(()=>{
console.log("hi belete");
}, second)

}
greet(5000);
console.log("Danile Misgan");


// let e1 =document.getElementById("sample1");
// console.log(e1);
// console.log(e1.textContent);
// // end of the first question 

// let e2=document.getElementById("techCompanies");
// console.log(e2);
// let e3=document.querySelector("#techCompanies");
// console.log(e3);
// let e4=document.querySelectorAll("#techCompanies li");
// console.log(e4);
// let e5= document.querySelectorAll(".red");
// console.log(e5);
// let e6= document.getElementsByClassName("red");
// console.log(e6);
// let selam = document.createElement("li");
// let belete= document.getElementById("techCompanies");
//  selam.textContent="Facebook";
// belete.appendChild(selam);
// selam.className="blue";
// console.log(belete);
// let tomas= document.querySelectorAll("#techCompanies .blue");
// console.log(tomas.length);

// let malede= document.getElementById("#blueCompanies");
//     //   malede.textContent("blue companies");
// console.log(result);
// let  aynalem= document.getElementById("yesBackground");


// aynalem.addEventListener("click", addbackground);
// function addbackground(){
//     aynalem.style.backgroundColor="red";
// document.body.style.backgroundColor="#99ceff";


// }
// let  mulu= document.getElementById("noBackground");
// mulu.addEventListener("click", removeBackground);
// function removeBackground(){
//     mulu.style.backgroundColor="black";
// document.body.style.backgroundColor="";

// }












