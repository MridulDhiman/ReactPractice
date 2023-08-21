import PricingItem from "./PricingItem";
import "./Pricing.css";
import React, {useState, useEffect} from "react";

const Pricing = ({prices, isYearly}) => {
    const initialData = [false, true, false];
const [activePosts, setActivePosts] = useState(initialData);
const [prevActivePost, setPrevActivePost] = useState(1);

useEffect(() => {
    setActivePosts(initialData);
    setPrevActivePost(1);
}, [isYearly]);

const onClick = (index) => {

     setActivePosts((prevState) => {
        const new_state = prevState;
        new_state[prevActivePost] = false;
        new_state[index] = true;
        return new_state;
     })

     setPrevActivePost(index);
}

const new_prices = prices.map ((price,index) => {
    return {
           ...price,
           isActive: activePosts[index]
    }
})


   const priceList = new_prices.map((price,index) => <PricingItem 
  key = {price.id}
  index={index}
  type={price.type}
  isActive={price.isActive}
  amount={price.price}
  content={price.content}
  isYearly={isYearly}
  onClick={onClick}
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