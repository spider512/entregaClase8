import React from 'react'

const Footer = ( {anio} ) => {

    //// ACA VA EL JAVAscript q necesite.

    //const fecha = new Date().getFullYear()

    return ( 

        <div class="card-footer text-muted fixed-bottom text-center">
        <p>Año {anio}</p>
      </div>
        
     );
}
 
export default Footer;