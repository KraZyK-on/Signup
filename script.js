function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    var email=document.getElementById("email").value;

    if (username=="/^[a-zA-Z0-9]+$/" && email=="/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/" && password=="/^[a-zA-Z0-9]+$/"){
        window.location.href("https://login-three-tawny.vercel.app/")
    }
    else{
        alert("Invalid format");
    }
}
