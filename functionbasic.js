// functions :reuseable block code write and use as many time we require

// types of functions 
// function declaration 
// anonomous function
// arrow functions
// iife(immediately invoked function expression)
// callback function
// generator function

// function declaration 
// function Data(){ //
// //   code here 
// }

// // calling
// Data()


// parameter: are the varaibles pass to  function declaration 
        //  default parmaters
        //  rest parmaters
// arguments: are the values or varaibles  passed in function calling 

// function Data(){ // parameters ,formal argumnets params 
// //   code here 
// }

// // calling
// Data() // arguments, actual arguments

// function add(a1,b1){//pramters
//     console.log("a",a1)
//     console.log("b",b1)
//     console.log("add:",a1+b1)
// }
// // calling
// add(2,5) //aruguments
// add(8,10)
// add(6,5)
// add(3,3)
// let a=parseInt(prompt("enter a value"))
// let b=parseInt(prompt("enter a value"))
// add(a,b)

function calculate(a,b,c){
  console.log("a",a)
  console.log("b",b)
  console.log("c",c)
  console.log(a+b+c)
}

// calling function
// calculate(2,4,6)
// calculate(2,4)
// calculate(2,4,5,6,8,9,9)


function calculate1(a,b,c){
  console.log("a",a)
  console.log("b",b)
     console.log("c",c) //undifined
  if(c==undefined){
      c=10 // updating
    }
    console.log("c",c) //10
    console.log(a+b+c)
}

// calling function
// calculate1(2,4,6)
// calculate1(2,4)

// after es6
// function calculate2(a=0,b=0,c=10){ //default paramters
//   console.log("a",a)
//   console.log("b",b)
//      console.log("c",c) //undifined
//   console.log(a+b+c)
//   console.log(a*b*c)
// }

// // calling function
// calculate2(2,4,6)
// calculate2(2,4)


// function calculate3(a=0,b=0,c=10,...r){ //default paramters
//   console.log("a",a)
//   console.log("b",b)
//      console.log("c",c) //undifined
//      console.log("r",r)// [4, 5, 6, 7, 8, 8]
//      let res=a+b+c
//      console.log(res)

// }
 

// // calling function
// calculate3(2,4,6,4,5,6,7,8,8)

// // write a function to calculate the product of two number where input (10,20)
// // write a function to check the user is eligible for voting or not 
// // write a function that greets user welcome msg  
//             //   case: 
//                 //   1. argument :ravi   output : weclome ravi
//                 // if no argument passed greet it as welcome Guest
// function Greetuser(name="guest"){
//  console.log("welcome",name)
// }
// Greetuser("ravi")
// Greetuser()
// // write a function that prints intro of user with name age city and company
// // write a function registeruser() which collects the name and roles:adimin,superadmin,public
// // output : name: raju 
// //         roles :['admin', 'superadmin', 'public']
// function registeruser(name,...roles){
//     console.log(name)
//     console.log(roles)

// }

// registeruser('raju',"admin","superadmin","public")
// // write a function to calculate the power the values take base value as base=2(default value)
// function Power(num,base=2){
//  console.log(num**base)
// }
// Power(2)
// Power(2,3)
// write a function to divide two number (a,b) and handle the following edge cases 
        // 1.when a & b are undefined 
        // 2.only when b is undefined 

       
// function with return statement 
//   debugger;
// function add(){
//   debugger;
//   var a=10
//  console.log("hello",a+10)
// //  its is the last statement of any function excution
//  return
//   // console.log("hello",a+10)
// }
// //  console.log("hello",a)
// // calling the function
// add()

// returning single value
function data(){
  var a=10
 return a
}

// calling 
let res=data()
console.log(res*10)
console.log(res-10)


// returning multiple value
function data1(){
  var a=10
  var b=10
 return [a,b,10,"hello"]
}

// calling 
let res1=data1()
console.log(res1)
console.log(res1[0])//indexing 
console.log(res1[1])
console.log(res1[3])

// returning multiple value
function data2(name){
  var a=10
  var b=10
  var c=20
 return {
  // property:value
  value1:a,
  value2:b,
  c // c  consider as property and value {c:c}
 }
}

// calling 
let res3=data2("ravi")
console.log(res3)//{value1: 10, value2: 10, c: 20}
console.log(res3.value1)//(.dot notation)
console.log(res3.value2)//(.dot notation)
console.log(res3.c)//(.dot notation)

// write a function that returns user Details object  
    //  name1 age qualification location company salary  
    // output: {name1:"ramu",age:20,qualification:"btech",location:"hybd",company:"tcs",salary:"50k"}
function userDetails(name1, age, qualification, location, company, salary){
  console.log(name1, age, qualification, location, company, salary)
  return {
    name:name1, age:age, qualification, L:location, cp:company, s:salary
  }

}
let user=userDetails("ramu",20,"cse btech", "jntu","tcs", "90k")

console.log(user)
console.log(user.qualification)//cse btech
console.log(user.L)//jntu

let user1=userDetails("ram2",25,"mech btech", "jntu","tcs", "30k")
console.log(user1)
console.log(user1.qualification)//mech btech

// write a function that returns add sub mul division modulodiv exponential of two numbers in array format 
function calculate(a,b){
 return [a+b,a-b,a*b,a/b ,a%b ,a**b]
}

let result=calculate(1,2); 
console.log(result)
console.log(result[0]*3)

// 1.write a function that returns square of number
// 2.write a function that returns length of the String 