const input1 = document.querySelector('.input1')
const btn1 = document.querySelector('.submit')

const input2 = document.querySelector('.input2')
const btn2 = document.querySelector('.check')

var data = []

btn1.addEventListener('click', () =>{
    data.push(input1.value)
})


btn2.addEventListener('click', () => {
    if (input2.value == data[0] || input2.value == data[1] || input2.value == data[2] || input2.value == data[3]|| input2.value == data[4] || input2.value == data[5] ||input2.value == data[6] ||input2.value == data[2] ||input2.value == data[7] ||input2.value == data[8] ||input2.value == data[9] ||input2.value == data[10] ||input2.value == data[11] ||input2.value == data[12] ||input2.value == data[13] ||input2.value == data[14] ||input2.value == data[15] ||input2.value == data[16] ||input2.value == data[17] ||input2.value == data[18] ||input2.value == data[19] ||input2.value == data[20] ||input2.value == data[21] ||input2.value == data[22] ||input2.value == data[23] ||input2.value == data[23] ||input2.value == data[24] ||input2.value == data[25] ||input2.value == data[26] ||input2.value == data[27] ||input2.value == data[28] ||input2.value == data[29] || input2.value == data[30]) {
        document.body.style.backgroundColor = 'green'
    } else {
        document.body.style.backgroundColor = 'red'
    }
})