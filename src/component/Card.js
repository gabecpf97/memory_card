import React, {useState} from "react";

function Card({id, img, isClicked, onClickCard}) {
    const [myID] = useState(id);
    return (
        <div className="card" onClick={() => onClickCard(myID)}>
            <img src={img} alt="random pic"/>
        </div>
    )
}

export default Card;