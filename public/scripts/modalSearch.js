//variáveis modal Busca
const buttonSeach = document.querySelector('#search img')
const modal = document.querySelector('#modal')
let showSearch = true

//funcao de evento Modal click
buttonSeach.addEventListener("click",() =>{
    
    if(showSearch == true){
        modal.classList.remove("hide")
        showSearch = false
    }else{
        modal.classList.add("hide")
        showSearch = true
    }
})



