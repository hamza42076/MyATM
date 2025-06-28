let password = 1340;
let submitBtn = document.querySelector("#submitBtn")

let checkPassword = ()=>{
    let passwordInp = Number(document.querySelector("#passwordInp").value);
    if (password === passwordInp) {
       window.location.replace("../AtmMachine/index.html");
    }
    else{
        alert("Enter the correct password")
    }

}
submitBtn.addEventListener("click",checkPassword)