const input1 = document.querySelector('.input1')
const btn1 = document.querySelector('.submit')

const input2 = document.querySelector('.input2')
const btn2 = document.querySelector('.check')

var data = []

btn1.addEventListener('click', () =>{
    data.push (input1.value)
})


btn2.addEventListener('click', () => {
    if (input2.value == data[0]) {
        document.body.style.backgroundColor = 'green'
    } else {
        document.body.style.backgroundColor = 'red'
    }
})