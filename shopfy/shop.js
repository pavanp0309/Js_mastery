// 🐴1.loading all the Items into browser when browser is loaded
document.addEventListener("DOMContentLoaded",()=>{

    // 🦄loading all buttons to js when browser is loaded to add functionalities
   let addtocartbtns=document.querySelectorAll(".addtocart-btn")
//    console.log("btn",addtocartbtns) // nodelistofarray values

    // 👽 loading the cart_icon when browser is loaded 
    let cartIconbtn=document.querySelector(".cart-icon")
    console.log(cartIconbtn)

   //🐯applying the functionalities to each button 
   addtocartbtns.forEach((btn)=>{
    // console.log("b",btn)
    btn.addEventListener("click",(e)=>{
        //  console.log(e.target.parentElement.parentElement)
         let productinfo=e.target.parentElement.parentElement
         let imageUrl=productinfo.querySelector(".product-img").src
         let ptitle=productinfo.querySelector(".product-title").innerText
         let pdescription=productinfo.querySelector(".product-description").innerText
         let pprice=productinfo.querySelector(".product-price").innerText
        //  console.log({imageUrl,pprice,ptitle,pdescription})
        let selectedprod={
            title:ptitle,
            description:pdescription,
            price:pprice,
            imgUrl:imageUrl,
            quantity:1
        }
        // passing the selected item to cart
         addtocart(selectedprod)
    })
   })

//   🎭 Applying functionalities to cart_icon button
      cartIconbtn.addEventListener("click",()=>{
        return window.location.href="cart.html"
      })
}

)

// assuming an array the user added items
let cartItems=[]

// 🐴2.function to add items to the cart
function addtocart(additems){
    // check weather items exists in the cart or not and add if items are present esle quantity
 let existingItem=cartItems.find((items)=>items.title==additems.title)
 console.log(existingItem)
 if(existingItem){
    existingItem.quantity++
 }else{
    cartItems.push(additems)
 }
 localStorage.setItem("cart",JSON.stringify(cartItems))
 cartIconTotal()
}

// 🐴3.function to print the cart_icon _total 
function cartIconTotal(){
    let cartVal=document.querySelector(".cart-value")
    let icontotal=cartItems.reduce((total,ele)=>total+ele.quantity,0)
    cartVal.textContent=icontotal
}
// 🐴4.function to rember &  load items form local_storage  when browse is closed 
function loadCartItems(){
    let cartvalues=localStorage.getItem("cart")
    if(cartvalues){
        cartItems=JSON.parse(cartvalues)
        cartIconTotal()// loading the carticon value when browser is reopened
    }
}
loadCartItems()

// BOM 
// console.log(window.localStorage)
// setItem: ƒ setItem() : create/update method
// getItem: ƒ getItem() : Read method
// removeItem: ƒ removeItem() : delete method
// clear :ƒ clear()  : removes all items form storage 
// max-limit :5-10mb 

// creating the data
// localStorage.setItem("name",true)
// localStorage.setItem("name1","raju")
// localStorage.setItem("name2",123)
// localStorage.setItem("name3",JSON.stringify({name:"ramu"}))

// //  json :javascript object notation
// // {name:"raju"}--> {"name":"raju"}
// // to read the data
// let res=JSON.parse(localStorage.getItem("name3"))
// console.log( res)