// DIGITAL CLOCK VARIABLES
const clock = document.getElementById('clock')
const tarehe = document.getElementById('tarehe')
const weekDays = document.getElementById('weekDays')
const dayTime = document.getElementById('dayTime')

//ANALOGU CLOCK VARIABLES
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')


let timeFunc = ()=>{
    const date = new Date()

    /* DIGITAL CLOCK CODE */
    tarehe.textContent = date.toLocaleDateString('default',{month:'long', year:'numeric', day:'numeric'})
    clock.textContent = `${date.toLocaleTimeString()}`
    weekDays.children[date.getDay()].setAttribute('class', 'currentDay')

    /* ANALOGUE CLOCK CODE */
    second.style.transform = `rotate(${(date.getSeconds()/60*360-180)}deg)`
    minute.style.transform = `rotate(${(date.getMinutes()/60*360-180)}deg)`
    hour.style.transform = `rotate(${(date.getHours()/12*360-180)}deg)`

}




setInterval(timeFunc, 1000)





