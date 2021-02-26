import React, { Component } from 'react' 

class ErrorBunduling extends Component {

    constructor(props) {
        super() 
        this.state = {
            hasError:false
        }
    }

    static getDerivedStateFromError(error) {
        return{
            hasError:true
        }
    }

    render() {
    if(this.state.hasError){
        return (
            <div>
                <h1>Something went wrong</h1>
            </div>
        )
    }
    return this.props.children
        
    }
}

export default ErrorBunduling