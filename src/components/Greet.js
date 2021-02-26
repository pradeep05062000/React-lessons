import reactDom from "react-dom";
import React from 'react'
//this is the functional component
var greet = (props) => {
    
    return(
        <div>
            <h1> hello {props.name} </h1>
            {props.children}
        </div>
    )

}

export default greet 