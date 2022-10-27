import React   from "react";
import CartWidget from "../CartWidget";



import './styles.css';

const NavBar = ()=>{
   
    return(
     <ul>    
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#ubicaion">Ubicacion</a></li>
        <li><a href="#nosotros">Nosotros</a></li> 
        <li><a href="#contacto">Contacto</a></li> 
         <CartWidget/> 
     </ul>
    );
      
    

};
export default NavBar;