import React, {Component} from 'react'


class Form extends Component {
    constructor(){
        super()

        this.state = {
            username:'',
            password:'',
            subject:''
        }

    }

    handleUsernameOnChange = (event) => {
        this.setState({
            username:event.target.value
        })
        console.log(event)
    }

    handlePasswordOnChange = event => {
        this.setState({
            password:event.target.value
        })
    }

    handleSubjectOnChange = event => {
        this.setState({
            subject:event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username},${this.state.password},${this.state.subject}`)
        event.preventDefault()
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>username:</label>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameOnChange}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={this.state.password} onChange={this.handlePasswordOnChange}></input>
                </div>
                <div>
                    <label>Subject</label>
                    <select value={this.state.subject} onChange={this.handleSubjectOnChange}>
                        <option hidden>Subject</option>
                        <option>React</option>
                        <option>Nodejs</option>
                        <option>Django</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default Form