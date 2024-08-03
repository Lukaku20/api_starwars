// Body.jsx
import React, { useEffect, useState } from 'react';
import { getApiPersonajes, getApiPlanets, getApiSpecies } from '../api'; // Asegúrate de tener la función getApiSpecies
import '../body.css';

function Body() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(''); // Estado para la categoría seleccionada

  useEffect(() => {
    if (category === '') return; // No cargues nada si no hay categoría seleccionada

    setLoading(true);
    async function fetchData() {
      try {
        let datos;
        if (category === 'personajes') {
          datos = await getApiPersonajes();
        } else if (category === 'planetas') {
          datos = await getApiPlanets();
        } else if (category === 'species') {
          datos = await getApiSpecies();
        }
        setData(datos.results);
      } catch (error) {
        console.error(`Error fetching ${category}:`, error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [category]);

  return (
    <div>
      <div className="button-container">
        <button onClick={() => setCategory('personajes')}>Personajes</button>
        <button onClick={() => setCategory('planetas')}>Planetas</button>
        <button onClick={() => setCategory('species')}>Especies</button>
      </div>
      {loading && <div>Cargando {category}...</div>}
      <div className="cards-container">
        {data.map((item) => (
          <div className="card" key={item.uid}>
            <h3>{item.name}</h3>
            <p>ID: {item.uid}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
