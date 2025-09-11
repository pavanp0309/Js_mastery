let parentele=document.querySelector(".list")
console.log(parentele)// ul

// creating the Li Element
let liItem=document.createElement("li");
let icon=document.createElement("span")
// inserting the Text inside it 
liItem.innerText="list-item-4"
icon.textContent="💀💀"
// add the styles 
liItem.style.color="red"
liItem.style.background="gold"
liItem.style.padding="1.2rem"
// adding the attributes (id,class)
liItem.setAttribute("id","id1")
liItem.classList.add("c2")

// adding the child to list
liItem.appendChild(icon)
console.log(liItem)


// append and appendChild : adds the elements to the last
// parentele.append("last element")
// parentele.append(liItem)
// parentele.appendChild("last element") //Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
// parentele.appendChild(liItem)

// prepand 
// parentele.prepend("first ele")
// parentele.prepend(liItem)


// insertBefore
parentele.insertBefore(liItem,parentele.firstElementChild.nextElementSibling)
parentele.insertBefore(liItem,parentele.lastElementChild)

// insertAdjacentHtml
parentele.insertAdjacentHTML("afterbegin","<p>after begin</p>")
parentele.insertAdjacentHTML("beforebegin","before the element as started")
parentele.insertAdjacentHTML("beforeend","before the element as end")
parentele.insertAdjacentHTML("afterend","after the element as end")


// replaceWith 
let newp=document.createElement("p")
newp.textContent="hello"
// parentele.replaceWith(newp)
// parentele.replaceWith("hii")

// Removechild 
parentele.removeChild(parentele.firstElementChild.nextElementSibling)


