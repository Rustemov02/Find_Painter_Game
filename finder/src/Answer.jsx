import React from 'react'
import qBank from './QuestionsBank'

export default function Answer() {
 
    return (
        <div style={{display : 'flex',flexDirection : 'row' , gap : 10}}>
            {qBank.map(item => <p key={item.id} style={{fontSize : 20,fontWeight : 600, fontFamily : 'Quicksand'}}>{item.id}.{item.answer}</p>
            )}
        </div>
    )
}