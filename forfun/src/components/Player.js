import React from 'react'

const Player = props =>{
    let {player} = props;

    return(
        <div data-id={player.id} className="Player">
            <h2>{`Player: ${player.name}`}</h2>
            <p>{`Country: ${player.name}`}</p>
        </div>
    )
}

export default Player;
// "name": "Megan Rapinoe",
// "country": "United States",
// "searches": 99,
// "id": 1