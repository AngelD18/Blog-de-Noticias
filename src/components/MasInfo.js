import React, { Component } from 'react';
import Navbar from './Navbar'
import Columnas from './MasInfo/Columnas';
import Footer from './Footer';
class MasInfo extends Component {

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
 
export default MasInfo;