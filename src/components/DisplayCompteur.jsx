import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const DisplayCompteur = () => {

    const compteur = useSelector(state => state.compteur);
    return (
        <div>
            <h1>{compteur}</h1>
        </div>
    );
}

export default DisplayCompteur;
