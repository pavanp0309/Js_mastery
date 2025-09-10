// let pele=document.getElementById("parent")
// console.log(pele)

// // 🎀Parent Traversing 
// // console.log(pele.parentElement)//body
// // console.log(pele.parentElement.parentElement)//html
// // console.log(pele.parentElement.parentElement.parentElement)//null
// // console.log(pele.parentNode)//body
// // console.log(pele.parentNode.parentNode)//html
// // console.log(pele.parentNode.parentNode.parentNode)//document
// // console.log(pele.parentNode.parentNode.parentNode.parentNode)//null

// // 🎀child element Traversing 
// console.log(pele.children) //HTMLCollection(3) [h1, p, section]
// console.log(pele.childNodes) //NodeList(9) [text, comment, text, h1, text, p, text, section, text]0: text1: comment2: text3: h14: text5: p6: text7: section8: textlength: 9[[Prototype]]: NodeList
// console.log(pele.firstChild) //#text
// console.log(pele.firstElementChild) //h1
// console.log(pele.lastChild) //#text
// console.log(pele.lastElementChild) //#sectiontag




let parentele=document.querySelector("#parent")
// console.log(parentele.parentElement)//body
// console.log(parentele.parentElement.parentElement.parentElement.innerHTML="hello")//null /Uncaught TypeError: Cannot set properties of null 
// console.log(parentele.parentNode)//body
// console.log(parentele.parentNode.parentNode.parentNode)//document

// console.log(parentele)
// console.log(parentele.children)//HTMLCollection(3) [h1, p, section]
// console.log(parentele.childNodes)//NodeList(9) [text, comment, text, h1, text, p, text, section, text]
// console.log(parentele.firstChild)//#text
// console.log(parentele.firstElementChild)//h1
// console.log(parentele.lastElementChild)//section
// console.log(parentele.lastChild)//section

// sibilings 
// console.log(parentele.previousSibling) //text
// console.log(parentele.previousElementSibling) //h2
// console.log(parentele.nextElementSibling) //h4
// console.log(parentele.nextSibling) //text

// let startele=document.querySelector(".start")
// console.log(startele)//li
// console.log(startele.parentElement)//ul
// console.log(startele.parentElement.previousElementSibling)//h4
// console.log(startele.parentElement.previousElementSibling.parentElement)//body
// console.log(startele.parentElement.previousElementSibling.parentElement.firstElementChild)//body
// console.log(startele.parentElement.previousElementSibling.parentElement.firstElementChild.nextElementSibling.childNodes[1])//body
// console.log(startele.parentElement.previousElementSibling.parentElement.firstElementChild.nextElementSibling.childNodes[1].parentElement.lastElementChild.firstElementChild.parentElement.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.innerText="Reached")//body

let pare=document.querySelector(".begin")
console.log(pare.innerHTML)
console.log(pare.parentElement.parentElement.previousElementSibling.previousElementSibling.innerHTML)
console.log(pare.parentElement.parentElement.previousElementSibling.previousElementSibling)