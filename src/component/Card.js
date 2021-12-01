import React, {useState} from "react";

function Card({id, onClickCard}) {
    const [myID] = useState(id);

    return (
        <div className="card" onClick={() => onClickCard(myID)}>
            <p>img</p>
            <label>img name</label>
            <label>{myID}</label>
        </div>
    )
}

export default Card;