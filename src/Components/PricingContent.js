const PricingContent = ({content}) => {
    const contentList = content.map((el) => {
        return (
            <>
            <div class="subs-item">{el}</div>
            <hr class="line"/>
            </>
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