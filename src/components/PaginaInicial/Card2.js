import React, { Component } from 'react';
class Card2 extends Component {

    render() { 
        return ( 
            <div class="card mt-3">
            <div class="card-header">
                Quote
        </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
            </div>
        </div>
         );
    }
}
 
export default Card2;