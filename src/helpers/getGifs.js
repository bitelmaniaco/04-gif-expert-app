


export const getImagenes = async ( categoria ) => {
    // url construida con postman
    // api_key: api
    // q: busqueda
    // limit: numero de respuestas
    const url = `https://api.giphy.com/v1/gifs/search?q=${ categoria }&limit=10&api_key=IxoM5OhrbIqnnmVaTndHqz5iRLmP4fmf`;
    const respuesta = await fetch(url);
    // data es como vuelve
    const { data } = await respuesta.json();

    //creo funcion para recuperar los datos que me interesa
    const imagenes = data.map( imag => {
        return {
            id: imag.id,
            title: imag.title,
            url: imag.images?.downsized_medium.url,
        }
    })

    // cargamos 
    // setImagenes( imagenes );
    return imagenes;

}