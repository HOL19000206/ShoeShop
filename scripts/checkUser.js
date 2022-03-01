document.addEventListener("DOMContentLoaded", function(){
    const userInfo = localStorage.getItem('userInfo');

    

    if(userInfo){
        document.getElementById("account-btn").innerHTML = "My Account!";
        document.getElementById("account-btn").addEventListener("click", function(){
            window.location.href = "account.html";
        })
    }

    else{
        document.getElementById("account-btn").innerHTML = "Register!";
        document.getElementById("account-btn").addEventListener("click", function(){
            window.location.href = "register.html";
        })
    }
})