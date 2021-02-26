import React, {Component} from 'react'


class Counter extends Component {

    constructor() {
        super()
        this.state = {
            count:0
        }  
        
    }
    increment(){
        this.setState(prevState => ({
            count: prevState.count + 5
        }))
    }

    changeCountBy5() {
        this.increment()
    }
    

    render(){
        return (
            <div>
                <div>Change count by 5</div>
                <div>Count:{this.state.count}</div>
                <button onClick={() => this.changeCountBy5()}>Counter</button>
            </div>
        )
    }
}

export default Counter