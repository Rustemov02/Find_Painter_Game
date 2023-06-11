import React, { useState } from 'react'
import qBank from './QuestionsBank'
import styles from './button.module.css'
import GameOver from './GameOver'

function Question() {

    let [countQuestion, setCountQuestion] = useState(0)
    const variants = qBank[countQuestion].options
    const [disabled, setDisabled] = useState(false)
    let [trueAnswer, setTrueAnswer] = useState(0)
    let [falseAnswer, setFalseAnswer] = useState(0)
    const [gameOver, setGameOver] = useState(false)

    const disabledAllButtons = () => {
        setDisabled(true)
    }

    const checkAnswer = (answer) => {

        const nextLevel = () => {
            setTimeout(() => {
                countQuestion > 3 ? setGameOver(true) : setCountQuestion(countQuestion += 1)
                answer.className = `${styles.btn}` //default class name
                setDisabled(false)
            }, '1000');
        }

        // const reveal = () => {
        //     variants.forEach(item => {
        //         //  console.log(item) // all list as single
        //         //  console.log(variants) // all list as array
        //         console.log(qBank[countQuestion].answer)
        //         if(item == qBank[countQuestion].answer) return 
        //     })  
        // }


        if (answer.innerText !== qBank[countQuestion].answer) {
            //incorrect answer

            answer.className = `${styles.incorrect}`
            setFalseAnswer(falseAnswer += 1)
            nextLevel()
        } else {
            //correct answer

            answer.className = `${styles.correct}`
            setTrueAnswer(trueAnswer += 1)
            nextLevel()
        }
    }
    return (
        !gameOver ?
            (
                <div className={`${styles.modal}`}>
                    {/* <h2>Question {qBank[countQuestion].id}</h2> */}
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

                    <div style={{
                        position: 'absolute',
                        top: 80,
                        left: 30,
                        fontSize: 23
                    }}>
                        <p>True : {trueAnswer}</p>
                        <p>False : {falseAnswer}</p>
                    </div>


                </div>) :
            (
                <GameOver truePoint={trueAnswer} falsePoint={falseAnswer} />
            )
    )

}

export default Question