import React from 'react';
import './Dark_Mode.css'




const Dark_Mode = () => {
    return(
        <div className='container'>
            <div className='c-button'>
            <button class="switch">
             <div class="circle"></div>
            </button>
            </div>
            <div className='c-text'>
            <p>Light mode</p>
            </div>
        </div>
    )
}

export { Dark_Mode }