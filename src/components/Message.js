import React, { Component } from 'react'

class Message extends Component {

    constructor(){
        super()
        this.state = {
            message:'Message for Visitor'
        }
    }

    changeMessage() {
        this.setState({
            message:'this is new message'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Change message</button>
            </div>
            
        )
    }
}

export default Message