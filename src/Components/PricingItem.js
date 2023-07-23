import "./PricingItem.css"

const PricingItem = () => {
    return (
        <>
        <div className="pricing-container">
        <p class="pricing-type">Professional</p>
        <h1  class="price"><b>$24.99</b></h1>
        <div class="subs-container">
            <div class='subs-content'>1 TB storage</div>
            <hr class="line"/>
            <div class="subs-content">5 users allowed</div>
            <hr class="line"/>
            <div class="subs-content"> send upto 10 GB</div>
            <hr class="line"/>
        </div>
        <button class="learn-more-btn" value="Learn More"> <span>Learn More</span></button>
        </div>
        </>
    )
}

export default PricingItem;