import React, { useState } from "react";
import Answer from "./Answer";

function GameOver({ point }) {
    const [showAnswer, setShowAnswer] = useState(false)
    const style = {
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: 'none',
        background: "white",
        padding: '12px 20px',
        borderRadius: '12px',
        gap: 10
    }
    const buttonStyle = {
        padding: '8px 15px',
        margin: '5px',
        fontSize: '18px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '12px',
        color: 'white',
        backgroundImage: 'radial-gradient(circle farthest-corner at 10% 20%, rgba(14, 174, 87, 1) 0%, rgba(12, 116, 117, 1) 90%)'
    }
    return (
        <div style={style}>
            <h1 style={{ fontFamily: 'Poppins' }}>Game Over !</h1>
            <p style={{ fontFamily: 'Quicksand', fontWeight: 600, fontSize: "30px" }}>Your total point : {point}</p>
            <div style={{}}>
                <button style={buttonStyle} onClick={() => window.location.reload()}>Restart Game</button>
                {!showAnswer && <button style={buttonStyle} onClick={() => setShowAnswer(true)}>Show true answer</button>}
                <button style={buttonStyle} onClick={()=>window.location.href = 'https://github.com/Rustemov02?tab=repositories'}>Get More Game</button>
            </div>

            {showAnswer && <Answer />}
        </div >
    )
}

export default GameOver