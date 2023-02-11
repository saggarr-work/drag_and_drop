const dragArea = document.querySelector(".appBody"),
dragText = dragArea.querySelector("h3"),
button = dragArea.querySelector("button"),
input = dragArea.querySelector("input");

let myFile;

button.onclick = () => { //arrow functioon
    input.click();
}
input.addEventListener("change", function(){
    myFile = this.files[0];
    dragArea.classList.add("active");
})
