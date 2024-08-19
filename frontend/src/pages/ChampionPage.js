import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ChampionPage() {
    const { championName } = useParams();
    const [championData, setChampionData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchChampionData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/champion/${championName}`);
                if (response.data.error) {
                    setError(response.data.error);
                } else {
                    setChampionData(response.data);
                }
            } catch (error) {
                setError("An error occurred while fetching the data.");
            }
        };

        fetchChampionData();
    }, [championName]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!championData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="champion-page">
            <h2>{championData.name}</h2>
            <p>Title: {championData.title}</p>
            <p>Blurb: {championData.blurb}</p>
        </div>
    );
}

export default ChampionPage;
