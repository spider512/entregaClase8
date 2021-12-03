import { useState, Fragment } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Producto from "./components/Producto";
import BolsaCompras from "./components/BolsaCompras";

function App() {


const [productos, guardarProductos] = useState( [

    {id:1, articulo:"Crema Pink de limpieza", precio: "$1250"},
    {id:2, articulo:"Crema humectante piel sensible", precio: "$2500"},
    {id:3, articulo:"Gel hidratante Bamboo", precio: "$1500"},
    {id:4, articulo:"Bruma restauradora", precio: "$850"}

]);

//State par changuitos

const [bolsaCompras, agregarProducto] = useState([]);

  return (
    <Fragment>
      <div clas="row">
        <div class="row">
          <Header/>
          </div>
      <div class="col">
      <h1>  Productos </h1>
      {productos.map(producto =>
        (
          <Producto
          key = { producto.id}
          producto = { producto }
          productos = { productos }
          bolsaCompras = { bolsaCompras}
          agregarProducto = { agregarProducto }
          
          />
        )
        )}
      </div>
          <div class="col">
          <BolsaCompras 
        bolsaCompras = {bolsaCompras}
        agregarProducto = {agregarProducto}
      >
      </BolsaCompras>
          </div>
   

      <Footer 
        anio={2021}
      />
      </div>
    </Fragment>
  );
}

export default App;
