import React from "react";
import'tachyons';
function Card(props)
{    
    return(
        <div className='tc bg-light-yellow dib ma2 br3 pa2 grow '>
            <img  alt='avtar' src={ 'https://robohash.org/'+props.id} />
            <div className='texts'>
                <p className='f3'>{props.name}</p>
                <p className='f4'>{props.email}</p>
            </div>
        </div>    
    );
}

export default Card;