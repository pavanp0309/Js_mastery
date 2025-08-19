// // // // // DATATYPES : 
// // // // //  DATA : it is a information in the form of text number true ,images ,videos 

// // // // // Primitive : Numbers,Strings,Boolean ,undefined ,null ,BigInt ,symbol 
// // // // // non-primitive: Arrays objects ,function math etc..

// // // // // typeof : opeartor which is used for checking the type of data 


// // // // // immutability : cant change the data 
// // // // // let data="hello"
// // // // //    data="hii"
// // // // // console.log(data)
// // // // // console.log(typeof data)
// // // // // console.log(data[0])// accessing the char inside it
// // // // // data[0]="R"
// // // // // console.log(data)


// // // // // // non-primitive (mutable)
// // // // // let a=["hello","hii"]
// // // // // console.log(a)
// // // // // console.log(a[0])
// // // // // a[0]="bye"
// // // // // console.log(a)


// // // // // Number  

// // // // let a=10
// // // // console.log(a)//10
// // // // console.log(typeof a)//number
// // // // let a1=10.5
// // // // console.log(typeof a1)//number

// // // // let a2=-10
// // // // console.log(typeof a2)//number
// // // // // (dynamically typed languages)
// // // // let a3=10
// // // //    a3="10"
// // // // console.log(typeof a3)
// // // // // collecting the information form the user 

// // // // // let n1=prompt("enter a value") // the value collected from prompt will always result string type
// // // // // console.log(n1)
// // // // // console.log(typeof n1)// string

// // // // // Type conversion
// // // // let n2=parseInt("10") // it converts "10" in to number
// // // // console.log(n2) //10
// // // // console.log(typeof n2) //number

// // // // // let n3=parseInt(prompt("enter a value"))
// // // // // console.log(n3)
// // // // // console.log(typeof n3)

// // // // let n4=parseInt("100rs",10)
// // // // console.log(n4)
// // // // let n5=parseFloat(10.5)
// // // // console.log(n5)
// // // // console.log(typeof n5)


// // // // let d=Number("10")
// // // // let d1=Number(prompt("enter  a value"))
// // // // console.log(d)
// // // // console.log(d1)
// // // // console.log(typeof d)
// // // // console.log(typeof d1)


// // // // Number 
// // // // convert the Following Data using the Number method in js  and console the Result 
// // // //  10 ,"10px",10.5,"100" ,"Rs100", true, false, null, undefined ,

// // // // console.log(Number(10))// 10 
// // // // console.log(Number("10px"))// NaN-Not a number
// // // // console.log(Number(10.5))// 10.5
// // // // console.log(Number("100"))// 100 // even if it is string format it should contain all digits (0-9) then only number is converted
// // // // console.log(Number("Rs100"))// NaN
// // // // console.log(Number(true))// 1
// // // // console.log(Number(false))// 0
// // // // console.log(Number(null))// 0
// // // // console.log(Number(undefined))// NaN


// // // // convert the Following Data using the parseInt and parseFloat method in js  and console the Result 
// // // // 10,10.5 "10x" ,"10.5x" " 56px","abc20" true ,false null undefined 

// // // // console.log(parseInt(10))// 10
// // // // console.log(parseInt(10.5)) //10
// // // // console.log(parseInt("10x")) //10
// // // // console.log(parseInt("10.5x")) //10
// // // // console.log(parseInt(" 56x")) //56
// // // // console.log(parseInt("abc123")) //NaN (data is read from left to right)
// // // // console.log(parseInt(true)) //NaN
// // // // console.log(parseInt(false)) //NaN
// // // // console.log(parseInt(undefined)) //NaN
// // // // console.log(parseInt(null)) //NaN


// // // // console.log(parseFloat(10))//10
// // // // console.log(parseFloat(10.5))//10.5
// // // // console.log(parseFloat("10x"))//10
// // // // console.log(parseFloat("10.5x"))// 10.5
// // // // console.log(parseFloat(" 56x"))// 56
// // // // console.log(parseFloat("abc123"))//nan
// // // // console.log(parseFloat(true))// NaN
// // // // console.log(parseFloat(false))// NaN
// // // // console.log(parseFloat(undefined))// NaN
// // // // console.log(parseFloat(null))// NaN


// // // // let num=10.4242
// // // // console.log(num)
// // // // console.log(num.toFixed(2))//10.42
// // // // console.log(Math.floor(10.5))//10
// // // // console.log(Math.ceil(10.5))//11
// // // // console.log(Math.round(10.5))//11
// // // // console.log(Math.random()*10) // generate a number everytime (0--0.999999)
// // // // console.log(Math.floor(Math.random()*10))
// // // // console.log(Math.abs(-10))// removes the Naggetive sign
// // // // console.log(Math.sqrt(16)) // 4
// // // // console.log(Math.sqrt(25)) // 5
// // // // console.log(Number.MAX_SAFE_INTEGER)//9007199254740991



// // // // Arthematic operator 
// // // // + - * 
// // // // % -- modulo division --remainder
// // // // / --  division --Quotient 
// // // // ** exponiential opertaor -es6+

// // // // ++ increment  operator
// // // // -- decreement operator 


// // // // + : addition operator
// // // // +"" : uniary plus operator 
// // // // "" + "" : string operator 
// // // // console.log(10+20) //30
// // // // console.log(10+"20") //1020 acts string operator( it converts number into string)
// // // // console.log(10+Number("20")) // 30
// // // // console.log(10+ +"20") // uniray plus operator
// // // // console.log(typeof +"20") // number
// // // // console.log(typeof true) // boolean
// // // // console.log(typeof +true) //number

// // // // - 
// // // // console.log(10-19) // -9
// // // // console.log(10-"19") // -9
// // // // console.log("10"-"19") // -9
// // // // console.log("10"-19) // -9
// // // // console.log("10a"-19) // nan

// // // // * 
// // // // console.log(10*5)//50
// // // // console.log(10*"5")//50
// // // // console.log("10"*"5")//50
// // // // console.log("10"*"5a")//NaN


// // // // % -- remainder
// // // console.log(10%2)//0
// // // console.log(15%2)//0
// // // console.log(123%10) //3-- to extract  the last digit from a number we divide it by 10

// // // // / -- Quotient
// // // console.log(10/2) // 5
// // // console.log(15/2) // 7.5
// // // console.log(Math.floor(15/2)) // 7
// // // console.log(123/10)//12 -- remove  the last digit 

// // // console.log(2**2) //2*2//4
// // // console.log(2**4) //2*2*2*2 // 16

// // // // INCREMENT & DECREMENT OPEARATORS 

// // // // INCREMENT  : it always increase the value by 1 
// // // // : PRE_INCREMENT :  (++varibalename) eg: ++a
// // // // :POST_INCREMENT : (varibalename++) eg:a++ 

// // // // DECREMENT  : it always decrease the value by 1 
// // // // : PRE_DECREMENT :  (--varibalename) eg: --a
// // // // :POST_DECREMENT : (varibalename--) eg:a--


// // // // EG :
// // //   let a=2
// // //   let b=3

// // //   console.log(++a) // 3 pre-increment
// // //    console.log(a++) // 2
// // //    console.log(a) // 3

// // // console.log(--a)//1 pre_decrement
// // // console.log(a--) //2
// // // console.log(a--) //1
// // // console.log(a) //0

// // // let a=2   // 3 4
// // //   let b=3 //4 5
// // // let res=++a+ b++ + ++a + a + ++b + ++a 
// //         //  3 + 3 + 4 + 4 + 5 + 5 ==24
// // //   console.log(res)

// // // let a=4 // 5 6
// // // let b=5  // 6 7 8

// // // let res=a++ + ++b + ++a + b++ + a + b++ + b 
// // //     res=4 + 6 + 6 + 6 + 6 + 7 + 8==43
// // // console.log(res)//43

// // // let c=5 // 4 5 4 5 6
// // // let d=2 //3 2
// // // let res1=c-- + ++c - d++ + --c + --d - c++ + d - c++
// // //     // =  5 + 5 - 2 + 4 + 2 - 4 + 2 - 5 ==7
// // //     //    ==5 + 3 +4 +(-2)+(-3)=
// // // console.log(res1)//7

// // // 1.
// // // // solution :
// // // let b=2
// // // let c=6 
// // // let res= c-- + b*c-- - ++b - c*++b + c*2 - --c + b++ - c-b 
// // //     // =6+10-3-16+8-3+4-3-5=-2
// // // console.log(res)

// // // % -extract the Last digit  (remainder)
// // // 123%10 -- 3
// // // 123%100 -- 3
// // // / division-Quotient  (removes the last)
// // // 123/10 -- math.floor()

// // // calculate the sum of digits 
// // // let digits=42
// // // let lastdigit=digits%10 //(keeps last digit avoids remains digits) removes the lastdigit of a number
// // // console.log(lastdigit) //2
// // // let firstDigit=Math.floor(digits/10) //4
// // // console.log(Math.floor(firstDigit))
// // // let res=lastdigit+firstDigit
// // // console.log(res)

// // // // calculate the sum of 456 ==15

// // // // let digit=456
// // // // let ld=456%10 // 6
// // // // let fd=Math.floor(456/10) // 45
// // // // let fdl=fd%10 //5
// // // // console.log(fdl)
// // // // let fds=Math.floor(fd/10) // 4
// // // //  console.log(ld+fdl+fds)


// // // // numbers strings boolean ,BigInt ,undefined null 
// // // // ASSIGNMENT OPERATORS   operator identifier=value
// // // // var a;
// // // // a=10

// // // // var b=10
// // // //  b=20
// // // //  console.log(b)
// // // //  b+=20 b=b+20

// // // // var b=10 update these value by using all the Operators  (+ ,- * % / **) and print the results
// // // var b=10
// // //   b*=10 // b=b*10 ==10*10
// // // console.log("after b*=10:",b)
// // //  b-=5
// // // console.log("after b-=5:",b)
// // //  b+=5
// // // console.log("after b+=5:",b)
// // //  b**=5
// // // console.log("after b**=5:",b)
// // //  b/=5
// // // console.log("after b/=5:",b)
// // //  b%=5
// // // console.log("after b%=5:",b)
// // // let firstname="Ravi"
// // // // let full_name=firstname+"kumar" 
// // // console.log(firstname+="kumar") // firstname=firstname+kumar


// // // COMPARISION OPERATOR : will result in true or false value  
// // // > >= < <= == === != !== 
// // // let age=20
// // // console.log(age>20)//false
// // // console.log(age>=20)//true
// // // console.log(age<20)//false
// // // console.log(age<=20)// true

// // // console.log(age==20)//true
// // // console.log("20"==20)//true
// // // console.log("20"=="20")//true
// // // console.log("20"=="2a")//false
// // // console.log(20===20)//true
// // // console.log("20"===20)//false // it checks the type of data
// // // console.log(Number("20")===20)//true // it checks the type of data

// // // let age1=prompt("enter a value")
// // // console.log(age1)

// // // console.log(typeof age1)
// // // console.log(age1===20)
// // // console.log("data",age!=="20")// 

// // // let ticketPrice=100  
// // // console.log(">:",ticketPrice>100)
// // // console.log(">=:",ticketPrice>100)

// // // LOGICAL OPERATOR 
// // // || -- or opeartors 
// // // && -- and operator 
// // // ! -- not operator 
// // // console.log(true&&true) // true
// // // console.log(false&&true) // false
// // // console.log(true&&false) // false
// // // console.log(false&&false) // false
// // // let age=15
// // // let isindian=true 
// // // // console.log(age>=15&&isindian)//true
// // // // console.log(age>15&&isindian)// false
// // // // let num=2
// // // // console.log(num%2==0&&num==2) //true

// // // console.log(true||true) //true
// // // console.log(false||true) //true
// // // console.log(true||false) //true
// // // console.log(false||false) //false

// // //  console.log(age>=15 || isindian) //true
// // //  console.log(age>15||isindian)//true
// // // console.log(!true) // false
// // // console.log(!false) //true

// // // TERNARY OPERATOR :syntatic sugar of  if-else condition
// // // before
// // // if(condition){ // if condition is true if block will excute
// // // //    code
// // // }else{// if condition is false else block will excute
// // //  // code 
// // // }

// // let age=20
// // let isindian=true
// // // debugger
// // // if(age>20&&isindian){
// // //   console.log("ur eligible for voting")
// // // }else{
// // //  console.log("ur not eligible for voting ")
// // // }

// // // after ternary operator
// // // let res=(condition)?"if condition is true ":"if condition fails"
// // // let eligibility=(age>20&&isindian)?console.log("ur eligible for voting"): console.log("ur not eligible for voting ")
// // let num=20
// // // let res=(num%2==0)?"even":"odd"
// // // console.log(res)
// // // 1. gN =20  check givenNumber is odd  using ternary opeartor 
// // // 1. gN =20  check givenNumber is divisible by 5 using ternary opeartor 
// // // 1. gN =20  check givenNumber is multiple of 3 using ternary opeartor 

// // let multiple3=(num%3==0)?"multiple of 3":"not a multiple of 3"

// // // let MulCond=(condition)?((codition)?():()):("false from first")
// // let cond=(num%2==0)?(num%5==0?"even and divisible by 5":"even but not divisible"):"not even"


// // ShortCircuting
// console.log(+false)
// console.log(0&&"hello")//false-5 true 
// console.log(" "&&"hello")//false-5 true 
// // console.log(false&&"hello")//false-5 true 
// // console.log([]&&"hello")//false-5 true 
// // let str=' '
// // console.log(str.length)
// // let isloggedin=true
// // console.log(isloggedin && "sigin")

// // console the follwing
// // "".length&&"welcome"
// // [].length&&"welcome"
// // 0&&"welcome"
// // null&&"welcome"
// // undefined&&"welcome"
// // NaN&&"welcome"
 
// // console.log(!!false)
// // console.log(!!null)
// // console.log(!!undefined)
// // console.log(!!"")
// // console.log(!!0)
// // console.log(!![])
// // // console.log(!!{})
// // console.log(1=="1")//type conversion
// // console.log(1==="1")//type conversion
// // let num=1
// // console.log(typeof num.toString())




// // // Bitwise 
// // // num%2==0 
// // // num&1==0
// // let a=10 // 1010
// // let b=2  // 0010
// // console.log(a&b)//  
// //         // 1010
// //         // 0010
// // // result: 0 0 1 0==>2
// // console.log(a|b)// 10
// //         // 1010
// //         // 0010
// // // result :   1010--->10
// // console.log(a^b)//
// //         // 1010
// //         // 0010
// // // result :1000-->8 
// // // 10<<2  1010 --->101000 
// // console.log(10<<2) // 40 --num*2**n 10*2^2 10*4=40
// // console.log(10>>2) // 2  10/2^2 ==10/4 ==2 100010





// // STRINGS 
// //  text format of data which is written in double Quotes or single Quotes or template_literals 
// // we call it as strings 

// // examples:  stored by value not by refrence

// // string literal method / 
// let a='bye'
// let a1="hello"
// let a2=`hello` //template literals 


// console.log(typeof a)
// console.log(typeof a1)
// console.log(typeof a2)

// // // multi line strings are not allowed 
// // // const data="hello 
// // // javascript"

// // //
// // // const da="hello "ravi""
// // const res="hello" + " " + "kumar"
// // console.log(res)
// // const data="hello \njavascript"
// // console.log(data)
// const data=`hello 
//  " java " 
//  script ${a}`
//  console.log(data)

//  let example="python"
//    example="javascript"
//  console.log(example.length-1)
// console.log( example[0])
// console.log( example[example.length-1])
// example[0]="a"
// console.log(example)

// // using string Constructor method
// let sec=new String("hello js")
// console.log(sec)
// console.log(typeof sec)//object
// console.log(sec[1])
// sec[1]="t"
// console.log(sec)

// // 3.using the  string global keyword 
// let sec1=String("hello js")
// console.log(sec1)
// console.log(typeof sec1)//object
// console.log(sec1)


// // UNDEFINED :
 
//  var t;
//  let d;
//  console.log(t)
//  console.log(d)
//  console.log(typeof d)

//  console.log(typeof t)
//  function Data(){
//     return
//  }
// console.log(Data())


// null 
// null refrence is been passed to an object
// let e=null
// console.log(e)
// console.log(typeof e) // null 0  object 

// boolean
console.log(typeof true)
console.log(typeof false)


// 
console.log(2**53-1)
console.log(Number.MAX_SAFE_INTEGER+1)
console.log(Number.MAX_SAFE_INTEGER+2)
// BigInt
let data=10n
let data1=BigInt("100")
console.log(data)
console.log( typeof data)
console.log(  data1) //100n
console.log( typeof data1)

// take a number add sub divide multiply with 10n 
console.log(10+"10")// implicit conversion
// console.log(10+10n)// Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(BigInt(10)+10n)// explicit conversion
console.log(BigInt(10)-10n)// explicit conversion
console.log(BigInt(10)*10n)// explicit conversion

// any year %4 ==0
// 365.255 - 366
100 
400
// console.log(2000%4==0 && 2000%100==0 && 2000%400==0)


