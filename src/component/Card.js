import React, {useState} from "react";

function Card({id, img, isClicked, onClickCard}) {
    const [myID] = useState(id);
    return (
        <div className="card" onClick={() => onClickCard(myID)}>
            <img src={img} alt="random pic"/>
            <label>img name</label>
            <p>{isClicked.toString()}</p>
            <label>{myID}</label>
        </div>
    )
}

export default Card;