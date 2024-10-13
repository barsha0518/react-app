import React from 'react';
import { Link } from 'react-router-dom';

import Header from'./Header.jsx';

function Login(){
    return(
        <div>
            <Header />
            Welcome to Login page
            <br></br>
            USERNAME:
            <input type="text" /><br></br>
            PASSWORD:
            <input type="text" /><br></br>
            <button> LOGIN </button>
            <Link to="/Signup">Signup</Link>

        </div>
    )
}
export default Login;