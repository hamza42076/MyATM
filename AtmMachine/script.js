
let initalAmount = 20000;

let addAmountBtn =  document.querySelector("#addAmount")
let Withdrawbtn =  document.querySelector("#Withdraw")
let showbalance = document.querySelector("#showBalance")

let depositAmount = ()=>{
  let inputValue = Number(document.querySelector("#Inputvalue").value); // ✅ convert to number
    initalAmount +=inputValue;
     document.querySelector("#Inputvalue").value = "";
    console.log(initalAmount);
}
addAmountBtn.addEventListener("click",depositAmount)

let showBalance = document.querySelector("#showBalance");
let showAmount = document.querySelector("#showAmount");
let showAmountBalance =()=>{
    showBalance.innerText = initalAmount;
}
    
showAmount.addEventListener("click",showAmountBalance)

let WithdrawAmount = ()=>{
  let inputValue = Number(document.querySelector("#Inputvalue").value); // ✅ convert to number
  if(inputValue > initalAmount){
    alert("tumhare acount m itny paise nh h kindly check your balnce and withdraw about ur account")

  }
    initalAmount -=inputValue;
    document.querySelector("#Inputvalue").value = "";
    console.log(initalAmount);
}


let checkBalance = () => {
  showbalance.innerText = initalAmount;
};
Withdrawbtn.addEventListener("click",WithdrawAmount)