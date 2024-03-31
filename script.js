const button = document.getElementById("submit")
const wrapper = document.getElementById("container1")
const new_wrapper = document.getElementById("new_wrapper")

button.addEventListener("click",()=>{
    wrapper.style.display = "none"
    new_wrapper.style.display = "block"
})
