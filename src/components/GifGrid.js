import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

// import { getImagenes } from '../helpers/getGifs';

export const GifGrid = ({ categoria }) => {
    
    // const [imagenes, setImagenes] = useState( [] );

    const { datos, cargando } = useFetchGifs( categoria );

    return (
      <>
        <h3> { categoria } </h3>

        {/* { cargando ? 'Cargando...' : 'Fin de la carga' } */}

        <div className="grid-tarjetas">  
            {
              datos.map( imagen => (
                <GifGridItem 
                    key = { imagen.id }
                    { ...imagen }
                />
              ))
            }
        </div>
      </>
      
    )
}
