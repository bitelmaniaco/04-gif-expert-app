import React from 'react';
import 'animate.css';


export const GifGridItem = ( props ) => {
  
    // console.log(props);
  
    return (
        <div className="tarjeta animate__animated animate__flipInY">
            <img src={ props.url } alt={ props.title } />
            <p> { props.title } </p>
        </div>
    )
}
