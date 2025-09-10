// let card=document.createElement("div")
// let textele=document.createTextNode("hii everyone")
// console.log(card)
// console.log(textele)


// card.appendChild(textele)
// document.body.appendChild(card)


// // inserting the Text
// // card.innerText="hello"
// // card.innerHTML="hello-a"
// // card.textContent="hello-b"

// let aele=document.createElement("a")
// console.log(aele)
// aele.innerText="click"

// // adding the attributes 
// card.setAttribute("id","id1")
// aele.setAttribute("href","hello_js")
// aele.setAttribute("target","_blank")
// console.log(card.hasAttribute("id"))
// aele.removeAttribute("target")
// console.log(aele.getAttribute("href"))

// aele.className="c1"
// aele.classList.add("c2")
// aele.classList.remove("c2")
// aele.classList.toggle("c2")
// aele.classList.toggle("c2")


let cardele=document.createElement("div")
let imgele=document.createElement("img")
let btnele=document.createElement("button")
let pele=document.createElement("p")
let ratingele=document.createElement("p")
let priceele=document.createElement("p")

console.log(cardele)
cardele.appendChild(btnele)
cardele.append(imgele)
cardele.appendChild(pele)
cardele.appendChild(ratingele)
cardele.appendChild(priceele)

imgele.setAttribute("src","www.amazon.in")
imgele.setAttribute("alt","no-imag")
btnele.innerText="add"
pele.innerText="Eveready 12W"
ratingele.textContent="✨✨✨"
priceele.innerText="$455"
cardele.style.border="2px solid red"
cardele.style.width="200px"
cardele.style.height="200px"
cardele.style.padding="2rem"
cardele.style.background="pink"
document.body.appendChild(cardele)