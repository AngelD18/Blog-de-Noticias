import React, { Component } from "react";
import Card from "./Card";
import Card2 from "./Card2";
import Items from "./Items";
class Columnas extends Component {
    render() {
        return (
            <div className="container-fluid mt-5 pt-5">
                <div className="row">
                    <div className="col-sm-4 col-lg-3">
                        <Card />
                        <Card2 />
                    </div>
                    <div className="col-sm-8  col-lg-9 mt-3 mt-sm-0">
                        <ul class="list-group mr-sm-3">
                            <li class="list-group-item"><Items/> </li>
                            <li class="list-group-item"><Items/></li>
                            <li class="list-group-item"><Items/></li>
                            <li class="list-group-item"><Items/></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Columnas;
