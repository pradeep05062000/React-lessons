import React, {Component} from 'react' 


class Refs extends Component {
    constructor(){
        super()

        this.myRefs = React.createRef()
    }
    getValue = () => {
        console.log(this.myRefs.current.value)
        
    }
    componentDidMount() {
        this.myRefs.current.focus()
    }
    render() {
        return (
            <>
                <label>Username</label>
                <input type="text" ref={this.myRefs} onChange={this.getValue} />
            </>
        )
    }
}

export default Refs