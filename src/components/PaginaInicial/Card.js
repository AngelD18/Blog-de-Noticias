import React, { Component } from 'react';
class Card extends Component {

    render() {


        return (
            <div class="card" >
                <img src={require('../../Images/paisaje-e1549600034372.jpg')} class="card-img-top img-fluid" alt="..." />
                <div className="text-center subir">
                    <img src={require('../../Images/50494699_2112158855544375_3635862340605313024_n.jpg')} alt="" width="100px" className="border rounded-circle" />
                </div>

                <div class="card-body text-center">
                    <h6 class="card-title"><b>Card title</b></h6>
                    <p class="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
   
        );
    }
}

export default Card;