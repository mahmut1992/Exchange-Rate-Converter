export class Currency{
    constructor(){
        this.url="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_r2ppcXCkj2Nn97ftUaT2Pd6UBYBHAtS3iy2mcSuO&base_currency="

    }
   async exchanges(amount,firstCurrency,secondCurrency){
   const  response=   await fetch(`${this.url}${firstCurrency.trim()}`)
   const result= await response.json()

   
  const exChangeResult=amount*result.data[secondCurrency]
  
   return exChangeResult;
    }
}