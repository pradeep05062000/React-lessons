import React, { Component } from 'react'


class ConditionalRender extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn:false
        }
    }
    render() {

        // return this.state.isLoggedIn && <div>Welcome Pradeep</div>

        // return this.state.isLoggedIn ? <div>Welcome Pradeep</div> : <div>Welcome Guest</div>
        let message
        if(this.state.isLoggedIn) {
            message = <div>Welcome pradeep</div>
        } else {
            message = <div>Welcome Guest</div>
        }
        return message

        // return (
        //     <div>
        //     Welcome Pradeep
        // </div>
        // )
       
    }
}

export default ConditionalRender