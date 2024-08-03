// Body.jsx
import React, { useEffect, useState } from 'react';
import { getApiPersonajes } from '../api'; // Importa la función de la API
import '../body.css'; // Asegúrate de tener un archivo CSS para estilizar las tarjetas

function Body() {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Función para obtener los personajes y actualizar el estado
    async function fetchPersonajes() {
      try {
        const datos = await getApiPersonajes();
        setPersonajes(datos.results);
      } catch (error) {
        console.error('Error fetching personajes:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPersonajes();
  }, []);

  if (loading) {
    return <div>Cargando personajes...</div>;
  }

  return (
    <div className="cards-container">
      {personajes.map((personaje) => (
        <div className="card" key={personaje.uid}>
          <h3>{personaje.name}</h3>
          <p>ID: {personaje.uid}</p>
        </div>
      ))}
    </div>
  );
}

export default Body;
