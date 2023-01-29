//variáveis modal Busca
const buttonSeach = document.querySelector('#search img')
const modal = document.querySelector('#modal')
const close = document.querySelector('#modal a')

//funcao de evento Modal click
buttonSeach.addEventListener("click",() =>{
    modal.classList.remove("hide")
})

close.addEventListener("click",() =>{

    modal.classList.add("hide")
})
