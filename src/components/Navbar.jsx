import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    function active(e) {
        console.log("clicked value", e.nativeEvent.toElement.innerText);
        if (e.nativeEvent.toElement.innerText == 'Home') {
            document.getElementById("first").classList.add("activelink");
            document.getElementById("third").classList.remove("activelink");
            document.getElementById("second").classList.remove("activelink");
        }
        if (e.nativeEvent.toElement.innerText == 'Link 1') {
            document.getElementById("second").classList.add("activelink");
            document.getElementById("first").classList.remove("activelink");
            document.getElementById("third").classList.remove("activelink");
        }
        if (e.nativeEvent.toElement.innerText == 'Link 2') {
            document.getElementById("third").classList.add("activelink");
            document.getElementById("second").classList.remove("activelink");
            document.getElementById("first").classList.remove("activelink");
        }
        // if (e.nativeEvent.toElement.innerText == 'Dropdown') {
        //     document.getElementById("third").classList.add("activelink");
        // }
    }
    return (
        <>
            {/* <div id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h1 data-aos="fade-right" id="logo">Company Name</h1>
                        </div>
                        <div className="col-md-8">
                            <ul data-aos="fade-left" id="menu" className="float-md-right">
                                <li><NavLink to="">Home</NavLink></li>
                                <li><NavLink to="">About Us</NavLink></li>
                                <li><NavLink to="">Gallery</NavLink></li>
                                <li><NavLink to="">Products</NavLink></li>
                                <li><NavLink to="">Contact Us</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="NavMenu bg-dark w-100 overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">


                            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                                <NavLink className="navbar-brand" to="#">Company Name</NavLink>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                        <li onClick={active} id="first" className="navitem nav-item activelink">
                                            <NavLink className="nav-link" to="#">Home</NavLink>
                                        </li>
                                        <li onClick={active} id="second" className="navitem nav-item">
                                            <NavLink className="nav-link" to="#">Link 1</NavLink>
                                        </li>
                                        <li onClick={active} id="third" className="navitem nav-item">
                                            <NavLink className="nav-link" to="#">Link 2</NavLink>
                                        </li>
                                        <li id="fourth" className="navitem nav-item dropdown">
                                            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Dropdown
                                             </NavLink>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <NavLink className="dropdown-item" to="#">Action</NavLink>
                                                <NavLink className="dropdown-item" to="#">Another action</NavLink>
                                                <div className="dropdown-divider"></div>
                                                <NavLink className="dropdown-item" to="#">Something else here</NavLink>
                                            </div>
                                        </li>

                                    </ul>
                                    <form className="form-inline my-2 my-lg-0">
                                        <div className="input-group">
                                            <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                                            <div className="input-group-append">
                                                <button className="btn btn-info my-0"><i class="fa fa-search" aria-hidden="true"></i></button>
                                            </div>
                                        </div>

                                        {/* <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button> */}
                                    </form>


                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;