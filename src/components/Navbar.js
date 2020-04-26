import React, { Component } from "react";
class Navbar extends Component {
    render() {
        return (
            <div className="container-fluid bg-primary fixed-top">
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a class="navbar-brand" href="/">
                        MiBlog
          </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">
                                    Inicio <span class="sr-only">(current)</span>
                                </a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                          
                            <a
                                class="btn btn-outline-dark my-2 my-sm-0 text-white border border-white"
                                href="https://www.facebook.com/angeldaniel.puebla"
                            
                            >
                               Facebook
              </a>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
