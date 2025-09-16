
// 1.directly through html elements
// event Handler 
function handlePopup(){
  alert("welcome user")
}

// 2.directly through dom attrubutes 
let btn1=document.getElementById("id1")
let btn3=document.getElementById("id3")
let btn4=document.getElementById("id4")
let btn2=document.getElementById("id2")
console.log(btn1)

// event Handler
function handleWelcome(){
    alert("onclick")
}
function handleWelcome1(){
    alert("onmouseEnter")
}
function handleWelcome2(){
    alert("onmouseUp")
}


// solution for 2nd method
// btn1.onclick=handleWelcome
// btn1.onclick=handleWelcome1
// btn3.onmouseenter=handleWelcome1
// btn4.onmouseup=handleWelcome2
// btn1.onmouseleave=handleWelcome2
// btn2.ondblclick=function(){
//      alert("hello Ai-1")
// }

// btn1.onclick=handleWelcome
// btn1.onclick=handleWelcome2


// #3 AddeventLinstners 
// btn1.addEventListener("click",handleWelcome)
// btn1.addEventListener("click",handleWelcome2)
// btn1.addEventListener("click",function(){
//     alert("hello")
// })
// btn1.addEventListener("click",()=>{
//     alert("hello-1")
// })


// let list=document.getElementById("list")
// console.log(list) //ul

// list.addEventListener("click",function(e){
// //   console.log(e.target.style.display="none")
// // e.target.classList.toggle("c1")
// console.log(e.target.innerText="hi")
// })

// let keyboard=document.getElementById("keyboard")
// let text=document.getElementById("text")
// console.log(keyboard)

// keyboard.addEventListener("keydown",function(e){
//    text.innerText +=e.key
// })


// EVENT PROPAGATION :  
    // TARGET 
    // EVENT BUBBLING 
    // EVENT CAPTURING

// access all the ELemnts  
// let Pele=document.querySelector(".parent")
// let Cele=document.querySelector(".child")
// let Btnele1=document.querySelector(".btn-1")
// let Btnele2=document.querySelector(".btn-2")
// document.body.addEventListener("click",(e)=>{
//     //    event.stopPropagation()
//     console.log("body is cliked")
// },true)
// Pele.addEventListener("click",(event)=>{
//     event.stopImmediatePropagation()
//     console.log("parent is cliked")
// },{capture:true})
// Pele.addEventListener("click",(event)=>{
//     event.stopPropagation()
//     console.log("parent is cliked")
// },{capture:true})

// Cele.addEventListener("click",()=>{
//     console.log("child is cliked")
// },true)
// Btnele1.addEventListener("click",()=>{
//     console.log("Btnele1 is cliked")
// })
// Btnele2.addEventListener("click",()=>{
//     console.log("Btnele2 is cliked")
// })


// event Delagation
let listitems=document.querySelector(".list")
listitems.addEventListener("click",(e)=>{
  e.target.classList.toggle("c1")
})