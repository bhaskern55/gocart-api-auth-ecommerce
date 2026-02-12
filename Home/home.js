
// Authera Guard 
if (!localStorage.getItem("userData")) {
  window.location.href = "../Login/login.html";
}



let product =[];

// document.addEventListener("DOMContentLoaded",()=>{
//     const user=localStorage.getItem("userData");
//     if(!user){
//         window.location.replace("../Login/login.html");
//         return;
//     }
//     fetchData();
// })

function fetchData() {
    fetch("https://dummyjson.com/products").then((res)=>{
        return res.json();
    }).then((val)=>{
        console.log(val.products);
        product = val.products;
        localStorage.setItem("allproducts",JSON.stringify(product))
        displayProduct(product);
    })
}
fetchData();

function displayProduct(prod){
    let output =""
    prod.map((val)=>{
        output +=`
        <main>
        <div id="image">
         <img src="${val.thumbnail}" onclick="details(${val.id})" style="cursor:pointer"/>
        </div>
        <div id="d_container">
         <h3>${val.price}</h3>
        <h4>${val.title}</h4>
        <div id="ratingBox">
        <p>Rating:${val.rating}</p>
        <p>&#8377:${Math.round((val.price)*90)}</p>
        </div>
        <div id="detailBox">
        <p id="instock">Instock:${val.stock}</p>
        <button onclick="details(${val.id})" id="details">Details</button>
        </div>
        </div>
        </main>`
    })
    document.getElementById("productContainer").innerHTML=output;
}   
fetchData()
document.getElementById("searchbar")
.addEventListener("input",function searchItem(event){
    let searchTerm = event.target.value.toLowerCase();
    let filterProduct = product.filter((v)=>{
        return (v.title.toLowerCase().includes(searchTerm) || v.category.toLowerCase().includes(searchTerm));
    })
    displayProduct(filterProduct);
})

function details(productId){
    console.log(productId);
    localStorage.setItem("productId",productId);
    window.location.href="../ViewDetails/viewDetails.html"
}

function logout(){
    // localStorage.removeItem("userData");
    window.location.href="../Login/login.html";
}


// Toggle dropdown
document.getElementById("accountBtn").addEventListener("click", () => {
  document.getElementById("accountDropdown").classList.toggle("hidden");
});


// Delete account permanently
function deleteAccount() {
  const confirmDelete = confirm(
    "This will permanently delete your account. Are you sure?"
  );

  if (confirmDelete) {
    localStorage.removeItem("userData"); // delete account
    alert("Account deleted successfully");
    window.location.href = "../Registration/registration.html";
  }
}
