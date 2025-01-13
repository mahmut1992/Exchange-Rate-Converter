import { Currency } from "./currenjy.js";
const amountInput=document.querySelector("#amount")
const firstOption=document.querySelector("#firstCurrencyOption")
const secondOption=document.querySelector("#secondCurrencyOption")
const resultInput=document.querySelector("#result")

runEventListeners()

const currency=new Currency()

function runEventListeners(){
    amountInput.addEventListener("input",exchange)
}

async function exchange(){
    const amount=Number(amountInput.value.trim())
    const firstOptionvalue=firstOption.options[firstOption.selectedIndex].textContent
    const secondOptionvalue=secondOption.options[secondOption.selectedIndex].textContent

  if(!amount || amount<=0){
    resultInput.value=""
    return;
  }
  try {
    const result=await currency.exchanges(amount,firstOptionvalue,secondOptionvalue)
    resultInput.value=result.toFixed(2)
  } catch (error) {
    console.error("Bir Hata Oluştu",error);
    alert("Döviz çevirme sırasında bir hata oluştu lütfen tekrar deneyiniz")
    
  }

    
}


