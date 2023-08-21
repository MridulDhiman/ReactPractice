import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import "./TogglePrice.css"
import React, {useState} from "react"

const TogglePrice = ({setMonthlyFlag}) => {
    const [isMonthly, setIsMonthly] = useState(true);

    if(isMonthly === false) {
        setMonthlyFlag(false);
    }
    else{
        setMonthlyFlag(true);
    }
    const clickHandler = (e) => {
      
       setIsMonthly(false);
       
    }
    const offClickHandler = (e) => {
        
        setIsMonthly(true);
       
    }

    const toggleIcon = isMonthly === true ? <ToggleOnIcon fontSize="large" className='toggle-icon' onClick={clickHandler}/>
    : <ToggleOffIcon fontSize='large' style={{color: "black"}} className='toggle-icon' onClick={offClickHandler}/>

    return (
    <>
<div className="toggle-bar">
    <span>Annually</span>
    {toggleIcon}
    <span>Monthly</span>
</div>
{/* <div>{ToggleOnIcon}</div> */}

</>)
};

export default TogglePrice;