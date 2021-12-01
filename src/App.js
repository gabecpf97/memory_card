import React, {useState, useEffect} from "react";
import uniqid from "uniqid";
import Card from "./component/Card";
import "./App.css";
import getImages from "./getImages";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([]);
  const [imgArr] = useState(getImages());

  // if (cards.length < 1) {
  //   _randomFillCard(10);
  // }

  useEffect(() => {
    const cardArr = []
    for (let i = 0; i < 10; i++) {
      cardArr.push({
        id: uniqid(),
        clicked: false,
        img: imgArr[i]
      });
    }
    for (let i = cardArr.length - 1; i > -1; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardArr[i], cardArr[j]] = [cardArr[j], cardArr[i]];
    }
    setCards(cardArr);
  }, []);

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
    setCards(prevCards => _shuffleArray(prevCards));
  };

  function _randomFillCard(amount) {
    const cardArr = []
    for (let i = 0; i < amount; i++) {
      cardArr.push({
        id: uniqid(),
        clicked: false,
        img: imgArr[i]
      });
    }
    setCards(cardArr);
  }

  function _resetGame() {
    _randomFillCard(10);
  }

  function _shuffleArray(targetArr) {
    const tempArr = [...targetArr];
    for (let i = tempArr.length - 1; i > -1; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
    }
    return tempArr;
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
                  img = {card.img}
                  isClicked = {card.clicked}
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
