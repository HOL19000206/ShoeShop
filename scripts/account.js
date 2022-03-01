document.addEventListener("DOMContentLoaded", function(){

    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const {name, email, phone, address} = userInfo;
    console.log(userInfo);

    document.getElementById("name").innerHTML = `Hi ${userInfo.name}`;
    document.getElementById("email").innerHTML = `<b>Email:<b> ${userInfo.email}`;
    document.getElementById("phone").innerHTML = `<b>Phone:<b> ${userInfo.phone}`;
    document.getElementById("address").innerHTML = `<b>Address:<b> ${userInfo.address}`;

})

function Logout(){
    alert("Logged Out!")
    localStorage.removeItem("userInfo");
    window.location.href="products.html";
}