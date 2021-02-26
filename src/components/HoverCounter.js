import React,{Component} from 'react' 
import highOrderComponent from  './HighOrderComponent'
class HoverCounter extends Component {
    
    render() {
        return(
            <h3 onMouseOver={this.props.incrementCount}>{this.props.name} (incerement by 10) {this.props.count} </h3>
        )
    }
}

export default highOrderComponent(HoverCounter,10)