// // DATATYPES : 
// //  DATA : it is a information in the form of text number true ,images ,videos 

// // Primitive : Numbers,Strings,Boolean ,undefined ,null ,BigInt ,symbol 
// // non-primitive: Arrays objects ,function math etc..

// // typeof : opeartor which is used for checking the type of data 


// // immutability : cant change the data 
// // let data="hello"
// //    data="hii"
// // console.log(data)
// // console.log(typeof data)
// // console.log(data[0])// accessing the char inside it
// // data[0]="R"
// // console.log(data)


// // // non-primitive (mutable)
// // let a=["hello","hii"]
// // console.log(a)
// // console.log(a[0])
// // a[0]="bye"
// // console.log(a)


// // Number  

// let a=10
// console.log(a)//10
// console.log(typeof a)//number
// let a1=10.5
// console.log(typeof a1)//number

// let a2=-10
// console.log(typeof a2)//number
// // (dynamically typed languages)
// let a3=10
//    a3="10"
// console.log(typeof a3)
// // collecting the information form the user 

// // let n1=prompt("enter a value") // the value collected from prompt will always result string type
// // console.log(n1)
// // console.log(typeof n1)// string

// // Type conversion
// let n2=parseInt("10") // it converts "10" in to number
// console.log(n2) //10
// console.log(typeof n2) //number

// // let n3=parseInt(prompt("enter a value"))
// // console.log(n3)
// // console.log(typeof n3)

// let n4=parseInt("100rs",10)
// console.log(n4)
// let n5=parseFloat(10.5)
// console.log(n5)
// console.log(typeof n5)


// let d=Number("10")
// let d1=Number(prompt("enter  a value"))
// console.log(d)
// console.log(d1)
// console.log(typeof d)
// console.log(typeof d1)


// Number 
// convert the Following Data using the Number method in js  and console the Result 
//  10 ,"10px",10.5,"100" ,"Rs100", true, false, null, undefined ,

// console.log(Number(10))// 10 
// console.log(Number("10px"))// NaN-Not a number
// console.log(Number(10.5))// 10.5
// console.log(Number("100"))// 100 // even if it is string format it should contain all digits (0-9) then only number is converted
// console.log(Number("Rs100"))// NaN
// console.log(Number(true))// 1
// console.log(Number(false))// 0
// console.log(Number(null))// 0
// console.log(Number(undefined))// NaN


// convert the Following Data using the parseInt and parseFloat method in js  and console the Result 
// 10,10.5 "10x" ,"10.5x" " 56px","abc20" true ,false null undefined 

// console.log(parseInt(10))// 10
// console.log(parseInt(10.5)) //10
// console.log(parseInt("10x")) //10
// console.log(parseInt("10.5x")) //10
// console.log(parseInt(" 56x")) //56
// console.log(parseInt("abc123")) //NaN (data is read from left to right)
// console.log(parseInt(true)) //NaN
// console.log(parseInt(false)) //NaN
// console.log(parseInt(undefined)) //NaN
// console.log(parseInt(null)) //NaN


// console.log(parseFloat(10))//10
// console.log(parseFloat(10.5))//10.5
// console.log(parseFloat("10x"))//10
// console.log(parseFloat("10.5x"))// 10.5
// console.log(parseFloat(" 56x"))// 56
// console.log(parseFloat("abc123"))//nan
// console.log(parseFloat(true))// NaN
// console.log(parseFloat(false))// NaN
// console.log(parseFloat(undefined))// NaN
// console.log(parseFloat(null))// NaN


// let num=10.4242
// console.log(num)
// console.log(num.toFixed(2))//10.42
// console.log(Math.floor(10.5))//10
// console.log(Math.ceil(10.5))//11
// console.log(Math.round(10.5))//11
// console.log(Math.random()*10) // generate a number everytime (0--0.999999)
// console.log(Math.floor(Math.random()*10))
// console.log(Math.abs(-10))// removes the Naggetive sign
// console.log(Math.sqrt(16)) // 4
// console.log(Math.sqrt(25)) // 5
// console.log(Number.MAX_SAFE_INTEGER)//9007199254740991



// Arthematic operator 
// + - * 
// % -- modulo division --remainder
// / --  division --Quotient 
// ** exponiential opertaor -es6+

// ++ increment  operator
// -- decreement operator 


// + : addition operator
// +"" : uniary plus operator 
// "" + "" : string operator 
// console.log(10+20) //30
// console.log(10+"20") //1020 acts string operator( it converts number into string)
// console.log(10+Number("20")) // 30
// console.log(10+ +"20") // uniray plus operator
// console.log(typeof +"20") // number
// console.log(typeof true) // boolean
// console.log(typeof +true) //number

// - 
// console.log(10-19) // -9
// console.log(10-"19") // -9
// console.log("10"-"19") // -9
// console.log("10"-19) // -9
// console.log("10a"-19) // nan

// * 
// console.log(10*5)//50
// console.log(10*"5")//50
// console.log("10"*"5")//50
// console.log("10"*"5a")//NaN


// % -- remainder
console.log(10%2)//0
console.log(15%2)//0
console.log(123%10) //3-- to extract  the last digit from a number we divide it by 10

// / -- Quotient
console.log(10/2) // 5
console.log(15/2) // 7.5
console.log(Math.floor(15/2)) // 7
console.log(123/10)//12 -- remove  the last digit 

console.log(2**2) //2*2//4
console.log(2**4) //2*2*2*2 // 16

