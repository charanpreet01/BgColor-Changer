const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const body = document.querySelector("body");
const h2 = document.querySelector("h2");

let colorCode = "";

const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    console.log(color);
    colorCode = color;

    return color;
}

let changeMe;

start.addEventListener("click", () => {
    changeMe = setInterval(() => {
        body.style.backgroundColor = randomColor();
        h2.innerHTML = colorCode;
        h2.style.display="block";
    }, 1000);
    start.setAttribute("disabled", "");
})

stop.addEventListener("click", () => {
    clearInterval(changeMe);
    start.removeAttribute("disabled");
})