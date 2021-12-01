import React, {useState} from "react";
import uniqid from "uniqid";
import Card from "./component/Card";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([]);

  if (cards.length < 1) {
    _randomFillCard(10);
  }

  const onClickCard = (cardID) => {
    cards.forEach(card => {
      if (card.id === cardID) {
        if (!card.clicked) {
            setScore(score + 1);
            card.clicked = true;
            if (score + 1 >= bestScore)
              setBestScore(score + 1);
        } else {
          setScore(0);
          _resetGame();
        }
      }
    })
    _shuffleArray();
  };

  function _randomFillCard(amount) {
    let cardArr = []
    for (let i = 0; i < amount; i++) {
      cardArr.push({
        id: uniqid(),
        clicked: false
      });
    }
    setCards(cardArr);
  }

  function _resetGame() {
    _randomFillCard(10);
  }

  function _shuffleArray() {
    const tempArr = [...cards];
    for (let i = tempArr.length - 1; i > -1; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
    }
    setCards(tempArr);
  }

  return (
    <div className="App">
      <div className="score">
        <p>current score{score}</p>
        <p>best score{bestScore}</p>
      </div>
      <div className="cards">
        {
          cards.map(card => {
            return (
              <li key={card.id}>
                <Card 
                  id = {card.id}
                  onClickCard = {onClickCard}
                />
              </li>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
