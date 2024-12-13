// // understand problem array[i%]%2= even and i%2= even display 
// // [0,2,3,5,6,8]= 0 6 []
// // general formula 
// //array[i]%2==0 and i%2==0
// // c code 
// // define afunction 
// // parameters array name 
// // array is array or not 
// // array length >0
// // for loop  intil cond expression
// // check  general formula 
// // save result 
// // return  result
// // calling 
// // display the out
// function array(arr){
//     if(Array.isArray(arr)){
// if(arr.length>0){
//     let m=[];
// for(i=0; i<arr.length; i++){
//     if(arr[i]%2==0 && i%2==0){
//   m.push(arr[i]);
//     }
// }
// return m;
// }
// else{
//     return "there is no any valve";
// }
//     }
//     else{
//         return 0;
//     }
// }

// let n=array("abebe");
// let k= array([]);
// let s= array([0,1,2,4,6,8,10]);
// console.log(n);
// console.log(k);
// console.log(s);
// // 72 27 not okk
// // 72>27 ok 
// // 23>32 not ok 
// //genera formula generate 

// // if we will take anumber and if the number is greaterthan the revrese of this nummber display ok otherwise display not ok 
// //c code 
// // define a function 
// // check  the element is number or not 
// //  check length grterthan zero or not
// //    let numStr = num.toString();
// // num=123456789;
// // let reversedStr = '';
// // for (let i = numStr.length - 1; i >= 0; i--) {
// //     reversedStr += numStr[i];
// // }
// // return parseInt(reversedStr);
// // };

// // // check first numer> reverse number return ok 
// // otherwise return not ok
//    function compare(number){
//     if(typeof number==='number'){
//         // if(number.length>0){
//             var numstring= number.toString();
//             var reversenumber= '';
//             for(i= numstring.length-1; i>=0; i--){
//                 reversenumber+= numstring.charAt(i);
//               }
//           var numreverse= parseInt(reversenumber);
//           if(number>numreverse){
//             return "ok";
//         }
//         else{
//             return "notok";
//         }
//         }
        
//     }
  
//    let numof= compare(121);
//    console.log(numof);





// // function reverseFunction(num, reversed = 0) {
// //     if (num === 0) {
// //         return reversed;
// //     }
// //     return reverseFunction(Math.floor(num / 10),
// //         reversed * 10 + num % 10);
// // }
 
// // const num = 987654321;
// // const result = reverseFunction(num);
 
// // console.log(result);

// // // unsderstand problem 7; 7*6*%----*1= 120
// // 0 =1 display 1
// // 5;! 5x4x3x2x1=120
// // 0!=1
// // write general formula  n*(n-1)!
// // product=1;
// // if num=0 return 1;
// // for (int i=1; i<=num; i++){
// //     product=  product*i;
// // }
// // c code 

// // define afunction TAKING parmeters value 
// //  check the paramters is number or not
// // if the number is zero return 1;
// // eslse n*(n-1)! // // for (int i=1; i<=num; i++){
// //     product=  product*i;
// // }
// // return product;
// // call value passe
// //5 
// // if(type of num!='number')
// // let 5! 5*(5-1)!
// // 5*(4)!
// // 4*(3)!
// // 3*(2)!
// // 2*(1)!
// // 1
// //  product=1;
// // / for (int i=5; i>=1; i--){ i=6;
// //     product=  product*i;
// // //120

// function factorialNumber(number){//1
//     if(typeof number!=='number'){
//         return "please enter numerical value ";}
//         else{
//        if(number==0){
//         return 1;}
//         else{
//     //         let product=1;
//     //    for (let i=number; i>=1; i--){ 
//     //         product=  product*i;
//     // }
//     return number*factorialNumber(number-1);
          
// }
//     }
   
// }
// let fact= factorialNumber("12");
// console.log(fact);

// understand the problem [1,2,3,4,5]
// [3,5,7,9]
//[-4, 2, 3,7]
//[4,5,9,18]

// hand writing  [3,5,7,9]
//[-4, 2, 3,7]
//[4,5,9,18]
// general formula 
// if ()
// c code 
// defining function
// check array check
//  check number or not
// [20,11,10,32,44] ===[20, 22,40,64,88]
// function MerraaArray(array){
//   if(!Array.isArray(array)){
//     return "please enter array value"
//   }
//     else{
    
//     for(i=0; i<array.length; i++){
//       for(j=0; j<array.length; j++){ 
//         if(array[i]*2=== array[j]){
//         // count= count+1;
//         return "not merray array"
       
//         }
     
//         }

//       }
//       return "merra array";
      
//     }
    
    
//     // if(count>=1){
//     //   return "not Merry array";
//     // }
//     // else{
//     //   return "merray array"
//     // }
//   }
  

// understand the problem
// [1,2,3,4,5,3,2,1] = not dual arrya
//[10, 7,6, 5, 5,6,7,10] = dual array
//[10, 7,6, 5, 5,6,7,10, 7] = it is not dual array
  // general formula 
//   let count=0;
//    for ( i=0; i<arr.length; i++){ i=3 i<4 i++
//     for(j=0; j<arr.length; j++){ j=4 j<4; J++ 

//                 i=1
//          if( arr[2]===arr[j]){
//           //10===10
//           7===7
//           7== 10,7,7,3
//            count=count+1 c=5
//          }
// }
// if(count*2==arry.length*2){
//   return 1;
// }
// else{
//   return 0;
// }

//    }


// [10, 7,7,3 ] ==[[10, 7,7,3] 
// c code 
// // defin function
// check array or not 
// array.length>0
//  number or not 
// netseted for loop 
// countX2 ==arr.length*2
// return 1
// 0 return
// calling  value pass 

//  convert to javascript
// function dualarray(array){
//   if(!Array.isArray(array)){
//     return "please enter array value";
//   }
//   else{
//     if(array.length>0){
     
       
//         for ( i=0; i<array.length; i++){ //[10,20,10,20]
          
          
//           var count=0;
//           for(j=0; j<array.length; j++){ 
//             // j=2 j<3; j++
//                if(array[i]===array[j]){
//                 count= count+1; //1
//                 // 20==10
//                 // 20==20
//                 // 20=10
//                }

//           }
//           if(count!==2){
//             return 0;
//           }
//       }
//       return 1;
//     }
//   }

// }
// let dual= dualarray([10,20,10]);
// console.log(dual);


function showTime(seconds){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  console.log(time);
  
 
  
}

showTime(5025);
function secondsToHour(seconds) { 
  const hours = Math.floor(seconds / 3600)%24; 
  seconds %= 3600; 
  const minutes = Math.floor(seconds / 60); 
  seconds %= 60;  
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









// let me= MerraaArray([2,3,6,15]);
// console.log(me);

 
 







































