const nme = document.getElementById('name')
const desc = document.getElementById('desc')

const sec = document.getElementById('secs')

let targetTime = 0;

function time() {

    let name = nme.value

    if (nme.value == "") {

        nme.placeholder = 'enter name'

    } else {
        nme.value = ` till ${name} dies`
        nme.disabled = 'true'
        targetTime = new Date().getTime() + 40*1000
        setInterval(hik,1000)
    }
}

function hik() {
    let currTime = new Date().getTime()

    if (targetTime > currTime) {
        console.log ('yo')
        rem = Math.floor((targetTime - currTime) / 1000)
        sec.innerText = rem
    } else {
        nme.value = ``
        desc.value = ''
        nme.disabled = ''
        clearInterval()
    }
}