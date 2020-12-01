import React from 'react'
// css
import './Dashboard.css'

// what to render, and when? 

function Dashboard({input}) {
    return (
        <div className='dashboard_wrapper'>
            <p className='dashboard_sequence'>
            {}
            </p>

            <h2 className='dashboard_input'>
            {input.length ? input : '0'}
            </h2>

        </div>
    )
}

export default Dashboard