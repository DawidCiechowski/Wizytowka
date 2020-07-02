import React from 'react';

const Movie = ({name, price}) => {

    return (
        <div>
            <h3>{name}</h3>
            <h4>{price}</h4>
        </div>
    );
}

export default Movie;