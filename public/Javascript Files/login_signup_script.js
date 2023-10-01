
//slider Sign in button
let signinbtn = document.querySelectorAll("#signin")[1];

//slider Sign up button
let signupbtn = document.querySelectorAll("#signup")[0];

//creating account (Sign up) button
let signupbtn_02 = document.querySelectorAll("#signup")[1];

//signing into account (Sign In) button

let signinbtn_02 = document.querySelectorAll("#signin")[0];



let signincontainer = document.getElementsByClassName("singin-container")[0]
let signupcontainer = document.getElementsByClassName("signup-container")[0]
let line = document.querySelector(".line");


signupbtn.addEventListener("click", (e) => {
    line.style.transform = "translateY(-100%)";
    signincontainer.style.transform = "translateY(200%)";
    signupcontainer.style.transform = "translateX(5%)";
    signinbtn.classList.add("signin-inactive")
    signinbtn.style.width = "55%";
    signupbtn_02.style.background = "white"
    signupbtn_02.style.color = "black"
    setTimeout(() => {
        line.style.transform = "translateY(0%)";
        line.style.left = "49%";
    }, 1000)

    setTimeout(() => {
        line.style.transform = "skewX(7deg)";
    }, 2000)
})



signinbtn.addEventListener("click", async (e) => {
    line.style.transform = "translateY(100%)";
    line.style.left = "50%";


    signupbtn_02.style.background = "transparent"
    signupbtn_02.style.color = "white"
    signinbtn.style.width = "90%";


    signincontainer.style.transform = "translateY(0%)";
    signupcontainer.style.transform = "translateX(-100%)";
    setTimeout(() => {
        line.style.transform = "translateY(0%)";
        signinbtn.classList.remove("signin-inactive")
    }, 1000)

    setTimeout(() => {
        line.style.transform = "skewX(7deg)";
    }, 2000)
})


signinbtn_02.addEventListener("click", (e)=>{
    alert("Sign in failed")
})


signupbtn_02.addEventListener("click", (e)=>{
    alert("Sign up failed")
})