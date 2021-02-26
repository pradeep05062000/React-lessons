import React from 'react'


function childComponent(props) {
    return(
        <div> 
            <button onClick={props.funArg}>Click</button>
        </div>
    )
}

export default childComponent