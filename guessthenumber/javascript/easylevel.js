document.addEventListener("DOMContentLoaded", guess)
let random = Math.floor(Math.random(1,10)*10);

function guess(){
    let btnComprove = document.getElementById("comprove")
    btnComprove.addEventListener("click", play)
}

function play(){
    let num = document.getElementById("inputnum").value

    if (num <= 10){    
        if (num > random){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerText = "The Number is Lower"
            document.getElementById("inputnum").value = ""
        }
        
        if(num < random){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerText = "The Number is Higher"
            document.getElementById("inputnum").value = ""
        }
                
        if(num == random){
            document.getElementById("result").style.color = "green"
            document.getElementById("result").innerText = "You got it!"
            document.getElementById("inputnum").readOnly = true
        }

    }else if(num > 10 && num <= 50){
        document.getElementById("result").style.color = "red"
        document.getElementById("result").innerText = "That number is not valid for this level. Better go to the Middle Level"
        document.getElementById("inputnum").value = ""
    }else if(num > 50){
        document.getElementById("result").style.color = "red"
        document.getElementById("result").innerText = "That number is not valid for this level. Better go to the Hard Level"
        document.getElementById("inputnum").value = ""
    }else if(isNaN(num)){
        document.getElementById("result").style.color = "red"
        document.getElementById("result").innerText = "Only Numbers"
        document.getElementById("inputnum").value = ""
    }
}
