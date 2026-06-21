let boxRed = document.querySelector(".boxRed");
let boxBlue = document.querySelector(".boxBlue");
let button = document.querySelector("#button1");
let counter = 0;
button.addEventListener("click", () => {
    if(counter % 2 == 0){
        button.innerText = "Switch AntiClockWise";
        boxRed.style.transition = "rotate 10s ease";
        boxRed.style.rotate = "3600deg";
        boxBlue.style.transition = "rotate 10s ease";
        boxBlue.style.rotate = "3600deg";
    }
    else{
        button.innerText = "Switch ClockWise";
        boxRed.style.transition = "rotate 10s ease";
        boxRed.style.rotate = "-3600deg";
        boxBlue.style.transition = "rotate 10s ease";
        boxBlue.style.rotate = "-3600deg";
    }
    counter = counter + 1;
    console.log(counter);
});