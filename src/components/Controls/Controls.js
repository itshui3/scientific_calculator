import React from 'react';

import './alignButtons.css'

function Controls(props) {
    return (
        <div className='controls_wrapper'>
            <div className='row row1-%_ce_c_back'>
                <div className='cell row1_col1_%'>%</div>
                <div className='cell row1_col2_ce'>CE</div>
                <div className='cell row1_col3_ce'>C</div>
                <div className='cell row1_col4_back'>Backspace</div>
            </div>
            <div className='row row2-1/x_x^2_sqrt_divide'>
                <div className='cell row2_col1_1/x'>1/x</div>
                <div className='cell row2_col2_x^2'>x^2</div>
                <div className='cell row2_col3_sqrt(x)'>sqrt(x)</div>
                <div className='cell row2_col4_divide'>/</div>
            </div>
            <div className='row row3-7_8_9_mult'>
                <div className='cell row3_col1_7'>7</div>
                <div className='cell row3_col2_8'>8</div>
                <div className='cell row3_col3_9'>9</div>
                <div className='cell row3_col4_mult'>x</div>
            </div>
            <div className='row row4-4_5_6_subtract'>
                <div className='cell row4_col1_4'>4</div>
                <div className='cell row4_col2_5'>5</div>
                <div className='cell row4_col3_6'>6</div>
                <div className='cell row4_col4_subtract'>-</div>
            </div>
            <div className='row row5-1_2_3_add'>
                <div className='cell row5_col1_1'>1</div>
                <div className='cell row5_col2_2'>2</div>
                <div className='cell row5_col3_3'>3</div>
                <div className='cell row5_col4_add'>+</div>
            </div>
            <div className='row row6-neg_0_dec_equal'>
                <div className='cell row6_col1_neg'>+/-</div>
                <div className='cell row6_col2_0'>0</div>
                <div className='cell row6_col3_dec'>.</div>
                <div className='cell row6_col4_equal'>=</div>
            </div>
        </div>
    );
}

export default Controls;