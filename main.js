
let number = parseInt(document.getElementById('count').textContent)


subNum = () => {
    let userInput = parseInt(document.getElementById('input').value)
    number -= userInput
    document.getElementById('count').textContent = number
    turnRed()
}

addNum = () => {
    let userInput = parseInt(document.getElementById('input').value)
    number += userInput
    document.getElementById('count').textContent = number
    turnRed()
}

//style text red if < 0
turnRed = () => {
    if (number < 0) {
        document.getElementById('count').style.color = 'red'
    }
    else {
        document.getElementById('count').style.color = 'black'
    }
}

document.getElementById('add').addEventListener('click', addNum)
document.getElementById('sub').addEventListener('click', subNum)