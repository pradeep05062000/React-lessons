import React from 'react' 


const highOrderComponent = (WrappedCompoent,incrementBy) =>  {
    class HighOrderComponent extends React.Component {
        constructor(props) {
            super(props) 
            this.state = {
                count: 0
            }
        }
    
        incrementCount = () => {
            this.setState(
                preState => {
                    return ({count: preState.count + incrementBy})
                }
            )
        }

        render() {
            
            return <WrappedCompoent 
            count={this.state.count} 
            incrementCount={this.incrementCount}
            {...this.props}
            />
        }
    }

    return HighOrderComponent
}

export default highOrderComponent