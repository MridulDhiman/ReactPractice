
import Pricing from "./Components/Pricing";
import TogglePrice from "./Components/TogglePrice";
import React, {useState} from 'react'

const prices = {
  monthly: [
    {id:1, type: "Basic", price:19.99,content: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"]},
    {id:2, type:"Professional", price: 24.99, content: ["1TB Storage", "5 users allowed", "send upto 10GB"]},
    {id:3, type: "Master", price: 39.99,   content: ['2 TB Storage', '10 Users Allowed', "Snd up to 20 GB"]}
], 
yearly: [
  {id:4, type: "Basic", price: 200,  content: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"]},
  {id:5, type:"Professional",  price: 300,  content: ["1TB Storage", "5 users allowed", "send upto 10GB"]},
  {id:6, type: "Master",  price: 400, content: ['2 TB Storage', '10 Users Allowed', "Snd up to 20 GB"]}
]
}
function App() {
  const [delivered, setDelivered] = useState(prices.monthly);
  const [isYearly, setIsYearly] = useState(false);


const monthlyFlagHandler = (flag) => {
if(flag === false) {
setDelivered(prices.yearly);
setIsYearly(true);
}

else {
  setDelivered(prices.monthly);
  setIsYearly(false);
}
}
  return (
   <>
   <h1>Out Pricing</h1>
     <TogglePrice setMonthlyFlag={monthlyFlagHandler}/>
     <Pricing isYearly={isYearly} prices={delivered}/>
   </>
  );
}

export default App;
