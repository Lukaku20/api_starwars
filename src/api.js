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