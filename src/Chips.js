import React from 'react'

import { Link } from 'react-router-dom'

import './Chips.css'


const Chips = () => {
    return (
        <div>
            <h1>Chips!</h1>
            <img src='https://media0.giphy.com/media/xT39Dl1AHieEwAobq8/200w.gif?cid=6c09b952x36kutbv0x6qvb9xcaap2l573z04ecpa3zal3spy&ep=v1_gifs_search&rid=200w.gif&ct=g'
                alt='Chips' />
            <div>
                <Link to='/' className='ChipsLink'>Back</Link>
            </div>
        </div>
    )
}

export default Chips;