import React,{ Component } from "react" 
import axios from "axios" 


class Get extends Component {
    constructor() {
        super()
        this.state = {
            postList:[]
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            response => {
                this.setState(
                    {postList:response.data}
                    )
            }
        ).catch(error => {
            console.log(error)
        })
    }

    render() {
        
        return(
          
            <div>
                Get request
                {this.state.postList.map(data => <div key={data.id}>{data.title}</div>)}
            </div>
                
            
        )
    }
}

export default Get


