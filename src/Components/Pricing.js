import PricingItem from "./PricingItem";
import "./Pricing.css";

const Pricing = ({prices}) => {
   
  const priceList = prices.map((price) => <PricingItem 
  type={price.type}
  amount={price.price}
  content={price.content}
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