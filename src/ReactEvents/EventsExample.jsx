import { Component } from "react";

class EventsExample extends Component{

    constructor(){
        super();
        this.state = {
            appName: 'Calculator',
            count: 0
        }
    }

    render(){
        return <div>
            <button onClick={()=>{this.setState({appName:'Increment Decrement'})}}>Click Me to change App Name</button>
            <p>AppName: {this.state.appName}</p>
            <button onClick={()=>{this.setState({count:this.state.count-1})}}>-</button>
            <h2>Count: {this.state.count}</h2>
            <button onClick={()=>{this.setState({count:this.state.count+1})}}>+</button>
        </div>
    }

}

export default EventsExample;