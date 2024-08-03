export async function getApiPersonajes(params) {
    const response = await fetch('https://www.swapi.tech/api/people');
    const datosPersonajes = response.json();
       
    return datosPersonajes;
}

export async function getApiPlanets() {
    const response = await fetch('https://www.swapi.tech/api/planets');
    const datosPlanetas = response.json();

    return datosPlanetas;

}

export async function getApiSpecies() {
    const response = await fetch('https://www.swapi.tech/api/species');
    const datosSpecies = response.json();

    return datosSpecies;

}