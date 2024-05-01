let btnClear = document.querySelector(".clear");
let btnSave = document.querySelector(".save");
let color = document.querySelector("#penColor");
let width = document.querySelector("#penWidth");
let canvas = document.querySelector("#c1");
let ctx = canvas.getContext("2d");
let pos = {
    "x": 0,
    "y": 0
};
ctx.lineWidth = 10;
ctx.strokeStyle = "yellow";
window.onload = () => {
    btnClear.addEventListener("click", () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
    btnSave.addEventListener("click", () => {
        let img = document.createElement("img");
        document.body.appendChild(img);
        let src = canvas.toDataURL();
        img.src = src;
    });
    color.addEventListener("change", () => {
        ctx.strokeStyle = event.target.value;
    });
    width.addEventListener("change", () => {
        ctx.lineWidth = event.target.value;
    })
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mousemove", setPosition);
    canvas.addEventListener("mouseenter", setPosition);
}
function setPosition(){
    pos.x = event.pageX;
    pos.y = event.pageY;
}
function draw(){
    if(event.buttons !== 1){
        return;
    }
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    setPosition();
    ctx.lineTo(pos.x, pos.y);
    ctx.lineCap = "round";
    ctx.stroke();
}