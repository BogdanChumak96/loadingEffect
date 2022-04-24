let count = document.querySelector('.loading-text')
let bg = document.querySelector('.bg')

let i = 0

bg.style.filter = `blur(${100}px)`
setInterval(changeBlur, 60)

function changeBlur() {
    if (i < 100) {
        bg.style.filter = `blur(${100-i}px)`
        count.style.opacity = `${100-i}%`
        count.innerText = `${i} %`
        i++
    } else {
        // i = 100
        bg.style.filter = `blur(${0}px)`
        count.style.opacity = `${i}%`
        count.innerText = `${i} %`
        count.remove()
    }
}