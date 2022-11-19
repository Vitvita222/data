//inputs
const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const input3 = document.querySelector('.input3')
const input4 = document.querySelector('.input4')



// buttons
const btn1 = document.querySelector('.submit')
const btn2 = document.querySelector('.check')

var data = []

btn1.addEventListener('click', () =>{
    data.push(input1.value)
    data.push(input2.value)
    alert("Saved!!")
})


btn2.addEventListener('click', () => {
    if (input3.value == data[0] && input4.value == data[1] || input3.value == data[2] && input4.value == data[3] || input3.value == data[4] && input4.value == data[5] || input3.value == data[6] && input4.value == data[7] || input3.value == data[8] && input4.value == data[9] ||input3.value == data[10] && input4.value == data[11] ||input3.value == data[12] && input4.value == data[13] ||input3.value == data[14] && input4.value == data[15] ||input3.value == data[16] && input4.value == data[17] ||input3.value == data[18] && input4.value == data[19] ||input3.value == data[20] && input4.value == data[21] ||input3.value == data[22] && input4.value == data[23] ||input3.value == data[24] && input4.value == data[25] ||input3.value == data[26] && input4.value == data[27] ||input3.value == data[28] && input4.value == data[29] ||input3.value == data[30] && input4.value == data[31]){
        alert("Logged In")
    } else {
        alert("This Account Doesn't Exist")
    }
})
