const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

// nav.addEventListener('click',()=>{
//     nav.classList.toggle('active')
// })


nav.addEventListener('click',()=>
    nav.classList.toggle('active'))
    
    
    
    setInterval(
        ()=>{nav.classList.remove('active')},
        7000)
 