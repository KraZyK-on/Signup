function validate(){
    var password=document.getElementById("password").value;
    var email=document.getElementById("email").value;
    var password_val = /^[A-Za-z]+$/;
    var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (email=='' && password=='') {
        alert('Please enter details')
    }
    else if(!email_val.test(email)){
        alert('Please enter valid format')
    }
    else if(!password_val.test(password)){
        alert('Please enter valid password')
    }
    else{
        window.location.href="https://login-three-tawny.vercel.app/"
    }
}
