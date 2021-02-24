import React from 'react';
import './Nav.css';

import requests from '../API/requests';

function Nav({ setSelectedOption }) {
    return (
        <div className="nav">
            <h2 onClick={ () => setSelectedOption(requests.fetchTrending)}>Tendances</h2>
            <h2 onClick={ () => setSelectedOption(requests.fetchTopRated)}>Top rated</h2>
            <h2 onClick={ () => setSelectedOption(requests.fetchActionMovies)}>Action</h2>
            <h2 onClick={ () => setSelectedOption(requests.fetchComedyMovies)}>Comédie</h2>
            <h2 onClick={ () => setSelectedOption(requests.fetchHorrorMovies)}>Horreur</h2>
            <h2 onClick={ () => setSelectedOption(requests.fetchRomanceMovies)}>Romantique</h2>
            <h2 onClick={ () => setSelectedOption(requests.fetchMystery)}>Mystère</h2>
            <h2 onClick={ () => setSelectedOption(requests.fetchSciFi)}>Sci-fi</h2>
            <h2 onClick={ () => setSelectedOption(requests.fetchWestern)}>Western</h2>
            <h2 onClick={ () => setSelectedOption(requests.fetchAnimation)}>Animation</h2>
            <h2 onClick={ () => setSelectedOption(requests.fetchTV)}>Films</h2>
        </div>
    )
}

export default Nav;
