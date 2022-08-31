let mouthbtn =document.querySelector('.mouthbtn')
let eyebtn =document.querySelector('.eyebtn')
let nosebtn =document.querySelector('.nosebtn')
let eyeimg = document.querySelectorAll('.eye')
let noseimg = document.querySelector('.nose')
let mouthimg = document.querySelector('.mouth')

let noses= [
    {src:'src/img/nose-1.png'},
    {src:'src/img/nose-2.png'},
    {src:'src/img/nose-3.png'},
    {src:'src/img/nose-4.png'},
    {src:'src/img/nose-5.png'},
    {src:'src/img/nose-6.png'},
    {src:'src/img/nose-7.png'}
]

let eyes=[
    {src:'src/img/eye-1.png'},
    {src:'src/img/eye-2.png'},
    {src:'src/img/eye-3.png'},
    {src:'src/img/eye-4.png'}
]

let mouths= [    
    {src:'src/img/mouth-1.png'},
    {src:'src/img/mouth-2.png'},
    {src:'src/img/mouth-3.png'},
    {src:'src/img/mouth-4.png'},
    {src:'src/img/mouth-5.png'},
    {src:'src/img/mouth-6.png'},
    {src:'src/img/mouth-7.png'},
    {src:'src/img/mouth-8.png'}
]

let index=0

mouthbtn.addEventListener('click', ()=> {

    if(index>=8){
           
        index=0
        
    }else if(index<9){

        mouthimg.src=mouths[index].src
        index++
    }
})

eyebtn.addEventListener('click', ()=>{

    if(index>=4){
            
        index=0
        
    }else if(index<5){

        eyeimg.forEach( (eye)=>{
            
            eye.src=eyes[index].src
        } )
        index++
    }
})

nosebtn.addEventListener('click', ()=>{

    if(index>=7){
            
        index=0
        
    }else if(index<8){

        noseimg.src=noses[index].src
        index++
    }
})
