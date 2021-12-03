import React, { Fragment } from 'react';
import './bolsaCompras.css';
import Producto from './Producto';

const BolsaCompras = ({bolsaCompras, agregarProducto}) => {
    return ( 

        <Fragment>
            <div className="bolsaCompras">

                <h3>
                    Bolsa de compras
                </h3>
                {
                    bolsaCompras.map(
                        producto => (
                            <Producto
                                key = {producto.id}
                                producto = {producto}
                                bolsaCompras = {bolsaCompras}
                                agregarProducto = {agregarProducto}
                            />

                        )
                    )
                }

            </div>


        </Fragment>

     );
}
 
export default BolsaCompras ;