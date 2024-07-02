import React from 'react'

import { Link } from 'react-router-dom';
import './Soda.css'


function Soda() {
    return (
        <div>
            <h1>I'm thirsty!</h1>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLcAq3itK7TpXFq9ZwUpjivJnOABXJB61BSw&s'
                alt='Soda' />
            <div>
                <Link to='/' className='SodaLink'>Back</Link>
            </div>
        </div>
    )
}

export default Soda;