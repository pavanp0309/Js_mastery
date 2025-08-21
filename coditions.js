// conditions :  it controls tha flow of excution of any code

// 1. simple if
// 2.if-else
// 3.else-if-ladder
// 4.nested if
// 5.switch

// 1. simple if
// if(condition){ //  comparision and logical operator
//     // code
// these  block of will excute when codition is true
// }

// example
// debugger;
// if(true){
//     console.log("welcome to condition")
// }

// write a function the checks user age is greather 18 or not
function checkAge(age) {
  if (age >= 18) {
    console.log("eligible for voting");
  }
}
// checkAge(15)
// write a function the checks the given string is empty or not
// function checkString(str){
//     if(typeof str == "number") {
//         console.log("please enter valid input")
//     }
//  if(str.length==0){
//         console.log("string is empty")
//  }
// }
// checkString("hello")
// checkString(29)

// let age=34
//  if(age>=18){
//         console.log("eligible for voting")
//         return //Uncaught SyntaxError: Illegal return statement
//     }

// function checkString(str) {
//   if (typeof str == "number") {
//     return "please enter valid input";
//   }
//   if (str.length == 0) {
//     return "string is empty";
//   }
// }
// let res = checkString("hello");
// console.log(res);
// let res1 = checkString(34);
// console.log(res1);

// // if-else
// if(codititon){
//   // these block will excute when codition is true
// }else{
//     // these block will excute when codition is false
// }

// if(false){
//   console.log("hello-if")
// }else{
//     // these block will excute when codition is false
//      console.log("hello-else")
// }

// else-if ladder
// Grades
// if(condition1){
//   // if codition1 is true these block excutes
// }else if(condition2){
//   // if condition1 is false codition2 is true these block excutes
// }else if(condition3){
//   // if condition2 is false codition3 is true these block excutes
// }else if(condition4){
//   // if condition3 is false codition4 is true these block excutes
// }else{
//   //  if all condition fails
// }

// function GradeCal(marks){
//   console.log("marks:",marks)
//   let grade; // undefined
//   let message;
//   if(marks>=90){
//     grade="A"
//     message="you got first rank"
//   }else if(marks>=70&&marks<90){
//       grade="B"
//       message="you got second rank"
//   }else if(marks>=50&&marks<70){
//       grade="C"
//       message="you got third rank"
//   }else if(marks>=30&&marks<50){
//       grade="D"
//       message="you got fourth rank"
//   }else{
//      grade="fail"
//     message="good luck next time"
//   }
//  console.log(grade,message)
// //  return {grade,message}
// }

// let results=GradeCal(20)
// console.log(results.grade,results.message)

// develop a calci else-if ladder

let marks = 50;
// if(marks>=90){
//   console.log("A grade")
// }else if(marks>=70&&marks<90){
//  console.log("A grade")
// }else if(marks>=50&&marks<70){
//  console.log("C grade")
// }else if(marks>=30&&marks<50){
//  console.log("D grade")
// }else{
//   console.log("fail")
// }

// write a program  to develop the calculator  with else if ladder

// function example(){
//   let a=10
//   console.log(a)

// }

// let res=example()
// console.log(res)
function Cal(num1, num2, operator) {
  let result = 0;
  if (operator == "+") {
    return (result = num1 + num2);
  } else if (operator == "-") {
    return (result = num1 - num2);
  } else if (operator == "*") {
    return (result = num1 * num2);
  } else if (operator == "/") {
    return (result = num1 / num2);
  } else if (operator == "%") {
    return (result = num1 % num2);
  } else {
    return (result = "enter  a valid input/operator");
  }
}
let output = Cal(1, 4, "*");
console.log(output);

//  type of item ="electronics ,clothes ,food"
// electronics gst=100
// quantity
// clothes gst=50
// food gst=0
// // final_total =gst+total

// e :18% on total
// c: 5% on total
// f:0% on total
function GstCal(itemtype, quantity, price) {
  let gst = 0;
  let total = price * quantity;
  let grandtotal = 0;
  if (itemtype == "e") {
    gst = total * 0.18;
    grandtotal = total + gst;
    return grandtotal;
  } else if (itemtype == "c") {
    gst = total * 0.05;
    grandtotal = total + gst;
    return grandtotal;
  } else if (itemtype == "f") {
    gst = 0;
    grandtotal = total + gst;
    return grandtotal;
  } else {
    return "choose the proper items";
  }
}
let bill = GstCal("c", 3, 100);
console.log(bill);

// write a program that prints tha total price of a tickets along with discount applied using else-if ladder
// Types of tickets
// basic  -->100rs
// premium --->250rs
// vip -->450rs

// if user buys more than 5 tickets apply the discount 20% off  and print total price using the else_if ladder
function PrintTicketPrice(tickettype, quantity) {
  let total = 0;
  let price = 0;
  let discount = 0;
  if (tickettype == "basic") {
    price = 100;
  } else if (tickettype == "premium") {
    price = 250;
  } else if (tickettype == "vip") {
    price = 450;
  } else {
    price = 0;
    console.log("choose the valid ticket");
  }

  if (quantity >= 1 && quantity <= 4) {
    total = price * quantity;
    console.log(total);
  }
  if (quantity > 5) {
    total = price * quantity;
    discount = total * 0.2;

    console.log(discount);
  }

  let finalbill = total - discount;
  console.log("ticketType:", tickettype);
  console.log("Quantity:", quantity);
  console.log("discount:", discount);
  console.log("Total:", finalbill);
}
// PrintTicketPrice("vip",8)

// Nested if
// if(codition1){
//   if(codition2){
//   }
// }

// atm
//  process  :
// check atm pin == the pin we entered
//   check the balance >=user enterredd balance

// let pin = 1320;
// let balance = 5000;
// let userenteredpin = parseInt(prompt("enter a number"));

// if (pin == userenteredpin) {
//   let wbalance = parseInt(prompt("enter a number"));
//   if (wbalance <= balance) {
//     balance -= wbalance; // balance=balance-wbalance
//   } else {
//     console.log("insufficient balance");
//   }
// } else {
//   alert("plx enter a valid pin");
// }

// // check the following things
// //     check mobile_no
// //     check otp
// //     check email
// //     check emailotp using only nested if
// let mobileno = 799977277;
// let motp = 123;
// let email = "xyz@gmail.com";
// let emailotp = 134;
// let umobile = parseInt(prompt("enter a mobile no"));
// if (mobileno == umobile) {
//   let otp = parseInt(prompt("enter a otp no"));
//   if (motp == otp) {
//     let uemail = prompt("enter a email");
//     if (email === uemail) {
//       let uemailotp = parseInt(prompt("enter a otp no"));
//       if (emailotp == uemailotp) {
//         console.log("welcome user");
//       } else {
//         console.log("please enter the proper emailotp");
//       }
//     } else {
//       console.log("please enter the proper email");
//     }
//   } else {
//     console.log("please enter the proper motp");
//   }
// } else {
//   console.log("enter the correct mobileno");
// }

// if(year%4==0){ //1200 1600 2000 2024
//   if(year%100==0){
//     if(year%400==0){

//     }
//   }

// }

// switch(condition){
//   case condition:
//     break;
//   case condition:
//     break;
//   default :
//     break;

// }
let menu = "snacks";

switch (menu) {
  case "veg":
    console.log("choosen veg items");
    break;
  case "non-veg":
    console.log("choosen non-veg items");
    break;
  case "starters":
    console.log("choosen starter items");
    break;
  case "snacks":
    console.log("choosen snack items");
    break;
    console.log("Updating the question and answer section...");
    console.log("choose the  proper items");
    break;
}

// write a program to stmualte the atm process using the switch case statement
//    options
// widthdraw
// deposit
// checkbalance
// change pin
//

// dashbaord : mock_test
// let user = "guest";
// let action = "delete";

// switch (user) {
//   case "admin":
//     switch (action) {
//       case "update":
//         console.log("Updating the question and answer section...");
//         break;
//       case "delete":
//         console.log("delete the Qa");
//         break;
//       default:
//         console.log("choose proper option");
//     }
//     break;
//   case "guest":
     
//     console.log("guest user not allowed to perform any action")
//     break;
//   default:
//     console.log("not a valid user")
//     break;
// }

// 1.Write a program to find the greatest among three numbers (a, b, c).

// 2.Determine if a triangle is equilateral, isosceles, or scalene using only conditional statements.

// 3.Print the price of park tickets based on age:
      // If age < 6, ticket is free
      // If age ≥ 6 and < 20, ticket price is 10 Rs
      // If age ≥ 20 and < 50, ticket price is 20 Rs
      // Otherwise, print "Invalid age"

// 4.Calculate the discount for shopping items:
    // If buying more than 5 men's clothes, apply 5% discount on total
    // If buying more than 5 women's clothes, apply 15% discount on total
    // If buying more than 5 children's clothes, apply 10% discount on total
    // Add 10% GST to the total for all items and print the final amount
