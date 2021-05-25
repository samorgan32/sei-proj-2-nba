import React from 'react';

const PlayerComparison = ({ playerCompare, setPlayerCompare }) => {
    if (!playerCompare) {
        return <p>select players to compare</p>
    }

    return (
        <div className='player-comparison'>
            <div>
                <h2>{playerCompare.first_name} {playerCompare.last_name}</h2>
                {/* <h3>Team: {playerNames.team.full_name} </h3> */}
                <h3>Position: {playerCompare.position}</h3>
                <h3>Height: {playerCompare.height_feet}'{playerCompare.height_inches}</h3>
                <h3>Weight: {playerCompare.weight_pounds} lbs.</h3>
            </div>
            <div>
                <p>season: {playerCompare.season}</p>
                <p>points: {playerCompare.pts}</p>
                <p>assists: {playerCompare.ast}</p>
                <p>rebounds: {playerCompare.reb}</p>
                <p>steals: {playerCompare.stl}</p>
                <p>blocks: {playerCompare.blk}</p>
                <p>minutes/game: {playerCompare.min}</p>
                <p>fg%: {parseFloat((playerCompare.fg_pct) * 100).toFixed(2)} </p>
                <p>3pt%: {parseFloat((playerCompare.fg3_pct) * 100).toFixed(2)} </p>
                <p>turnovers: {playerCompare.turnover}</p>

            </div>

        </div>
    );
};

export default PlayerComparison;