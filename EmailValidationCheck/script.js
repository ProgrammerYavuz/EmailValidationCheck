function kontrol(){
    let form = document.getElementById('form');
    let email = document.getElementById('email').value;
    let text = document.getElementById('text');
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    if(email.match(pattern)){
        form.classList.add('valid');
        form.classList.remove('invalid');
        text.innerHTML = "Mail adresi geçerlidir.";
        text.style.color = "#4caf50";
        text.style.borderTop = "2px solid #4caf50";
    }else{
        form.classList.remove('valid');
        form.classList.add('invalid');
        text.innerHTML = "Lütfen geçerli bir mail adresi giriniz.";
        text.style.color = "#f44336";
        text.style.borderTop = "2px solid #f44336";
    }

    if(email == ""){
        form.classList.remove('valid');
        form.classList.remove('invalid');
        text.innerHTML = "";
    }
}