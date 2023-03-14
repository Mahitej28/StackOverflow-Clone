import React from 'react'

const Questions = ({question}) => {
  return (
    <div className='display-ans-container'>
        <div className='display-votes-ans'>
            <p>{question.votes}</p>
            <p>Votes</p>
        </div>
        

    </div>
  )
}

export default Questions