import React from 'react'
import Player from './Player'

const Players = props => {
    let {players} = props;
    return(
        <div className="Players">
            {players && players.map((player,i)=><Player key={i} player={player} />)}
        </div>
    )
}

export default Players;