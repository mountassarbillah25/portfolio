const first_scrollLink = document.getElementById('home')
const first_target = document.getElementById("container")
const contactbutton = document.getElementById("contactme")

first_scrollLink.addEventListener('click',(event)=>{
    event.preventDefault();
    const scrollposition = first_target.offsetTop - 200
    window.scrollTo({
        top: scrollposition,
        behavior: 'smooth'
    })
})



const second_scrollLink = document.getElementById('aboutme')
const second_target = document.getElementById("about")

second_scrollLink.addEventListener('click',(event)=>{
    event.preventDefault();
    const scrollposition = second_target.offsetTop - 200
    window.scrollTo({
        top: scrollposition,
        behavior: 'smooth'
    })
})




const third_scrollLink = document.getElementById('servicees')
const third_target = document.getElementById("services")

third_scrollLink.addEventListener('click',(event)=>{
    event.preventDefault();
    const scrollposition = third_target.offsetTop - 100
    window.scrollTo({
        top: scrollposition,
        behavior: 'smooth'
    })
})




const fourth_scrollLink = document.getElementById('contacte')
const fourth_target = document.getElementById("contact")

fourth_scrollLink.addEventListener('click',(event)=>{
    event.preventDefault();
    const scrollposition = fourth_target.offsetTop - 90
    window.scrollTo({
        top: scrollposition,
        behavior: 'smooth'
    })
})



contactbutton.addEventListener('click',(event)=>{
    event.preventDefault();
    const scrollposition = fourth_target.offsetTop - 90
    window.scrollTo({
        top: scrollposition,
        behavior: 'smooth'
    })
})