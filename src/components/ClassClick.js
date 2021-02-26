import React, {Component} from 'react'

class ClassClick extends Component {
    changeOnClick() {
        console.log('button click by class component!!!!')
    }
    render() {
        return(
            <div>
                <button onClick={this.changeOnClick}>Click</button>
            </div>
        )
    }
}

export default ClassClick