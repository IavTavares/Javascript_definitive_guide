let cat_1 = document.querySelector("img");
let angle_1 = Math.PI / 2;
function animate(time, lastTime) {
    if (lastTime != null) {
        angle_1 += (time - lastTime) * 0.001;
    }
    cat_1.style.top = (Math.sin(angle_1) * 20) + "px";
    cat_1.style.left = (Math.cos(angle_1) * 200) + "px";
    requestAnimationFrame(newTime => animate(newTime, time));
}
requestAnimationFrame(animate);

// requestAnimationFrame(callback)
// The callback function is passed one single argument, 
// a DOMHighResTimeStamp similar to the one returned by performance.now(), 
// indicating the point in time when requestAnimationFrame() starts to 
// execute callback functions.

// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame


let cat_2 = document.getElementById("cat_2");
let angle = -Math.PI / 2;
cat_2.addEventListener("mousemove", run_away);
let exponent;
function run_away() {
    let random = Math.random();
    if (random>0.5){
        exponent = 1;
    } else {
        exponent = 2;
    }
    angle += (-1)**(exponent)*Math.random()*Math.PI;
    console.log("random = " + random)
    cat_2.style.top = (Math.sin(angle) * 200) + "px";
    cat_2.style.left = (Math.cos(angle) * 200) + "px";
}