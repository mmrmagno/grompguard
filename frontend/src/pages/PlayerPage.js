import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PlayerPage() {
    const { server, summonerName } = useParams();
    const [playerData, setPlayerData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlayerData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/player/${server}/${summonerName}`);
                if (response.data.error) {
                    setError(response.data.error);
                } else {
                    setPlayerData(response.data);
                }
            } catch (error) {
                setError("An error occurred while fetching the data.");
            }
        };

        fetchPlayerData();
    }, [server, summonerName]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!playerData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="player-page">
            <h2>{playerData.name}</h2>
            <p>Level: {playerData.summonerLevel}</p>
        </div>
    );
}

export default PlayerPage;
