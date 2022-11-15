import React from 'react';
import { useDispatch } from 'react-redux';
import * as Creators from '../redux/ActionsCreators'

const ButtonsCounter = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(Creators.increment(5))}>Incrementer</button>
            <button onClick={() => dispatch(Creators.decrement(4))}>Decrementer</button>
            <button onClick={() => dispatch(Creators.init(40))}>Initialiser</button>
        </div>
    );
}

export default ButtonsCounter;
