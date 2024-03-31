const button = document.getElementById("submit")
const wrapper = document.getElementById("container1")
const new_wrapper = document.getElementById("new_wrapper")
<<<<<<< HEAD
const input = document.getElementById("input")
button.addEventListener("click",()=>{
    if(input.value.length!=0){
        let flag = 0
        for(let i = 0; i < input.value.length;i++){
            if(input.value[i] == '0'|| input.value[i] =='1')
                continue;
            else{
                flag = 1;
                break;
            }
        }
        if (flag == 0){
        // if(input.value)
        wrapper.style.display = "none"
        new_wrapper.style.display = "block"
    }
}
=======

button.addEventListener("click",()=>{
    wrapper.style.display = "none"
    new_wrapper.style.display = "block"
>>>>>>> 64324246858c9ca3aa928fd6d1381b5e2d8404c8
})
