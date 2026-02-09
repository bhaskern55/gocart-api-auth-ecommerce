document.getElementById("loginContainer").addEventListener("submit",function data(e){
    e.preventDefault(); // avoid reloading
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorBox = document.getElementById("loginError")
    
    // console.log(email);

    let userData = {
        email:email,
        password:password,
    };

//     console.log(userData);
// localStorage.setItem("userData",JSON.stringify(userData));
// alert("Registration Successful....")
// window.location.href="./login.html";

let storedData = JSON.parse(localStorage.getItem("userData"));
console.log(storedData);
console.log(email);
console.log(password);

if(!storedData)
{
    errorBox.textContent="No account found. Please register first."
    return;
}

if(storedData.email===email && storedData.password===password)
{
    alert("Login Successfull....")
    window.location.href="../Home/home.html"
}else
{
    alert("Enter valid Credentials...")
}

})