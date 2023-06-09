import React, { useState } from 'react'
import qBank from './QuestionsBank'

function Question() {

    let [countQuestion, setCountQuestion] = useState(0)
    const variants = qBank[countQuestion].options
    const isCorrect = (answer) => {
        if (answer !== qBank[countQuestion].answer) return

        countQuestion > 3 ? alert(qBank[countQuestion].id + ' game over thanks') : setCountQuestion(countQuestion += 1)

    }
    return (
        <div style={{border :'solid red 1px',width : '60%',margin : 'auto'}}>
            <h2>Question {qBank[countQuestion].id}</h2>
            <img src={qBank[countQuestion].img} style={{width : '100%'}}/>
            <h5>Which artist painted this picture?</h5>
            {variants.map((item, index) => (
                <p key={index} onClick={(e) => isCorrect(e.target.innerText)}>{item}</p>
            ))}

        </div>
    )
}


export default Question