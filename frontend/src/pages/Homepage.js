import React from 'react';
import SearchBar from '../components/SearchBar';

function Homepage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold mb-6">Welcome to GrompGuard</h1>
            <SearchBar />
        </div>
    );
}

export default Homepage;
