

// Auth Guard
if (!localStorage.getItem("userData")) {
  window.location.href = "../Login/login.html";
}


document.addEventListener("DOMContentLoaded", () => {
  displayCart();
});

function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartContent = document.getElementById("cartContent");
  let totalPrice = document.getElementById("totalPrice");
  console.log(cart);
  console.log(cartContent);
  console.log(totalPrice);

  let totalBill=0;
  // if (cart.length === 0) {
  //   cartContent.innerHTML = "Your Cart is Empty Start Shopping....";
  // }
  if (cart.length === 0) {
  cartContent.innerHTML = `
    <div class="empty-cart">
      <div class="cart-icon">🛒</div>
      <h2>Your cart is empty</h2>
      <p>Looks like you haven’t added anything yet</p>
      <button onclick="goHome()">Start Shopping</button>
    </div>
  `;
  totalPrice.innerHTML = "";
  return;
}

  cart.map((product, i) => {
    totalBill += Math.floor(product.price * 90);
    console.log(product, i);
    let newProd = document.createElement("div");
    newProd.setAttribute("class", "prod-info");
    newProd.innerHTML = `
   <div id="container">
    <div id="imgContainer">
    <img src="${product.thumbnail}">
    </div>
    <div id="details">
    <h1>${product.title}</h1>
    <p><b>Brand</b>: ${product.brand}</p>
    <p>${product.description}</p>
    <p><b>&#8377</b>:${Math.floor((product.price)*90)}</p>
    </div>
    <div id="remove"><button onclick="RemoveFromCart(${i})">Remove</button></div>
   </div>

    `
    cartContent.append(newProd);
  });
  cartContent.innerHTML+=`
  <div id="price"><h2>Total Price :<b>&#8377</b>${totalBill}</h2>
  </div>
  `
  // console.log(totalBill);
  
}

function RemoveFromCart (index){
  // console.log(index,"removeCart");
  let cart = JSON.parse(localStorage.getItem("cart"));
  // console.log(cart);
  cart.splice(index,1)
  localStorage.setItem("cart",JSON.stringify(cart))
  // displayCart() // niche wala bhi same fn k use krta h
  location.reload();
  
}

function goHome() {
  window.location.href = "../Home/home.html"; // change if needed
}
