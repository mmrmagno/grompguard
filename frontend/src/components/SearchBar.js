import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        if (query.includes('#')) {
            // Assume this is a summoner search (e.g., "Dohmu#NA1")
            const [summonerName, serverTag] = query.split('#');
            navigate(`/player/${serverTag}/${summonerName}`);
        } else {
            // Assume this is a champion search
            navigate(`/champion/${query}`);
        }
    };

    return (
        <div className="flex flex-col items-center mt-8">
            <form onSubmit={handleSearch} className="flex flex-col items-center space-y-4">
                <input
                    type="text"
                    placeholder="Search for SummonerName#Server or Champion..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="px-4 py-2 w-80 rounded-lg border border-gray-300 focus:ring focus:ring-blue-200"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Search
                </button>
            </form>
        </div>
    );
}

export default SearchBar;
