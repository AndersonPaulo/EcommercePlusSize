const button_Shooping = document.querySelector('#shopping img')
const modal_Shooping = document.querySelector('#modal_shopping')

let show = true
button_Shooping.addEventListener("click",() =>{
    if(show==true){
        modal_Shooping.classList.remove("hide")
        show =false
    }
    else{
        modal_Shooping.classList.add("hide")
        show = true
    }

})

