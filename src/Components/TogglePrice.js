import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import "./TogglePrice.css"
import React, {useState} from "react"

const TogglePrice = () => {
    const [toggle, setToggle] = useState('monthly');
    const clickHandler = (e) => {
       setToggle('yearly');
    }
    const offClickHandler = (e) => {
        setToggle('monthly');
    }
    const toggleIcon = toggle === 'monthly' ? <ToggleOnIcon fontSize="large" className='toggle-icon' onClick={clickHandler}/>
    : <ToggleOffIcon fontSize='large' className='toggle-icon' onClick={offClickHandler}/>
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