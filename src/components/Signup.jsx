import React from 'react';
import { Link } from 'react-router-dom';

import Header from "./Header";

function Signup(){
    return(
        <div>
            <Header />
            Welcome to Signup page
            <br></br>
            USERNAME:
            <input type="text" /><br></br>
            PASSWORD:
            <input type="text" /><br></br>
            <button> Signup </button>
            <Link to="/login"> LOGIN </Link>

        </div>
    )
}
export default Signup;