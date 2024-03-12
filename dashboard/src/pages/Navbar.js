import React from 'react'
import { Link } from "react-router-dom";

import "./Navbar.css"

import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
function Navbar() {
    return (
        <div className="sidebar">
            <div className="contents">


                 <LocalLibraryIcon />Your Local Library 

                <Link to="/">
                    HOME
                </Link>
                <Link to="/addbooks">

                    ADD BOOKS
                </Link>

            </div>
        </div>
    )
}

export default Navbar