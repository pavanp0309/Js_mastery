let pele=document.getElementById("parent")
console.log(pele)

// 🎀Parent Traversing 
// console.log(pele.parentElement)//body
// console.log(pele.parentElement.parentElement)//html
// console.log(pele.parentElement.parentElement.parentElement)//null
// console.log(pele.parentNode)//body
// console.log(pele.parentNode.parentNode)//html
// console.log(pele.parentNode.parentNode.parentNode)//document
// console.log(pele.parentNode.parentNode.parentNode.parentNode)//null

// 🎀child element Traversing 
console.log(pele.children) //HTMLCollection(3) [h1, p, section]
console.log(pele.childNodes) //NodeList(9) [text, comment, text, h1, text, p, text, section, text]0: text1: comment2: text3: h14: text5: p6: text7: section8: textlength: 9[[Prototype]]: NodeList
console.log(pele.firstChild) //#text
console.log(pele.firstElementChild) //h1
console.log(pele.lastChild) //#text
console.log(pele.lastElementChild) //#sectiontag