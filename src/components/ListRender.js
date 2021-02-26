import React from 'react'
import Person from './Person'

function listRender() {
    const names = ['pradeep','rakul','dishank']
    return (
        <div>
            {
                names.map((name,index) => <Person key={index} name={name} />)
            }
        </div>
    )
}


export default listRender   