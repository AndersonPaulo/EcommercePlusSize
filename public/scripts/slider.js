let interval = 0
let maxSlider = document.querySelectorAll('.box-img').length-1

function Slider(){

    const img = document.querySelectorAll('.box-img img')
    const input = document.querySelectorAll('#home-page main .slider ul li input')
    const label = document.querySelectorAll('#home-page main .slider ul label')
    const listImage =  document.querySelector('.slider ul')

    let  SlideInterval = setInterval(function(){

        img[interval].style.display = 'none'
        input[interval].checked = false
        label[interval].style.backgroundColor ='blueviolet'
        interval++
        if(interval > maxSlider){
            interval = 0
            
        }
        img[interval].style.display = 'block'
        input[interval].checked = true
        label[interval].style.backgroundColor ='deeppink'    
    

},2000)

    listImage.addEventListener("mouseenter",(Event)=>{
        clearInterval(SlideInterval)
    })

    listImage.addEventListener("mouseleave",(Event)=>{

        SlideInterval = setInterval(function(){

            img[interval].style.display = 'none'
            input[interval].checked = false
            label[interval].style.backgroundColor ='blueviolet'
            interval++
            if(interval > maxSlider){
                interval = 0
                
            }
            img[interval].style.display = 'block'
            input[interval].checked = true
            label[interval].style.backgroundColor ='deeppink'    
        
    
    },2000)

    })
}

Slider()

