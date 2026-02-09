document.getElementById("formContainer").addEventListener("submit",function data(e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let mobile = document.getElementById("mobile").value;

    let errorMail=document.getElementById("errorMail");

    let emailPattern =/^[^\$@]+@[^\$@]+\.[^\$@]+$/;
    // let passwordPattern=/(?=[A-Z])(?=*)[a-z](?=*[0-9])(?=)/
    if(!emailPattern.test(email)){
        // alert("Enter valid email");
        errorMail.textContent="Invalid Email";
        return;
    }

    console.log(name);
    console.log(email);

    let userData = {
        name:name,
        email:email,
        mobile:mobile,
        password:password,
    };

    console.log(userData);
localStorage.setItem("userData",JSON.stringify(userData));
alert("Registration Successful....")
window.location.href="../Login/login.html";

})

