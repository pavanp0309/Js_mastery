// WHAT ARE ARRAYS
// WHY USE ARRAYS & BENIFITS
// ACCESSING WAYS & Methods
// examples 

// collection of different types of data under single varaibale name
// let data=[10,"pavan",true,{},[]]

// easy update and acccess and delete 
// less storage due single varaibale name 
// eccomerce products collecting login information todos,quizapp etc..

// accessing 
// Array always starts with 0 index 
// console.log(data[0])//10
// console.log(data[2])//true
// console.log(data[data.length-1])//[]  //access the last value form an array

// let arr=[1,2,5,{name:"raju"},[1,3,4],true]
// // access the following values and print it console.
// //  2,raju 4 true 
// console.log(arr[1])//2
// console.log(arr[3].name)//raju
// console.log(arr[4][2])//4
// console.log(arr[arr.length-1])//true

// // 2. using loops 
// let data=[1,2,3,4,5,6,7,8,9,10]
// console.table(data)
// Print the values of the even index
// for(let i=0;i<data.length;i++){
//     console.log("index",i)
//     console.log("val",data[i]) //data[1]
//     if(i%2==0){
//         console.log(data[i])
//     }
// }

// write a program to print the given array in reverse order
// for(let i=data.length-1;i>=0;i--){
//     console.log(data[i])
// }
// // skip the elements
// for(let i=0;i<data.length;i+=2){
    
//     console.log("val",data[i]) //data[1]
   
// }

// let data1=[1,2,3,4,5,6,7,8,9,10]
// let da={
//     name:"raju",
//     age:24
// }
// console.table(data1)
// // using the the for of loop 
// // use for itteration through the strings or arrays
// for( let ch of data1){
//     if(ch%2==0){
//         console.log("even",ch)
//     }
// }

// adding/removing the  elements
// 1.push  : used for adding an element to the last
// 2.pop  :used for removing an element to the last
// 3.shift :used for removing an element to the first
// 4.unshift :used for adding an element to the first

// normal way to update a value
// let a=[1,3,4,5]
// console.log(a.length)
// a[0]="firstvalue"
// a[a.length-1]="lastvalue"
// a[a.length-1]=10
// a[4]="10"
// delete a[a.length-1]
// console.log(a)

// push : adds to last 
// Appends new elements to the end of an array, and returns the new length of the array.
// a.push(9)
// a.push("🎀")
// console.log(a)

// // Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// let res=a.pop()
// console.log(res)


// // shift : removes the element form firs
// // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// let res1=a.shift()
// console.log(res1)

// Inserts new elements at the start of an array, and returns the new length of the array
// let res2=a.unshift("🧨✨")
// console.log(res2) //5
// console.log(a)//['🧨✨', 3, 4, 5, 9]

// write a program to add element to last and first 
// write a program to remove element to last and first 
// let arr2=[3,4]

// write a program to print even number in a new array using the for loop  from a given array 
// let num=[1,3,5,7,8,80,20,34,26,68,34]
// let even=[]// print all even number in these
// for(let i=0;i<num.length;i++){
//     if(num[i]%2==0){
//         console.log(num[i])
//         even.push(num[i])
//     }
// }
// console.log(even)

// write a function that takes an empty array as input and performs the following
// 1.adds 3 numbers to end 
// 2.adds 2 numbers to start
// 3.removes 1 from end 
// 4.removes 1 from start 
//   finally the print the array and its length 

// To remove the elements from certain index  
// slice(startindex,endindex)
// let arr3=[1,3,4,5,6,8,7,7]
// console.log(arr3)
// console.log(arr3.slice())//=[1,3,4,5,6,6,7,7]
// console.log(arr3.slice(2))//[4, 5, 6, 6, 7, 7]
// console.log(arr3.slice(2,5))//[4, 5, 6]
// console.log(arr3.slice(-2))//[7, 7] 8-2==6
// console.log(arr3.slice(7,5))//[]

// Array.splice(start: number, deleteCount?: number)

// let arr4=[1,"🎈" ,3,"java","py"]
// // console.log(arr4.splice())//[]
// // console.log(arr4.splice(1))//['🎈', 3, 'java', 'py']
// // console.log(arr4.splice(1,2))//['🎈', 3]
// // console.log(arr4.splice(2,1))//[3]
// console.log(arr4.splice(2,2,"js","html","css"))//[3]
// console.log(arr4)


// Higher methods
// Map
// filter reduce  foreach find findIndex sort Reverse 

// Syntax : 
// map(function(ele,index,newarry){}) //anonomous function syntax
// map((ele,index,newarry)=>{}) // arrow function syntax
// function data(ele,index,newarry){}
// map(data) // Named function syntax
// Map :

let arr=[1,3,4,5,6,,7,8,8,9,21]
// let res=arr.map(function(ele,index){
//    console.log("ele",ele)
//    console.log("i",index)
// })

// let res1=arr.map((ele,index)=>{
//    console.log("ele",ele)
//    console.log("i",index)
// })

// function data(ele,index){
//    console.log("ele",ele)
//    console.log("i",index)
// }
// let res3=arr.map(data)

let arr1=[1,3,4,5,6,,7,8,8,9,21]
// let res5=arr1.map(function(ele){
//   return ele+3
// })

// console.log(res5)

// Without using the Map
// function addAnumber(ele){
//     let newarr=[]
//     console.log(ele)
//     for(let i=0;i<ele.length;i++){
//        console.log(ele[i])
//     //    adding into new array
//        newarr.push(ele[i]+=3)

//     }
//     return newarr

// }
// let res=addAnumber(arr1)
// console.log(res)

// let res5=arr1.map(function(ele){
//    console.log("mele",ele)
//    return ele+3
// })
// console.log(res5)

// write a program using the map to square each number in  given array
// let arr3=[1,3,5,7,9,11,13,15]
// let res=arr3.map((ele)=>ele**2)
// console.log(res)

// write a program using the map to check given number or even or odd in a array
let arr6=[1,2,4,5,6,7,8,9,10,12,14]
let even=arr6.map(function(ele){
    return ele%2==0
})
console.log(even)

// function printEven(arr){
//     let even=[]
//     for(let i=0;i<arr.length;i++){
//           if(arr[i]%2==0){
//             even.push(arr[i])
//           }
//     }
//     return even
// }

// let re=printEven(arr6)
// console.log(re)


// Filter : it returns an array with few element that satisify the codition
let arr7=[1,2,4,5,6,7,8,9,10,12,14]
// let even1=arr6.map(function(ele,i){
//     console.log(ele)
//     console.log("i",i)
//     return ele%2==0
// })
// console.log(even1) //[false, true, true, false, true, false, true, false, true, true, true]

// let even2=arr6.filter(function(ele,i){
// //     console.log(ele)
// //     console.log("i",i)
// //     return ele%2!==0
// // })
// // console.log(even2) 

// let arr8=[1,2,4,5,6,7,8,9,10,12,14]
// function Total(arr){
//     let sum=0
//   for(let i=0;i<arr.length;i++){
//     sum+=arr[i]
//   }
//   return sum
// }
// let res2=Total(arr8)
// console.log(res2)

// // it returns the single Value
// let res=arr8.reduce(function(total,ele,_,newarr){
//   console.log("t",total)
//   console.log("e",ele)
// //   console.log("i",index)
// //   console.log("ar",newarr)
//   return total+ele
// })//initial value
// console.log(res)

// Foreach method 
let arr3=[1,3,4,5,6,8,10,14]
// let res2=arr3.forEach((ele,i)=>{
//     console.log("ele",ele)
//     console.log("index",i)
//     return ele*3
// })
// console.log(res2)
// let totaleven=arr3.filter((ele)=>ele%2==0).map((ele)=>ele*2).reduce((t,e)=>t+e)

// console.log(totaleven)

let arr4=[1,3,4,5,6,4,8,10,14]
console.log(arr4.find((ele)=>ele==4)) //4
console.log(arr4.findIndex((ele)=>ele==4))//2
console.log(arr4.sort((a,b)=>a-b))//ascend order
console.log(arr4.sort((a,b)=>b-a))//descascend order
console.log(arr4.reverse())//descascend order
