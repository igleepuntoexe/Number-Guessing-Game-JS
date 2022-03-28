document.addEventListener("DOMContentLoaded", start)

function start(){
    let btnSocial = document.getElementById("socialNetwork")
    btnSocial.addEventListener("click", changeText)
}

function changeText(){
    let githubText = document.getElementById("github")
    githubText.innerHTML = "Gitbub"
    githubText.setAttribute("href","https://github.com/igleepuntoexe")
    let instaText = document.getElementById("insta")
    instaText.innerHTML = "Instagram"
    instaText.setAttribute("href", "https://www.instagram.com/igle.exe/")
    let twitterText = document.getElementById("twitter")
    twitterText.innerHTML = "Twitter"
    twitterText.setAttribute("href","https://twitter.com/igleepuntoexe")
}