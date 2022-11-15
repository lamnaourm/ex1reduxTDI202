import React from 'react';
import { useSelector } from 'react-redux';

const DisplaySolde = () => {

    const solde = useSelector(state => state.solde)
    return (
        <div>
            <h1>{solde}</h1>
        </div>
    );
}

export default DisplaySolde;
