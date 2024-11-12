import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Asegúrate de estar usando react-router para la navegación
import './personajes.css';

function Productos() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate(); // Hook para redireccionar

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleViewDetail = (id) => {
    navigate(`/character/${id}`); // Redirige a la ruta de detalles del personaje
  };

  return (
    <div className="card-container">
      {characters.map((character) => (
        <div key={character.id} className="card">
          <img src={character.image} alt={character.name} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{character.name}</h3>
            <button
              className="card-button"
              onClick={() => handleViewDetail(character.id)} // Llama a la función con el ID del personaje
            >
              Ver Detalle
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Productos;
