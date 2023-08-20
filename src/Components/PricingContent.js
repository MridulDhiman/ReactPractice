const PricingContent = ({content}) => {
    const contentList = content.map((el) => {
        return (
            <div key={el}>
            <div class="subs-item">{el}</div>
            <hr class="line"/>
            </div>
        )
    })
return (
    <>
    <div class="subs-container">
{contentList}
    </div>
    </>
)
}

export default PricingContent;