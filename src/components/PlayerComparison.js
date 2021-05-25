import React from 'react';

const PlayerComparison = ({ playerCompare, setPlayerCompare }) => {
    if (!playerCompare) {
        return null
    }

    return (
        <div className='player-comparison'>

            {
                playerCompare.position ?
                    <div>
                        <div>
                            <h2>{playerCompare.first_name} {playerCompare.last_name}</h2>

                            {playerCompare.team && <h3>{playerCompare.team.full_name} </h3>}
                            <h3>{playerCompare.position}</h3>
                            <h3>{playerCompare.height_feet}'{playerCompare.height_inches}</h3>
                            <h3>{playerCompare.weight_pounds} lbs.</h3>
                        </div>
                        <div>
                            <p>{playerCompare.season}</p>
                            <p>{playerCompare.pts}</p>
                            <p>{playerCompare.ast}</p>
                            <p>{playerCompare.reb}</p>
                            <p>{playerCompare.stl}</p>
                            <p>{playerCompare.blk}</p>
                            <p>{playerCompare.min}</p>
                            <p>{parseFloat((playerCompare.fg_pct) * 100).toFixed(2)} </p>
                            <p>{parseFloat((playerCompare.fg3_pct) * 100).toFixed(2)} </p>
                            <p>{playerCompare.turnover}</p>

                        </div>
                    </div>


                    : <h3>No stats available for {playerCompare.first_name} {playerCompare.last_name}.</h3>
            }

        </div>
    );
};

export default PlayerComparison;