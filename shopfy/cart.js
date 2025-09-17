// loading all items from local storage when user clicks the cart icons
document.addEventListener("DOMContentLoaded",()=>{
loadCartItems() //calling the function
})

let cartItems=[]
function loadCartItems(){
    let cartvalues=localStorage.getItem("cart")
    if(cartvalues){
        cartItems=JSON.parse(cartvalues)
        cartIconTotal()// loading the carticon value when browser is reopened
         handleCartUi()
    }
}

// 🐴3.function to print the cart_icon _total 
function cartIconTotal(){
    let cartVal=document.querySelector(".cart-value")
    let icontotal=cartItems.reduce((total,ele)=>total+ele.quantity,0)
    cartVal.textContent=icontotal
}

// Print the Loaded items into cart Ui (function to handlecartui)
function handleCartUi(){
    let cartproducts=document.querySelector('.cart-items')
    console.log(cartproducts)
    cartproducts.innerHTML=''
    // looping the array items
    cartItems.forEach((prod)=>{
        // dynamic creation of cards
        let product=document.createElement("div")
        product.className="col-sm-12 col-md-4 col-lg-4"
        console.log(product)
        product.innerHTML=` <div class="card product" >
             <img src=${prod.imgUrl} class="card-img-top product-img" alt="..." width="100%" height="100px">
                <div class="card-body product-info">
                    <h5 class="card-title product-title">${prod.title}</h5>
                    <p class="card-text product-description">${prod.description}</p>
                    <p class="card-text product-price">${prod.price}</p>
                    <div class="quantity-container">
                    <button class="btn btn-outline-success incre-btn">+</button>
                    <span class="quantity">${prod.quantity}</span>
                    <button class="btn btn-outline-success decre-btn">-</button>
                    <button class="btn btn-outline-success delete-btn">delete</button>
                    </div>
                </div>
          </div>`

        //   accessing the elements
          let increBtn=product.querySelector('.incre-btn')
          let decreBtn=product.querySelector('.decre-btn')
          let quantityval=product.querySelector('.quantity')
          let deleteBtn=product.querySelector('.delete-btn')

        //   applying the functionalities to all btn
        increBtn.addEventListener("click",()=>{
            handleIncrement(prod,quantityval)
        })
         decreBtn.addEventListener("click",()=>{
             handleDecrement(prod,quantityval)
        })
         deleteBtn.addEventListener("click",()=>{
            handleDelete(prod)
        })





        //   appending the product into document
        cartproducts.appendChild(product)
    })
}

// function to handle_increment Quantity
function handleIncrement(product,quantity){
 console.log(product,quantity)
 let increval=product.quantity++
 quantity.textContent=increval
 localStorage.setItem("cart",JSON.stringify(cartItems))
}
// function to handle_decrement Quantity
function handleDecrement(product,quantity){
 console.log(product,quantity)
}
// function to handle_delete Quantity
function handleDelete(product){
 console.log(product)

}
// function to Removeall Quantity
// function to cart_total
// function to cart_icon total 