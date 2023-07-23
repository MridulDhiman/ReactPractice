import "./PricingItem.css";
import PricingContent from "./PricingContent";


const PricingItem = ({type, amount, content}) => {
    return (
        <>
        <div className="pricing-container">
        <p class="pricing-type">{type}</p>
        <h1  class="price"><b>${amount}</b></h1>
          <PricingContent content={content}/>
        <button class="learn-more-btn" value="Learn More"> <span>Learn More</span></button>
        </div>
        </>
    )
}

export default PricingItem;