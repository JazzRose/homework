import React, { useState, useEffect } from 'react';
import MunroList from '../components/MunroList';
import './MunroContainer.css';

const MunroContainer = () => {
    const [munros, setMunros] = useState([]);
    const [selectedMunro, setSelectedMunro] = useState(null);

    useEffect(() => {
      getMunros();
    }, [])

    const getMunros = function(){
        fetch('https://munroapi.herokuapp.com/munros')
        .then(res => res.json())
        .then(munros => setMunros(munros))
    }

    return (
        <div className="main-container">
            <MunroList munros={munros} />
        </div>
    )
}

export default MunroContainer;
