let signinbtn = document.querySelectorAll("#signin")[1];
let signupbtn = document.getElementById("signup");
let signincontainer = document.getElementsByClassName("singin-container")[0]
let signupcontainer = document.getElementsByClassName("signup-container")[0]
let line = document.querySelector(".line");
console.log(signinbtn);


signupbtn.addEventListener("click", (e) => {
    line.style.transform = "translateY(-100%)";
    signincontainer.style.transform = "translateY(200%)";
    signupcontainer.style.transform = "translateX(5%)";

    setTimeout(() => {
        line.style.transform = "translateY(0%)";
    }, 2000)

    setTimeout(() => {
        line.style.transform = "skewX(7deg)";
    }, 3000)
})



signinbtn.addEventListener("click", async (e) => {
   line.style.transform = "translateY(100%)";   
   

    signincontainer.style.transform = "translateY(0%)";
    signupcontainer.style.transform = "translateX(-100%)";
    setTimeout(() => {
        line.style.transform = "translateY(0%)";
    }, 2000)

    setTimeout(() => {
        line.style.transform = "skewX(7deg)";
    }, 3000)
})