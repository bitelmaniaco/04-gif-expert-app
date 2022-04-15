import React, { useState } from 'react'
import { AddCategoria } from './components/AddCategoria';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Dragon Ball']);

    // const handleAdd = () => {
    //     setCategorias( categor => [ ...categor, 'Chicho Terremoto' ] );
    // }

  return (
    <>
        <h2> GifExpertApp </h2>
        <AddCategoria setCategorico = { setCategorias }/>
        <hr />
        <ol>
            {
                categorias.map( categ => ( 
                        <GifGrid 
                            key = { categ }
                            categoria = { categ } 
                        /> 
                    )                  
                )
            }
        </ol>
    </>
  )
}
