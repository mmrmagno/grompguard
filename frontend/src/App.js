import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import PlayerPage from './pages/PlayerPage';
import ChampionPage from './pages/ChampionPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/player/:server/:summonerName" element={<PlayerPage />} />
                <Route path="/champion/:championName" element={<ChampionPage />} />
            </Routes>
        </Router>
    );
}

export default App;
