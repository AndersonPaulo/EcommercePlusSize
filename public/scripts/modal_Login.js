const buttonLogin = document.querySelector('#login img')
const modal_login = document.querySelector('#modal_form_login')
let showLogin =  true
//funcao de evento Modal click
buttonLogin.addEventListener("click",() =>{
    if(showLogin==true){
     modal_login.classList.remove("hide")
     showLogin = false
    }else{
        modal_login.classList.add("hide")
        showLogin = true
    }
})

