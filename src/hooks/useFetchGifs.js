
import { useState, useEffect} from 'react'; 
import { getImagenes } from '../helpers/getGifs';

export const useFetchGifs = ( categor ) => {

    const [estado, setEstado] = useState({ 
        datos: [],
        cargando: true
    });

    useEffect(() => {
        
        getImagenes( categor )
            .then( imgs => {
                setEstado({
                    datos: imgs,
                    cargando: false
                });
            });

    }, [])
    

    return estado;

}