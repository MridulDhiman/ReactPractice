import PricingItem from "./PricingItem";
import "./Pricing.css";

const Pricing = ({prices}) => {
   
  const priceList = prices.map((price) => {
    return price.monthlyFlag === true ?
     <PricingItem 
     type={price.type} 
     amount={price.monthly_price} 
     content={price.content} 
     /> : 
    <PricingItem 
     type={price.type} 
     amount={price.yearly_price} 
     content={price.content} 
     />
  })

    return (
<>
<div className="container">
{priceList}
</div>

</>
    )
};

export default Pricing;