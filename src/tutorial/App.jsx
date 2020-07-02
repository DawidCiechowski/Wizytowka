import React, { Component } from 'react';
import MoveList from './MovieList';
import Nav from './Nav';
import {MovieProvider} from './MovieContext';
import {AddMovie} from './AddMovies';

function App() {

    
    return (
        <MovieProvider>
            <div> 
                <Nav />
                <AddMovie /> 
                <MoveList />
            </div>
        </MovieProvider>
    );
}

export default App;