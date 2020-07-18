import React from 'react'

const Card = (props) => {
    return(
        <div className='card-wrapper'>
        <h1 className='card-name'>{props.player.name}</h1>
        <p className='card-rank'>{props.player.rank}</p>
        <p className='card-team'>{props.player.team}</p>
        </div>
    )
}

export default Card