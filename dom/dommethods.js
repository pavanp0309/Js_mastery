
// method1
// getElementById : will access only the first element that matches in  the document
let ele1=document.getElementById("id1")
console.log(ele1)

// 🎀 Changing the content 🎀
// innerHtml vs innerText vs textContent 
// ele1.innerText="hii"
//🎉 html element are also consider as text only
// ele1.innerText='<span style="color: red;">hii</span>'
//🎉html element are consider as element and we can apply the styles as well
// ele1.innerHTML='<span style="color: red;">hii</span>'

// textContent  : it reads the display :none and visibility :none properties as well
console.log(ele1.innerText) // heii
console.log(ele1.textContent) //heii hello

// 🎀 Applying styles 🎀
ele1.style.backgroundColor="gold"
ele1.style.padding="10px"
ele1.style.textAlign="center"
ele1.style.border="2px solid red"


// 2.method
let ele2=document.getElementsByClassName("c1")
console.log(ele2)//HTMLCollection(3) [p.c1, p.c1, p.c1]

//  🎀 Changing the content 🎀
ele2[0].innerText="hii ele2"
ele2[2].innerText="hii element"
ele2[1].innerHTML='<span style="color: red;">hii</span>'

// 🎀 Applying styles 🎀
ele2[0].style.color="red"
ele2[1].style.border="2px solid red"
ele2[1].style.padding="10px"
ele2[1].style.backgroundColor="gold"

// 🎀 Changing all element 🎀
// for(let i=0;i<ele2.length;i++){
//     ele2[i].innerText="hii🎉🎊 element"
//     ele2[i].style.backgroundColor="gold"
// }


// // 3.method
// let ele3=document.getElementsByTagName("h6")
// console.log(ele3) //HTMLCollection(4) [h6, h6, h6, h6]


// //  🎀 Changing the content 🎀
// ele3[0].innerText="hii ele2"
// ele3[2].innerText="hii element"
// ele3[1].innerHTML='<span style="color: red;">hii</span>'

// // 🎀 Applying styles 🎀
// ele3[0].style.color="red"
// ele3[1].style.border="2px solid red"
// ele3[1].style.padding="10px"
// ele3[1].style.backgroundColor="gold"

// // 🎀 Changing all element 🎀
// for(let i=0;i<ele3.length;i++){
//     ele3[i].innerText="hii🎉🎊 element"
//     ele3[i].style.backgroundColor="gold"
// }


// 4.method 
// to access id values : #idvalue 
// to access the class values : .classvalue
// to access the tags  : tagname
// it access the only the first element that matches in the document
// let ele4=document.querySelector("#id1")
// console.log(ele4)
// let ele5=document.querySelector(".c1")
// console.log(ele5)
// let ele6=document.querySelector("h6")
// console.log(ele6)
// //  🎀 Changing the content 🎀
// ele6.innerText="hello"
// ele6.innerHTML="hello js"
// ele6.textContent="hello"
// //  🎀 Changing the styles 🎀
// ele6.style.color="blue"

// 5.method 
let ele7=document.querySelectorAll("#id1")
console.log(ele7) //NodeList(2) [h3#id1, h3#id1]
let ele8=document.querySelectorAll(".c1")
console.log(ele8) //NodeList(3) [p.c1, p.c1, p.c1]
let ele9=document.querySelectorAll("h6")
console.log(ele9) //NodeList(3) NodeList(4) [h6, h6, h6, h6]
// Or operator 
let ele10=document.querySelectorAll("#id2, .c1 ,h6")
console.log(ele10) // [p.c1, p.c1, p.c1, h6, h6, h6, h6]
//  🎀 Changing the content 🎀
ele10[0].innerText="hii hello"
//   🎀 Changing the styles 🎀
 ele10[0].style.color="blue"
// // 🎀 Changing all element 🎀
// for(let i=0;i<ele10.length;i++){
//     ele10[i].innerText="hii🎉🎊 element"
//     ele10[i].style.backgroundColor="gold"
// }

ele10.forEach((tags)=>tags.style.color="red")