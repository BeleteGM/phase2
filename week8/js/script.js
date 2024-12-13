// console.log("software app");
// console.log("task1");
// console.log("task2");
// console.log("task3");
// const multiply =(a,b)=>a*b;
// const square= (n)=>multiply(n*n);
// const printsquare=(n)=> console.log(sqare(n));

// function delay(seconds){
//     let m1=Date.now();
//     let m2=true;
//     while(m2){
//         let m3=Date.now();
//         if(m3-m1>=seconds*1000){
//             console.log("hello world");
//             m2=false;
//         }

//     }
    
// }
// delay(5);

// console.log("full stack website devekloper ")
// console.log("task1")
// var x;
// setTimeout(() =>
//     console.log("task2"),6000);
// function greet(seconds){
//      x= "fullstack";
//     setTimeout(()=>{
//         console.log("this is website development");
//     })
// }
// greet(3000);
// console.log("task3");
// // console.log(x);

// fetch ("https:\\randomuser.me\api").then((res)=>{
//     console.log(res);
    // res.json();
// })
// .then((res) => res.json())
// .then((data)=> console.log(data.results[0]))

// .catch((err)=>console.log("something was rong", err))


// setTimeout(function() {
//     console.log('I am an asynchronous message');
// }, 1000);

// console.log('I am a synchronous message');

// setTimeout(function() {
//     console.log('I am an asynchronous message');
// }); // You can omit the 0

// console.log('Test 1');

// for (let i = 0; i < 10000; ++i) {
//     doSomeStuff();
// }


// console.log('Test 2');

// // The 'I am an asynchronous message' will be displayed when the main thread reach here

// function doSomeStuff() {
//     return 1 + 1;
// }
// let counter = 0;

// let timer = setInterval(function() {
//     console.log('I am an asynchronous message');

//     counter += 1;

//     if (counter >= 5) {
//         clearInterval(timer);
//     }
// }, 2000);

// console.log('I am a synchronous message');

// let fs = require('fs');

// fs.readFile('test21.txt', 'utf8', function(error, data) {
//     if (error) {
//          throw error;
//     }

//     console.log("Asynchronous message. Content of test.txt:", data);
// });

// console.log('Synchronous message');
// function abebe(){
// function job() {
//     return new Promise(function(resolve, reject) {
//         reject();
//     });
// }

// let promise = job();

// promise

// .then(function() {
//     console.log('Success 1');
// })

// .then(function() {
//     console.log('Success 2');
// }, function (){
//     console.log("belete");})

// .then(function() {
//     console.log('Success 3');
// }, function (){
//     console.log("belete");
// })


// .catch(function() {
//     console.log('Error 1');
// })


// .catch(function() {
//     console.log('Success 5');
// })
// .then(function() {
//     console.log('Success 4');
// })
// }

    function job(state) {
        return new Promise(function(resolve, reject) {
            if (state) {
                resolve('success');
            } else {
                reject('error');
            }
        });
    }
    
    let promise = job(true);
    
promise
    
    .then(function(data) {
        console.log(data);// sucesss
    
        return job(false);
    })
    
    .catch(function(error) {
        console.log(error); //error 
    
        return 'Error caught'; 
    })
    
    .then(function(data) {
        console.log(data);//eror caught 
    
        return job(true);
    })
    
    .catch(function(error) {
        console.log(error);
    });
    


// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);//sucess

//     return job(true);
// })

// .then(function(data) {
//     if (data !== 'victory') {
//         throw 'Defeat';
//     }

//     return job(true);
// })

// .then(function(data) {
//     console.log(data);
// })

// .catch(function(error) {
//     console.log(error);

//     return job(false);
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);

//     return new Error('test');
// })

// .then(function(data) {
//     console.log('Success:', data.message);
// })

// .catch(function(data) {
//     console.log('Error:', data.message);
// });
























































