
//  Auth Guard
if (!localStorage.getItem("userData")) {
  window.location.href = "../Login/login.html";
}


document.addEventListener("DOMContentLoaded",()=>{
    let productDetails=document.getElementById("productDetails");
    let allproducts=JSON.parse(localStorage.getItem("allproducts"));
    let productId = localStorage.getItem("productId");

if(allproducts && productId){
    let selectedProduct=allproducts.find((v)=>{
        return v.id==productId;
    })
    console.log(selectedProduct);
    if(selectedProduct){
        let reviewHTML ="";
        selectedProduct.reviews.map((review) => {
            reviewHTML+=`
            <div id="review_section">
            <p>${"❤️".repeat(review.rating)}${"🖤".repeat(5-review.rating)}</p>
            <p id="comment">${review.comment}</p>
            <p id="nam">By <strong>${review.reviewerName}</strong> on ${new Date(review.date)}</p>
            <hr>
            </div>
            `
        });

    //      <div id=review>
    //    <h1>Customer reviews </h1>
    //    <hr>
    //    ${selectedProduct.reviews.map((review)=>{
    //     <div id="ratings">${"❤️".repeat(review.rating)}${"🖤".repeat(5 -review.rating)}</div>
    //    })}
    //   //! ${reviewHTML}
    //   <p id="comment">${review.comment}</p>
    //   <p id="nam">By <strong>${review.reviewerName}</strong> on ${new Date(review.date)}</p>
    //   <hr>
    //    </div>
        productDetails.innerHTML=`
        <main>
        <header>
        <div id="image">
        <img src="${selectedProduct.thumbnail}"/>
        </div>
        <div id="details">
        <h2>${selectedProduct.title}</h2>
        <p>Brand: ${selectedProduct.brand}</p>
        <p>Category: ${selectedProduct.category}</p>
        <p>Description: ${selectedProduct.description}</p>
        <p>Price:&#8377 ${Math.round((selectedProduct.price)*90)}</p>
        <div id="Buttons">
        <button id="addToCart" >Add to Cart</button>&nbsp
        <button id="BackToHome" >Back to Home</button>
        </div>
        </div>
        </header>
        <section>
        <h1>Customer reviews </h1>
         ${reviewHTML}
         </section>
        </main>
        `
        document.getElementById("BackToHome").addEventListener("click",()=>{
            window.location.href="../Home/Home.html";
        });
        document.getElementById("addToCart").addEventListener("click",()=>{
            addToCart(selectedProduct);
        })
    }
    else{
        productDetails.innerHtml=`<p>Product Not Found </p>`
    }
    
}else{
    productDetails.innerHtml=`<p>Product Not Found..</p>`
}

})

function addToCart(product){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product)
    localStorage.setItem("cart",JSON.stringify(cart))
    alert("Product added Successfully...")
}

