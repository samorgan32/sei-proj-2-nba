import React from 'react';

const PlayerComparison = ({ playerCompare }) => {
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
                            <h3>{playerCompare.season}</h3>
                            <h3>{playerCompare.pts}</h3>
                            <h3>{playerCompare.ast}</h3>
                            <h3>{playerCompare.reb}</h3>
                            <h3>{playerCompare.stl}</h3>
                            <h3>{playerCompare.blk}</h3>
                            <h3>{playerCompare.min}</h3>
                            <h3>{parseFloat((playerCompare.fg_pct) * 100).toFixed(2)} </h3>
                            <h3>{parseFloat((playerCompare.fg3_pct) * 100).toFixed(2)} </h3>
                            <h3>{playerCompare.turnover}</h3>

                        </div>
                    </div>


                    : <h3 style={{ textAlign: 'center' }}>No stats available for {playerCompare.first_name} {playerCompare.last_name}.</h3>
            }

        </div>
    );
};

export default PlayerComparison;