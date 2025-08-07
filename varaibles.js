// // operator -- typeof()-check the type of datatype
// // console.log(typeof(1))
// // console.log(typeof(1.5))
// // console.log(typeof("hello"))
// // console.log(typeof(true))
// // console.log(typeof(undefined))
// // console.log(typeof({}))
// // console.log(typeof([]))

// // Identifier rules

// // var is keyword
// // nami is identifier
// var name; // declartion
// let name1;

// // 1. An identifier or keyword cannot immediately follow a numeric literal
// // var 5a //varaibles.js:19 Uncaught SyntaxError: Invalid or unexpected token
// var a4;

// // 2.an identifier shouldnot start with special characters ,& * ^ @ etc ..
// // Decorators are not valid here
// // var @na //Uncaught SyntaxError: Invalid or unexpected token
// var $na // valid
// var _na // valid

// // 3.it should not contain aany white space
// // var full name  // Uncaught SyntaxError: Invalid or unexpected token
// var full_name  //snack case
// var fullName //camecase
// var FullName //pascal case
// console.log("var",fullName)
// console.log("let",fullName)

// // 4. should not conatin any reserved keywords
// // 'var' is not allowed as a variable declaration name
// // var var; //Uncaught SyntaxError: Unexpected identifier
// // var function
// // var if
// // var for

// // write a program Declaring the all types of variable and console its result and identify the type orf error
// // 1.declartion
// // var a;
// // let b;
// // // const c; //Uncaught SyntaxError: Missing initializer in const declaration
// // const c=10         // 10 is value  = is assignment operator  c: identifer

// // 2.scope : lifetime of variable   (accessibility of variable)
//     // 1.global-scope  : can be acccessed everywhere within the code (inside function ,class ,block)
//     // 2.local_scope  : only inside the block to which it blongs
//                 //  block scope --- {} any block function or object or class  loops
//                 //  function scope ---> function name(){}
//                 //  module scope  --

// // global
// // var g=10
// // let g1=20
// // const g2=20
// // print
// // console.log("g",g)
// // console.log("g",g1)
// // console.log("g",g2)

// // block scope
// {
// // var g=10
// // let g1=20
// // const g2=20
// //  console.log("b",g) // 10
// // console.log("b",g1) // 20
// // console.log("b",g2) //20

// }
// // console.log("ob",g) // acccesible 10
// // console.log("ob",g1) //Uncaught ReferenceError: g1 is not defined
// // console.log("b",g2) //Uncaught ReferenceError: g2 is not defined
// // Note : let and const varaible cant be acccessed outside of block
//     //    let and const are block_scoped varaibles

// // function scope
// function Data(){
// //      console.log("f",g) // acccesible 10
// // console.log("f",g1)//Uncaught ReferenceError: g1 is not defined
// // console.log("f",g2)//Uncaught ReferenceError: g2 is not defined
//     var g=10
//    let g1=20
//    const g2=20
//  console.log("hello scope")
//   console.log("f",g) // 10
// console.log("f",g1) // 20
// console.log("f",g2) //20

// }
// //   console.log("of",g) // 10 //varaibles.js:106 Uncaught ReferenceError: g is not defined
// // console.log("0f",g1) //Uncaught ReferenceError: g1 is not defined
// // console.log("of",g2) //Uncaught ReferenceError: g2 is not defined

// // // calling the function
// // Data()

// // var let const has global scope
// // let and const : are blockscoped
// // var is : functionscoped

// // REDECLARATION
// // var name="ravi";
// // var name="raju";
// // let fname="rani" //Uncaught SyntaxError: Identifier 'fname' has already been declared (at varaibles.js:123:5)
// // // let fname="rani" //Cannot redeclare block-scoped variable 'fname'
// // const lname="kumar" //Uncaught SyntaxError: Identifier 'lname' has already been declared
// // const lname="kumar" //Cannot redeclare block-scoped variable 'fname'
// // {
// //  let fname="rani"

// // }

// // Hositing  :moving all declaration top there scope

// // {
// //     debugger;
// //     // console.log(test2)
// //  var test=10
// // let tes2=20
// // const test3=30
// // }

// // debugger
// // function Da(){
// //     var a=10
// //     console.log(a)
// // }
// //  console.log(a)

// // // Da()

// console.log(a)//error-0 10 undefined-2
// debugger
// console.log(a)// decalaration -undefined
// // console.log(b)// error : syntax refrence errror
//   var a=10
//   let b=10
//   const c=10

// var a;
// var a;
// let b;
// let b;
// const c
// const c

// reassignment
// var a = 10;
// a = "hello";
// console.log(a);
// let b = 10;
// b = 30;
// console.log(b);

// const c = 10;
// c = 90;
// console.log(c);



// 1declaration  :creation of varaible  
// var a
// let a
// const a=10
// 2.scope :lifetime of varaible and where it can be acccessbale with in code 
 
//  {
//  var a;
//   let b;
//   const c=10;
    
//   }
//  console.log(c)
// function name(){

//  var a=10;
//   let b;
//   const c=10;
  
// }
//  console.log(a)
//  name()

// 3.hoisting :moving all decalaration to top of there scope
// {
//   debugger
//   var a;
// let b;
// const c=10;
// }

// 4.tdz :the timeperiod b.w declaartion to intialization (eg :let and const )
// // // 5.reassignment  
//       debugger
//        let role="admin"
//         role="trainer"
//   6.intialization : assigning a value  to varaible 
//      let a; //declaration
//      let a=10; //dec+initilazation
//         a=20 // reassignmen
// // let a=10
// console.log(a)
// debugger
console.log(a)//refe
let a=10