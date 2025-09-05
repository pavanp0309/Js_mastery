// strings: characters or words or sentances ,paragraphs WHich are placed inside single or double template literals 
// Strings are Primitive type 
// Primitive : are lowest level of language implementation once created can be edited 
// ImMutable in nature : cant be edited or changed or updted
// Strings are alwsys stored by value not by Reference 


// different ways to create the STrings 
// 1.using the string Literals 
        //  1. using Single Quotes
        //  2. using double Quotes
        //  3. using Template literals : backticks
//  2.Using string Global Keyword 
//  3.using the new Keyword --------> Non_primitive

// Strings Primitive Are converted into non-primitive by js by default so the methods available of non-primitive is alos
// available on  primitive types 

// let a={
//     name:"raju" ,//property and value
//     Uppercase:function up(){ //method
//         console.log( this.name.toUpperCase())
//     }
// }
// console.log(a.name)
// a.Uppercase()

// let a1="hello"


// 1.string literals
// let data='ravi' 
// let data1="hello" 
// let data2=`hello` 

// console.log(data)
// console.log(data.length)
// function FindLength(str){
//     return {
//         type:typeof(str),
//         len:str.length
//     }
// }

// let res=FindLength(data)
// let re2=FindLength(data1)
// let re3=FindLength(data2)
// console.log(res)
// console.log(re2)
// console.log(re3)

// // Template literals=
// // Multistrings 
// // include varaibles ,string concatatination  
// let a=`
// h
// e
// l
// l
// o
// ${data} ${data2}
// `

// console.log(a)


// // 2.Using the Golbal keyword
// let str=String("hello") 
// console.log("s",str)
// let re4=FindLength(str)
// console.log(re4)

// // 3.using the New Kwyword 
// let str3=new String("hello")
// console.log("ss",str3)
// let re5=FindLength(str3)
// console.log(re5)



// Methods 
// toUpperCase()
// toLowerCase()

// function Search(str){
//     return{
//         up:str.toUpperCase(),
//         lp:str.toLowerCase()
//     }
// }
// let res=Search("Hello")
// console.log(res.up)
// console.log(res.lp)

// 2.
// // Trim 
// // TrimStart
// // trimEnd 

// let val=new String("     hello      ")
// console.log(val)//String {' hello '}
// console.log(val.length)//7

// // trim:whih removes the White spaces from Start and end
// console.log(val.trim()) //hello
// console.log(val.trim().length)//5

// // trimstart : removes the White space Form start
// // trimend : removes the White space Form end
// console.log(val.trimStart())//5
// console.log(val.trimStart().length)//11
// console.log(val.trimEnd().length)//10

3.
// usecases: RollNumbers ,timers ,payment apps  etc
// padStart
// padStart(maxLength: number, fillString?: string)
// padEnd

// let Mb='777272'
// console.log(Mb.length)
// console.log(Mb.padStart(10,"*"))
// console.log(Mb.padEnd(10,"*"))

// // add 4 zeros To the end
// // add 1 zeros To the start
// let Timers="1"
// // write a program to add zero to start of rollNumber
// let Rollnumber=45 
// function AddZeros(rno){
//     return {
//         val:rno,
//         type:typeof(rno),
//         l:rno.length,
//         c:rno.toString(),
//         c1:String(rno),
//         c3:String(rno).length,
//         c2:String(rno).padStart(3,"0")
//     }
// }
// console.log(AddZeros(Rollnumber))
// {val: 45, type: 'number', l: undefined, c: '45', c1: '45', …}

// Slice : it used for extraction substring
// slice(startindex,endindex)
// let str="Python"
// // 0:p 1:y 2:t 3:h 4:o 5:n
// console.log(str)
// console.log(str.length)//6
// console.log(str.slice())//Python
// console.log(str.slice(2))//thon
// console.log(str.slice(2,4))//th
// console.log(str.slice(4))// on
// console.log(str.slice(-2))// 6-2=4
// // startindex>endindex===>empty sunbstring
// console.log(str.slice(4,2))// 6-2=4  6-4=2(4,2) empty
// console.log(str.slice(-2,-4))// 6-2=4  6-4=2(4,2) empty


// let amazon='Godrej 180L 2Star Advanced Capillary Technology | Jumbo Vegetable Tray | Wired Shelves | 2.25L Bottle Space | Wide Shelf'
// console.log(amazon.length)
// console.log(`${amazon.slice(0,50)}...`)


// substring(startindex,endIndex)
// let str1="Python"
// // 0:p 1:y 2:t 3:h 4:o 5:n
// console.log(str1.length)
// console.log(str1.substring())//Python
// console.log(str1.substring(1))//ython
// console.log(str1.substring(1,3))//ython
// console.log(str1.slice(-1,3))//ython 6-1 5>3==empty
// console.log(str1.substring(-1,3))//negative values are treated as zero
// console.log(str1.slice(5,3))//empty
// console.log(str1.substring(5,3))//swaps the index lastindex=firstindex first=last


// // extraction methods 
// substr : depreciated
// sub 
// substring:
// slice




//searching Methods
// at()
// indexof()
// lastindexof()
// search()
// includes ()
// match()
// matchAll()

//----> indexOf(searchString: string, position?: number): number
// let str4="Python h"
// // 0:p 1:y 2:t 3:h 4:o 5:n
// console.log(str4.indexOf("t"))//2
// console.log(str4.indexOf("t",3)) // -1 if value not found return -1
// console.log(str4.indexOf("h",4)) // -1 if value not found return -1
// console.log(str4.indexOf("h",-1)) // -1 if value not found return -1
// console.log(str4.lastIndexOf("h")) // -1 if value not found return -1
// console.log(str4.lastIndexOf("h",6)) // -1 if value not found return -1


// Find the Length of the String 
// extract the substring "Vegetable" from a given string 
// Find t from the given string using the indexof and lastIndexof methods

// includes
//  search
// replace
// // replaceAll
// console.log(Data.includes("Vegetable"))

// // Check The vowles
// console.log(Data.search("j",))
// console.log(Data.search(/j/i))
let Data="Jumbo J Vegetable j Tray"
// console.log(Data.replace("J","🎀"))
// console.log(Data.replace(/J/g,"🎀"))
// console.log(Data.replace(/J/gi,"🎀"))
console.log(Data.replaceAll(/J/gi,"🎀"))
// console.log(Data.matchAll("J").next())
// let a="hello world"
// console.log(a.repeat(8))
// console.log(a.split(""))
// console.log(a.split(" "))
// console.log(a.split(" "))

// Slice 
// padstart
// padEnd 
// trimStart
// trimend
// replaceAll
// includes
// indexof 
// at(2021)

let a="madam"

let rev=""
for(let i=a.length-1;i>=0;i--){
      rev+=a[i]
      
}
console.log(rev===a)

// console.log(a.split("").reverse().join())