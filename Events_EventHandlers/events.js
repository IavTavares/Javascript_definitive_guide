
window.addEventListener("click", () => {
    console.log("You clicked the page");
    });

// this function will be passed as handler
function myFunction() {
    let x = document.getElementsByClassName("city");
    for (let i = 0; i < x.length; i++) {
        if(x[i].style.display == "none"){
            x[i].style.display = "block"
        }else{
            x[i].style.display = "none"
        };
    }
};
const button_list = document.getElementsByTagName("button");
for (let button of button_list) {
    button.addEventListener("click", () => {
        console.log("For any button.");
    });
}

// this won't need 
let button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log("querySelector returns only the first matched element");
});

let btn2 = document.querySelector(".button2"); // notice the dot .
btn2.addEventListener("click", () => {
    console.log("For button 2 was clicked (only).");
});
btn2.addEventListener("click", myFunction);