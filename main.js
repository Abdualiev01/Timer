const hourEl = document.querySelector('.hour');
const minEl = document.querySelector('.minute');
const secEl = document.querySelector('.second');
const milliSecondEl = document.querySelector('.millisecond');


const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')
const newButton = document.querySelector('.result')


start.addEventListener('click', () => { 
    clearInterval(interval)
    interval = setInterval(startTime, 10)
    disabled = false
})

stop.addEventListener('click', () => {
    clearInterval(interval)
    
})

reset.addEventListener('click', ()=>{
    clearInterval(interval)
    res()
})

newButton.addEventListener('click',()=>{
    clearInterval(interval)
    const results = document.querySelector('.results')
    const block = document.createElement('div')
    block.innerText = `Result: ${hour}:${minute}:${second}:${millisecond}`
    results.append(block)
    res()
    clearInterval(interval)
    interval = setInterval(startTime, 10)
})

let hour = 00,
    minute = 00,
    second = 00,
    millisecond = 00,
    interval,
    disabled = true

function startTime() {
    millisecond++

    if (millisecond < 9) {
        milliSecondEl.innerText = "0" + millisecond
    }
    if (millisecond > 9) {
        milliSecondEl.innerText = millisecond
    }
    if (millisecond > 99) {
        second++
        secEl.innerText = "0" + second
        millisecond = 0
        milliSecondEl.innerText = "0" + millisecond
    }

    //

    if (second < 9) {
        secEl.innerText = "0" + second
    }

    if (second > 9) {
        secEl.innerText = second
    }
    if (second > 60) {
        minute++
        minEl.innerText = "0" + minute 
        second = 0
        secEl.innerText = "0"+second       
    }

    //

    if (minEl > 9) {
        minEl.innerText = minute
    }

    if (minute > 60) {
        hour++
        minEl.innerText = "0" + minute 
        minute = 0
        minEl.innerText = "0"+minute       
    }

    //
    if (hourEl > 9) {
        hourEl.innerText = hour
    }

    newButton.disabled = false
}

function res(params) {
    hour = 00,
    minute = 00,
    second = 00,
    millisecond = 00,
    hourEl.textContent = "0",
    minEl.textContent = "0",
    secEl.textContent = "0",
    milliSecondEl.textContent = "0"
}

function disabledBtn() {
    if (disabled) { 
       newButton.disabled = true 
    }
}

disabledBtn()
