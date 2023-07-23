
import Pricing from "./Components/Pricing";
import TogglePrice from "./Components/TogglePrice";

function App() {
  const prices = [
    {id:1, type: "Basic", monthly_price:19.99, yearly_price: 200, monthlyFlag: true, content: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"]},
    {id:2, type:"Professional", monthly_price: 24.99, yearly_price: 300, monthlyFlag: true, content: ["1TB Storage", "5 users allowed", "send upto 10GB"]},
    {id:3, type: "Master", monthly_price: 39.99, yearly_price: 400,monthlyFlag: true, content: ['2 TB Storage', '10 Users Allowed', "Snd up to 20 GB"]}
]
  return (
   <>
   <h1>Out Pricing</h1>
     <TogglePrice/>
     <Pricing prices={prices}/>
   </>
  );
}

export default App;
