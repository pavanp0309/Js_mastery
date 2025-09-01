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

// let username="ravikumar"/
// startpoint:0
// process:
//     username[i]
// endpoint:username.length
// for(let i=0;i<username.length;i++){
//    console.log("i",username[i])
// }
// let d=[1,2,3,4,5,6]
// for(let i=0;i<d.length;i++){
//    console.log("i",d[i])
// }

// for(let i=0;i<d.length;i++){
//    if(d[i]%2==0){
//      console.log("even",d[i])
//    }
// }

// rows:i cols:j
// let n = 4; //end point (both rows and cols)
// for (let i = 0; i < n; i++) {
//   // used for printing the Rows (i<4= 1,2,3 ,i<=4 i=1,2,3,4)
//   let str = " "
//   for (let j = 0; j < n; j++) { //used for printing columns
//     str += "*  "
//   }
//   document.write(str ,"<br>")

// }

// let n=4
// let count=1
// // Rows==i  cols==j
// for(let i=1;i<=n;i++){
//    console.log("i",i)
//    let str=""

//    // for columns
//    for(let j=1;j<=i;j++){
//       console.log("j",j)
//       str+=count
//       count++
//    }
//    document.write(str,"<br>")
// }

// let n=5
// for(let i=1;i<=n;i++){
//  let str=" "
//  for(let j=1;j<=n-i+1;j++){ 5-1+1 ==4+1==5
//    str+="* "
//  }
//  document.write(str,"<br>")
// }

// let n=5
// for(let i=1;i<=n;i++){
//  let str=" "
//  for(let j=n;j>=i;j--){
//    str+="* "
//  }
//  document.write(str,"<br>")
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let j = 1; j <= n; j++) {
//     if (i == 1 || i == n || j == 1 || j == n) {
//       str += "* ";
//     } else {
//       str += "  ";
//     }
//   }
//   console.log(str);
// }

// let n=5
// for(let i=1;i<=n;i++){
//   let row=" "
//   for(let j=1;j<=n;j++){
//     if(i==Math.floor(n/2)||j==Math.floor(n/2)){
//       row+="* "
//     }else{
//       row+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
//     }
//   }
//   document.write(row,"<br>")
// }

// While Loop : (No of itteration are unknown then we prefer the WHile Loop)
// condition based loop

// intialization
// while(condition){
//    // code
//    // increment
// }

// realtime UseCases :
// Games
// Login
// reverse digits
// timers ,carsouls
// etc..

// 123
//  algo
// To Remove the Last digit : num%10 -- 3 2 1
// To extract the first digit : num/10 (mosdifies the Num every time)

function reverseDigit(num) {
  console.log("num", num);
  // extract the Last digit

  let rev = 0;
  console.log(rev);
  while (num > 0) {
    let digit = num % 10; // 3
    rev = rev * 10 + digit; // 0*10+3==3
    console.log(rev);
    console.log("digit", digit);
    num = Math.floor(num / 10); //
  }
}

// reverseDigit(123);

// // Palindrome  121  --121
//                123--321
// 1--

function isPalindrome(num) {
  if (num >= 1 && num <= 9) return true; //edge case
  if (num < 0) {
    num = Math.abs(num);
  }
  let originalnum = num;
  let rev = 0;
  while (num > 0) {
    //num!=0
    let digit = num % 10; // which removes the last of digit of a number
    rev = rev * 10 + digit;
    //  update the number (extract remainning digits from a number)
    num = Math.floor(num / 10);
  }
  return originalnum == rev;
}

let res1 = isPalindrome(-123);
console.log(res1 ? "ispalindrome" : "not palindrome");

// Amstrong : 12
//write a program to count Number of digits in a number using the while

// function sample(){
//    if(true){
//    let num=-10
//    console.log(num)
//     Math.abs(num)
// }
// }
// let res=sample()
// console.log(res)

// function CountDigits(num){
//    console.log(num)//12346
//    let count=0
//    while(num>0){ 1234
//    debugger
//     num=Math.floor(num/10) // 1234 123 12 1

//       count++ // 1 2
//    }

//    return count
// }
// let res= CountDigits(12346)
// console.log(res)

// calculate the sum of digits in a numbers

// function sumDigits(num) {
//   let sum = 0;
//   while (num > 0) {
//     let digit = num % 10;
//     sum += digit;
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }
// let res = sumDigits(12345); //15 console.log(res)


// let res4=Math.pow(2,4) //base=2 exponent=4
// console.log(res4)
// function PowerVal(base,exponent){
//    let power=1
//    while(exponent>0){
//      power*=base //power=power*base
//      exponent--
//    }
//    return power

// }
// let resp=PowerVal(2,3)
// console.log(resp)

// 124
// digits=3 
// 1^3 + 2^3 +4^3==123



// count digits
function CountDigits(num){
   console.log(num)//12346
   let count=0
   while(num>0){ 1234
  
    num=Math.floor(num/10) // 1234 123 12 1

      count++ // 1 2
   }

   return count
}

function PowerVal(base,exponent){
   let power=1
   while(exponent>0){
     power*=base //power=power*base
     exponent--
   }
   return power

}

function isAmstrong(num){
   let originalnum=num
   let digits=CountDigits(num) //3
   let sum=0
   console.log(digits)
   while(num>0){
      let digit=num%10 // 153 // 3
      sum+=PowerVal(digit,digits) //sum=0+3*3
      num=Math.floor(num/10)
   }
   return originalnum==sum

}

let res= isAmstrong(153)
console.log(res?"yes":"no")
1 + 125 + 27

