import React, { useState } from 'react'
import qBank from './QuestionsBank'
import styles from './button.module.css'
import GameOver from './GameOver'
import Score from './Score'

function Question() {

    let [point, setPoint] = useState(0)
    let [trueAnswer, setTrueAnswer] = useState(0)
    let [falseAnswer, setFalseAnswer] = useState(0)
    let [maxUsageLimit, setUsageLimit] = useState(0)
    let [countQuestion, setCountQuestion] = useState(0)
    const [variants, setVariant] = useState(qBank[countQuestion].options)
    const [disabled, setDisabled] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const buttonStyle = {
        width: 'fit-content',
        margin: 'auto',
        fontSize: 23,
        marginBottom: '10px',
        padding: '8px 25px',
        border: 'none',
        cursor: 'pointer',
        backgroundImage: 'linear-gradient( 109.6deg,  rgba(209,0,116,1) 11.2%, rgba(110,44,107,1) 91.1% )',
        color: 'white',
        borderRadius: '12px'
    }

    const checkAnswer = (answer) => {

        const nextLevel = () => {
            setTimeout(() => {
                countQuestion > 3 ? setGameOver(true) : setCountQuestion(countQuestion += 1)
                setVariant(qBank[countQuestion].options)
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

    const disabledAllButtons = () => {
        setDisabled(true)
    }

    const getPercentage = () => {

        if (maxUsageLimit === 2) return alert('You can only use it twice')

        setUsageLimit(maxUsageLimit += 1)

        let firstRandom = Math.floor(Math.random() * 3)
        let secondRandom = Math.floor(Math.random() * 1)

        while (secondRandom === firstRandom) {
            secondRandom = Math.floor(Math.random() * 2)
        }

        //DELETE RIGHT ANSWER FROM ARRAY
        variants.splice(qBank[countQuestion].options.indexOf(qBank[countQuestion].answer), 1)

        //DELETE RANDOM INCORRECT ANSWER
        qBank[countQuestion].options[firstRandom] == qBank[countQuestion].answer ? variants.splice(firstRandom + 1, 1) : variants.splice(firstRandom, 1)
        qBank[countQuestion].options[secondRandom] == qBank[countQuestion].answer ? variants.splice(secondRandom - 1, 1) : variants.splice(secondRandom, 1)

        // ADD CORRECT ANSWER TO ARRAY 
        variants.unshift(qBank[countQuestion].answer)
        setVariant(variant => [...variant])
    }

    return (
        !gameOver ?
            (
                <div className={`${styles.modal}`}>
                    <img src={qBank[countQuestion].img} style={{ width: '100%' }} />
                    <h5>Which artist painted this picture?</h5>
                    <button style={buttonStyle} onClick={() => getPercentage()}>50-50</button>
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