import React from "react";
import './Scroll.css';
const Scroll=(props)=>
{
    return(
        <div className='scrolable'>
            {props.children}
        </div>
    );
}
export default Scroll;