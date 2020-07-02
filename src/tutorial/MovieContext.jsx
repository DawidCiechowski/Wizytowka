import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([
        {   name: 'Harry Potter',
            price: '£10',
            id: 2134
        },
        {
            name: "Game of Thrones",
            price: "£14",
            id: 2133
        },
        {
            name: "Inception",
            price: "£1",
            id: 2131
        },
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}