let result = document.getElementById('result')
let submit = document.getElementById('submit')

function octalNumber(e){
    e.preventDefault()

    let inputBox = document.getElementById('number1').value
    if(inputBox === ''){
        alert("please Provide A number!")
    }else if(inputBox < 0){
        alert("Please Give a positive number")
    }else{
        result.style.visibility = 'visible'
    }

    //convertOctal
    octal = Number(inputBox).toString(8)
    result.innerHTML = octal
     
}
submit.addEventListener('click',octalNumber)
