import React,{ Component } from "react"
import ComponentC from "./ComponentC";
import UserContext from "./Context"

class ComponentB extends Component{
    render(){
        return (
            <div>
                Component B context {this.context}
                <ComponentC />
            </div>
        
            )
    }
}

ComponentB.contextType = UserContext

export default ComponentB