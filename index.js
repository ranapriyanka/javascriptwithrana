// 1.  Ways to print in javascript
// console.log("Hello World");
// alert("me");
// document.write("this is document write")

// 2.JavaScript Consol API(Application Programming Interface)
//console.log("Hello World", 4+6, "Another Log");
//console.warn("This is warning");
//console.error("This is an error"); 

// 3.Javascript Variables
// What are variables? - Containers to store data values

/*multi 
line
comment */

var number1 = 34;
var number2 = 56;
//console.log(number1 + number2);

// 4. Data types in javascript
//number
var num1 = 455;
var num2 = 56.76;

//string
var str1 = "This is a string";
var str2 = 'This is also string';

//Objects --> Key value pears
var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.977
}
//console.log(marks);

//Booleans
var a = true;
var b = false;
//console.log(a,b);

//var und = undefined
var und;
//console.log(und);

var n = null;
//console.log(n);

/*
At very high level, there are two types of data types in javascript 
1. premitive data types: undefined, null, numberr, string, boolean, symbol
2. Reference data types:Arrays, objects

*/

// Arrays --> Collection of elements --> in elements = string, booliean, numbers
var arr = [1,2,"string",3,4,5]
//console.log(arr)

// Operators in javascript  --> operators kya hota hai jo do function ke operand par lagata hai and
//operand--> kya hota hai ki jo a and b ki value hai vo 
// ex --> operator = =,-,* vo sab and operand = 100, 10 aesi values ...
// Arithmetic Operators
var a = 100;
var b = 10;
// console.log("This value of a + b is", a+b);
// console.log("This value of a - b is", a-b);
// console.log("This value of a * b is", a*b);
// console.log("This value of a / b is", a/b);

// Assignment Operators
var c= b;
//c += 2; //c = c - 2;
c *= 2;
//c /= 2;
//console.log(c)

// Comperision operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

//Logical Operators

// Logical AND
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// Logical OR
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// Logical NOT
// console.log(!false)
// console.log(!true)

// Function in javascript
function avg(a, b){
    c = (a + b)/2;
    return c;
}
// DRY = Do not repeat yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
//console.log(c1, c2);

// Conditionals in javascript
/*
var age = 41;
// single if statement
if(age > 18){
//    console.log('You can drive');
}

//If-else statement
// if(age > 18){
//     console.log('You can drive');
// }
// else{
//     console.log('You can not drive');
// }

age = 25;
// if-else Ladder
if(age > 32){
    console.log("You are not a kid");
}
else if(age >26){
    console.log("Bachhe nahi rahe");
}
else if(age >22){
    console.log("Yes Bachhe nahi rahe");
}
else if(age >18){
    console.log("18 Bachhe nahi rahe");
}
else{
    console.log("Bachhe rahe");
}
console.log("End of ladder");
*/

// question :--> aek function likho age ko leta hai aur batata hai ki kya aap rasana water pi
// sakte ho ya nahito me chahta hu ki aek fun likho jo ki input milega aek number jo ki age hogi
// aur age ke hisab se batayega ki aap rasana water pi sakte ho ke nahi

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element);
// })
// const ac = 0;
// ac++;
// ac = ac +1;
// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

let myArr = ["Fan", "Camera", 34, null, true];
// Array Methods
// console.log(myArr.length);
// myArr.pop();
//myArr.push("harry")
//myArr.shift()
// const newLen = myArr.unshift("Harry")
// console.log(newLen);
//console.log(myArr);

// String Methods in JavaScript
let myLovelyString = "Harry is a good boy good good Harry";
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))

// console.log(myLovelyString.slice(1,4))
d = myLovelyString.replace("Harry", "Rohan");
// d = d.replace("good", "bad");
// console.log(d, myLovelyString)

let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());
 
// DOM Manipulation  --> document object module
let elem = document.getElementById('click');
//console.log(elem);

let elemClass = document.getElementsByClassName("container")
//console.log(elemClass);
//elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText); 

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText); 

tn = document.getElementsByTagName('div')    // tn = tag name
//console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
//removeChild(element); ---> removes an element

// Selecting using Query
sel = document.querySelector('.container')
//console.log(sel)
sel = document.querySelectorAll('.container')
//console.log(sel)

// function clicked(){
//     console.log('The button was clicked')
// }
// window.onload = function(){
//     console.log('The document was loaded')
// }

//Events in JavaScript
// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Clicked on Container")
// })

///firstContainer.addEventListener('mouseover', function(){
//    console.log("Mouse on Container")
//})

//firstContainer.addEventListener('mouseout', function(){
//    console.log("Mouse out of Container");
//})

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Mouse down when clicked on Container");
// })


// Arrow Functions
// function summ(a, b){
//     return a+b;
//}
summ = (a,b)=>{
    return a+b;
}

// logKaro = ()=>{
//     document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
//     console.log("I am your log")
// }

//SetTimeout and setinterval
//setTimeout(logKaro, 2000);
//setInterval(logKaro, 2000);

//clr = setTimeout(logKaro, 5000);
//clr = setInterval(logKaro, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// JavaScript localStorage
//localStorage.setItem('name', 'harry') 
// localStorage 
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

// Json  --->  javascript object notation  ---> data ko exchange karta hai ex  data ko string me convert kart sakta hai 
// obj = {name: "harry", length: 1, a: {this: 'tha"t'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

// Template literals - Backticks-->(``)
a = 34;
//console.log(`this is my ${a}`)
