document.addEventListener("DOMContentLoaded", guess)
let random = Math.floor(Math.random(1,100)*100);

function guess(){
    let btnComprove = document.getElementById("comprove")
    btnComprove.addEventListener("click", play)
}

function play(){
    let num = document.getElementById("inputnum").value
    if (num <= 100){
            
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
    }else if(num > 100){
        document.getElementById("result").style.color = "red"
        document.getElementById("result").innerText = "The number exceeds the limit"
        document.getElementById("inputnum").value = ""
    }else if(isNaN(num)){
        document.getElementById("result").style.color = "red"
        document.getElementById("result").innerText = "Only Numbers"
        document.getElementById("inputnum").value = ""
    }
}
