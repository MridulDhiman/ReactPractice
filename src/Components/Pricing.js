import PricingItem from "./PricingItem";
import "./Pricing.css";

const Pricing = ({prices, isYearly}) => {
   
  const priceList = prices.map((price) => <PricingItem 
  key = {price.id}
  type={price.type}
  isActive={price.isActive}
  amount={price.price}
  content={price.content}
  isYearly={isYearly}
   />)

    return (
<>
<div className="container">
{priceList}
</div>

</>
    )
};

export default Pricing;