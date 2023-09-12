import "./PricingItem.css";
import PricingContent from "./PricingContent";
import React from "react";


const PricingItem = ({type, amount, index, content, isActive, isYearly, onClick}) => {

  
  const clickHandler = () => {
       onClick(index);
  }
    return (
        <>
        <div className={`pricing-container ${isYearly ? "yearly" : ""}  ${isActive ? "active" : ""}`}  onClick={clickHandler}>
        <p className="pricing-type">{type}</p>
        <h1  className="price"><b>${amount}</b></h1>
          <PricingContent content={content}/>
        <button type="button" className="learn-more-btn" value="Learn More"> <span>Learn More</span></button>
        </div>
        </>
    )
}

export default PricingItem;