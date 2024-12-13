let m1= $('#techCompanies').css("display", "none");
console.log("abebe beso bela")
let m2= $(".red").css("background-color", "blue");
// let m3= $("div").css("background-color", "black");
let m4= $("ul li:nth-child(4)");
m4. css("background-color", "red");
// let m5= $("li").odd();
// m5. css("background-color", "yellow");
$("div").has("p").css("background-color", "pink");
$("ul:contains(First list item)").css("background-color", "orange");
// m1.hide();
// m1.show()
$("div ul:visible").css("background-color", "lightgreen");
let m5= $('#blueCompanies').text("full stack development")
$(".removeandempty").empty();
$("#divId").before($("#firstPar")).css("background-color", "yellow");

// $("#divId").after($("#firstPar")).css("background-color", "blue");

$("#divId").prepend($("#firstPar"));
var txt1 = "<p>Text.</p>";               // Create element with HTML 
  var txt2 = $("<p>full stack software development</p>");   // Create with jQuery
  var txt3 = document.createElement("p");  // Create with DOM
  txt3.innerHTML = "Text.";
  $("body").append(txt1, txt2, txt3);      // Append the new elements
 let m8= $("p").addClass("classOne classTwo");
 m8.removeClass("classOne")
 m8.css("background-color", "aqua")

console.log(m8);