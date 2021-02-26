import React, {Component} from 'react'

class UpdatingLifeCycle extends Component {

        constructor() {
            super()

            this.state = {
                color:'orange'
            }
        }

    changeColor = () => {
        this.setState({
            color:'yellow'
        })
    }

    shouldComponentUpdate() {
        return false
    }

    render() {
        return(
            <>
                <div> my favorite color is {this.state.color}</div>
                <button onClick={this.changeColor}>Change</button>
            </>
        )
    }
}

export default UpdatingLifeCycle