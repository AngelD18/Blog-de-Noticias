import React, { Component } from "react";
import {Link}from 'react-router-dom'
class Items extends Component {
    render() {
        return (
            <div className="row my-3">
                <div className="col-3 col-sm-3 col-lg-1">
                    <img
                        src={require("../../Images/50494699_2112158855544375_3635862340605313024_n.jpg")}
                        alt=""
                        width="60px"
                        className="border rounded-circle"
                    />
                </div>
                <div className="col-9 col-sm-9 col-lg-11">
                <p class="card-text float-right"><small class="text-muted"> 3 mins ago</small></p>
                    <h6 className="font-weight-bold">What is Lorem Ipsum?</h6>

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
          </p>
                    <p>
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout. The point
                        of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content
                        here', making it look like readable English.
          </p>
                    <Link to="/mas" className="btn btn-outline-primary">Mas informacion</Link>
                </div>
            </div>
        );
    }
}

export default Items;
