import React,{Component} from 'react' 

class ClickCounterTwo extends  Component {
    

    render() {
        const {count,increseCount} = this.props
        
        return (
            <button onClick={increseCount}>Click {count}</button>
        )
    }
}

export default ClickCounterTwo