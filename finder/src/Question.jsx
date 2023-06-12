import React, { useState } from 'react'
import qBank from './QuestionsBank'
import styles from './button.module.css'
import GameOver from './GameOver'
import Score from './Score'

function Question() {

    let [countQuestion, setCountQuestion] = useState(0)
    const variants = qBank[countQuestion].options
    const [disabled, setDisabled] = useState(false)
    let [trueAnswer, setTrueAnswer] = useState(0)
    let [falseAnswer, setFalseAnswer] = useState(0)
    let [point, setPoint] = useState(0)
    const [gameOver, setGameOver] = useState(false)

    const disabledAllButtons = () => {
        setDisabled(true)
    }

    const checkAnswer = (answer) => {

        const nextLevel = () => {
            setTimeout(() => {
                countQuestion > 3 ? setGameOver(true) : setCountQuestion(countQuestion += 1)
                answer.className = `${styles.btn}`
                setDisabled(false)
            }, '1000');
        }

        if (answer.innerText !== qBank[countQuestion].answer) {
            answer.className = `${styles.incorrect}`
            setFalseAnswer(falseAnswer += 1)
        } else {
            answer.className = `${styles.correct}`
            setTrueAnswer(trueAnswer += 1)
            setPoint(point += 10)
        }
        nextLevel()
    }
    return (
        !gameOver ?
            (
                <div className={`${styles.modal}`}>
                    <img src={qBank[countQuestion].img} style={{ width: '100%' }} />
                    <h5>Which artist painted this picture?</h5>
                    <div style={{ border: "solid white 1px", display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        {variants.map((item, index) => (
                            <button key={index}
                                disabled={disabled}
                                className={`${styles.btn}`}
                                onClick={(e) => {
                                    disabledAllButtons()
                                    checkAnswer(e.target)
                                }}
                            >{item}</button>
                        ))}
                    </div>
                    <Score trueAns={trueAnswer} falseAns={falseAnswer} />
                </div>) :
            (
                <GameOver point={point} />
            )
    )

}

export default Question