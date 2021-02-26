import React,{Component} from 'react' 
import highOrderComponent from './HighOrderComponent'

class ClickCounter extends Component {
    
    render() {
        return(
            <button onClick={this.props.incrementCount}>{this.props.name} (increment by 5) {this.props.count} </button>
        )
    }
}

export default  highOrderComponent(ClickCounter,5)