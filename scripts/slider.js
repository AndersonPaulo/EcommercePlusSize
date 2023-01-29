//variáveis para o slider
let interval = 0
let maxSlider = document.querySelectorAll('.box-img').length-1

//funcao Slider
function Slider(){
    let img = document.querySelectorAll('.box-img img')
    let input = document.querySelectorAll('#home-page main .slider ul li input')
    setInterval(function(){

        img[interval].style.display = 'none'
        input[interval].checked = false
        interval++
        if(interval > maxSlider){
            interval = 0
            
        }
        img[interval].style.display = 'block'
        input[interval].checked = true
     
    

},3000)
}

Slider()

