import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CharacterDetail() {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((data) => setCharacter(data))
            .catch((error) => console.error('Error fetching character:', error));
    }, [id]);

    if (!character) return <div>Cargando...</div>;

    return (
        <div>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            {/* Agrega otros detalles que desees mostrar */}
        </div>
    );
}

export default CharacterDetail;
