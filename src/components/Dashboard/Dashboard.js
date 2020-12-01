import React from 'react'
// css
import './DashboardLayout.css'
import './CellColors.css'

// what to render, and when? 

function Dashboard({input, sequence, runningProd}) {
    return (
        <div className='dashboard_wrapper'>
            <p className='dashboard_sequence'>
            {sequence}
            </p>

            <h2 className='dashboard_input'>
            {
            input.length 
            ? 
            input 
            : 
            runningProd.length 
            ? 
            runningProd 
            : 
            '0'
            }
            </h2>

        </div>
    )
}

export default Dashboard