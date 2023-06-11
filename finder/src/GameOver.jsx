import React from "react";


function GameOver({truePoint , falsePoint}) {

    return (
        <div style={{ border: 'solid red 1px' }}>
            Thank You ! You completed all game
            <p>True : {truePoint}</p>
            <p>False : {falsePoint}</p>
            <button onClick={()=>window.location.reload()}>Restart Game</button>
        </div>
    )
}

export default GameOver