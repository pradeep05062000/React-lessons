import React from 'react' 

function hero({heroName}) {
    if(heroName == 'Joker'){
        throw new Error('Not a hero')
    }

    return(
        <div>
            {heroName}
        </div>
    )
}

export default hero