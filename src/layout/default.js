import React from 'react';
import HeaderNav from "../components/mainnav.js";

export default function Default({ children }) {

    return (
        <>
            <header>
                <div className="animate__animated animate__lightSpeedInLeft">
                    <div className="d-sm-inline-flex">
                        <img className="logo" src="./images/logo.png" alt="Logo" />
                        <h1>Welcome to the Rogers Best Burgers</h1>
                        <a name="top" href="#top"></a>
                    </div>
                </div>
                <HeaderNav />
            </header>

            {children}

            <footer>
                <hr></hr>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                            <small>&copy; Copyright 2020, Kohltfarber Corporation</small>
                        </div>
                        <div className="col-sm-2">
                            <HeaderNav />
                        </div>
                        <div className="col-sm-2">
                            [social icons]
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}