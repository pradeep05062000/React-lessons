import React,{Component} from 'react' 
import ReactDOM from 'react-dom'

class Portal extends Component {
    render() {
        return ReactDOM.createPortal(
            <h1>Portal demo</h1>,
            document.getElementById('new-portal')
        )
    }
}

export default Portal