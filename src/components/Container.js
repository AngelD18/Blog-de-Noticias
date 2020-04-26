import React, { Component } from 'react';
import Navbar from './Navbar'
import Columnas from './PaginaInicial/Columnas';
import Footer from './Footer';
class Container extends Component {

    render() { 
        return ( 
            <div>
                  <Navbar /> 
                  <Columnas/>
                  <Footer/>
            </div>
         

         );
    }
}
 
export default Container;