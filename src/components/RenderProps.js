import React,{Component} from 'react' 

class RenderProps extends Component {
    constructor() {
        super()
        this.state  = {
            count:0
        }
    }

    increseCount = () => {
        this.setState(preState => {
            return {count: preState.count + 1}
        })
    }

    render() {
        return(
            <div>  
                {/* {this.props.newFun(this.state.count,this.increseCount)} */}
                {this.props.children(this.state.count,this.increseCount)}
            </div>
            )
    }
}

export default RenderProps