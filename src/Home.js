import React from 'react'

import { Link } from 'react-router-dom'

import './Home.css'


function Home() {
    return (
        <div>
            <h1>Vending Machine Snacks:</h1>
            <div >
                <Link to='/chips' className='HomeChips'>Chips</Link>
            </div>
            <div>
                <Link to='/soda' className='HomeChips'>Soda</Link>
            </div>
            <div>
                <Link to='/cookies' className='HomeChips'>Cookies</Link>
            </div>
        </div>
    )
}

export default Home;