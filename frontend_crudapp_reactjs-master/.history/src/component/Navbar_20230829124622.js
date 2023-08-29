import React from "react";
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container">
                <a className="navbar-brand text-white" href="#">MERN App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-white"  href="#">All Tasks</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    )
}