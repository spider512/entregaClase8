import React from 'react';
import { Fragment } from 'react';
import './producto.css';

const Producto = ({producto, productos, bolsaCompras, agregarProducto}) => {

    const {id, articulo, precio} = producto;


    const seleccionarProducto = (id) => {
        const producto = productos.filter(
            producto => producto.id === id
        )[0];
        agregarProducto([...bolsaCompras, producto]);
        //console.log(producto);
        console.log(bolsaCompras);
        }
    

        
    const sacarProducto = (id) => {
        //console.log("Quitando de la bolsa: ", id)
       const productos = bolsaCompras.filter ( producto => producto.id !== id);
       agregarProducto(productos)
    
    }


    return ( 
        <Fragment>
            <div class="row">
                
            <h5>{id} -- {articulo} {precio} </h5>
            {
                productos
                ?
                <div class="col-sm-5">                   
                     <button
                type = "button"
                class= "btn btn-primary"
                onClick = { () => seleccionarProducto(id) }       >                
                Comprar
            </button>
            </div>

                :
                <div class="col-sm-5">
                            <button 
                    class="btn btn-danger"
                        type="button"
                        onClick={() => sacarProducto(id)}>
                        Eliminar
                    </button>
                </div>
            

            }
            </div>

        </Fragment>
        
     );
}
 
export default Producto;