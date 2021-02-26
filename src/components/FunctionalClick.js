import React, {Component} from 'react'

var ChangeOnClick = () => console.log('button clicked!!!')

function Click() {

    return (
        <div>
            <button onClick= {ChangeOnClick} >Click</button>
        </div>
    )

}

export default Click