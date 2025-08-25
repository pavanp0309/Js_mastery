// loops are used to avoid the repetation of the code/task 

// eg: repeation of code 
// console.log("greet")
// console.log("greet")
// console.log("greet")


// Different Types of Loops 
// 1.for loop 
// 2.while loop 
// 3.do-while 
// 4.for in loop -->es6
// 5 for of loop -- > es6 


// Input  : 123
// process :
//     //  let rev=0
//     //   num%10 -->3 2 1
//     //   math.floor(num/10) 12 1 
//     // //   123.toString().reverse() 
// output 321

// for loop  is used when we know the no_of iteration
// bank-login
// (startpoint):1
// ( end point):3

// print 10 natural number 
// startpoint:1
// endpoint:

// syntax 
// for(initialization;condition;increment/decrement){
//     // code 
// }

// // initialization;  start point 
//    note: for arrays and strings always start with 0
//    "hello"   ==> h-0 e-1 l-2 l-3 o-4
// // condition: endpoint 
//       repeat upto 5  i<=5 1 2 3 4 5 
//                      i<5 1 2 3 4 

// // increment/decrement :
//        i++ forward steps 
//        i-- backward steps 
//        i+=2 : for skeping the value as i increase evrytime by 2

// print first 10 natural numbers 
// algo 
//    startpoint:1
//    process:
//      print the number
//    endpoint:10

// for(let i=1;i<=10;i++){
//     console.log("i",i)
// }

// print first 10 natural numbers  in reverse   

// algo 
// startpoint : 10
// process: 
//       i>=1 condition
//       decrement i--
//       print the output
// endpoint:1

// for(let i=10;i>=1;i--){
//     console.log("i",i)
// }

// print the even number 1 to 30 using for loop 
// alogo 
// sp:1
//  process : 
//     for each i check if i%2==0 
// endp:30
// for(let i=1;i<=30;i++){
//     if(i%2==0){
//         console.log("even",i)
//     }
// }

// for(let i=2;i<=30;i+=2){

//         console.log("even",i)
    
// }

// print the sum of first 20 natural numbers 
// algo 
//  startpoint : 1
//  process : 
//     let sum=0 initial value of sum 
//     condition  
//           sum+= i  (update the sum variable)
//     repeat until condition fails
//  endpoint:20

// let sum=0
// for(let i=1;i<=20;i++){
//     sum+=i
// }
// console.log(sum)
// print the sum of first 20 even natural numbers 
// let sum1=0
// for(let i=1;i<=20;i++){
//     if(i%2==0){
//           sum1+=i
//     }
// }
// console.log(sum1)

// write  a program to count the no of even and odd natural numbers from 1 to 50 

// algo 
//   startpoint:1
//   process : 
//      take two variables evenCount and oddcount and initialize with 0 
//        let evenCount=0
//        let oddcount=0
//        check the give number is odd or even  based on it increment the count 
//        repeat it until the endpoint 
//   enpoint:50

// let evenCount=0
// let oddcount=0
// for(let i=1;i<=50;i++){
//    if(i%2==0){
//     evenCount++
//    }else{
//     oddcount++
//    }
// }
// console.log(evenCount)
// console.log(oddcount)

let username="ravikumar"
// startpoint:0
// process:
//     username[i]
// endpoint:username.length
for(let i=0;i<username.length;i++){
   console.log("i",username[i])
}
let d=[1,2,3,4,5,6]
for(let i=0;i<d.length;i++){
   console.log("i",d[i])
}

for(let i=0;i<d.length;i++){
   if(d[i]%2==0){
     console.log("even",d[i])
   }
}