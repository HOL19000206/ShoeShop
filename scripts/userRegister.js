function Register(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password1").value;
    const confirmpassword = document.getElementById("password2").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    console.log(name,email,password,phone,address);

    if (name === "" || phone === "" || email === "" || address === "" || password === ""){
        if(name === ""){
            document.getElementById("nameError").innerHTML = "You must enter a valid Name";
        }
        if(phone === ""){
            document.getElementById("phoneError").innerHTML = "You must enter a valid Phone Number";
        }
        if(address === ""){
            document.getElementById("addressError").innerHTML = "You must enter a valid PostCode";
        }
        if(password === ""){
            document.getElementById("passError").innerHTML = "You must enter a valid Password";
        }
    }

    else if(password != confirmpassword){
        document.getElementById("matchError").innerHTML = "Passwords do not match!";
    }
    else{
         var user = {
             name:name,
             email:email,
             password:password,
             address:address,
             phone:phone
         }

        localStorage.setItem("userInfo", JSON.stringify(user));

        window.location.href="products.html";
    }
}

