let heading = document.getElementById("heading");
let btn1 = document.getElementById("button");

btn1.addEventListener("click", ()=>{
    console.log("i have been clicked");
    heading.textContent = "Welcome";
});

