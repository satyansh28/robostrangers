import React from "react";

function Searchbox(props)
{
    return(
        <div className='pa2'>
            <input
            onChange={props.anyinput}   
            type='search' 
            placeholder='Find people'
            className='pa3 bs b--green'/>
        </div>
    );

}
export default Searchbox;