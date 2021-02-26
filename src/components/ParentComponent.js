import React, {Component} from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
    constructor(){
        super()
        this.state = {
            name:'pradeep'
        }
    }
    callAlter(child) {
        alert(`Hello ${this.state.name} this is ${child}`)
    }
    render() {
        return(
            <div>
                <ChildComponent funArg={() => this.callAlter(`child`)}/>
            </div>
        )
    }
}

export default ParentComponent