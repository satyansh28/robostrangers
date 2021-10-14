import React from "react";
import Card from "./Card";

function Cardlist(props)
{
    const cards=[];
    for(const singlecard of props.robolist)
        cards.push(<Card key={singlecard.id} name={singlecard.name} id={singlecard.id} email={singlecard.email} />);
    return(
        <div>
            {cards}
        </div>
    );
};
export default Cardlist;