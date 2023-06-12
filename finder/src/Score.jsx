import React from 'react'


export default function Score({ trueAns, falseAns }) {

    return (
        <div style={{
            width : '10%',
            minWidth : '120px',
            position: 'absolute',
            top: 70,
            left: 60,
            fontSize: 25,
            background : 'white', 
            padding : '12px 10px',
            borderRadius : '8px'
        }}>
            <h3>Score : </h3>
            <p style={{padding :"5px 3px"}}>True : {trueAns}</p>
            <p style={{padding :"5px 3px"}}>False : {falseAns}</p>
        </div>
    )
}