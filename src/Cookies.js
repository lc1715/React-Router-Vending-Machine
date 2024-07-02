import React from 'react'

import { Link } from 'react-router-dom';
import './Cookies.css'


function Cookies() {
    return (
        <div>
            <h1>Yum! cookies!</h1>
            <img src='https://i.gifer.com/origin/1b/1badf4fce61beffed642946929ef46c9_w200.gif'
                alt='Cookie' />
            <div>
                <Link to='/' className='CookiesLink'>Back</Link>
            </div>
        </div>
    )
}

export default Cookies;