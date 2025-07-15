import { Component } from "react";

class StateManagement extends Component{
    constructor(){
        super();
        this.state = {
            appName: 'Counter',
            count: 0,
        }
    }


    render(){
        //Change app Name
        const handleChangeAppName = () => {
            this.setState({appName: "Counter App"});
        }

        //Decrement function
        const handleDecrement = () =>{
            this.setState({count:this.state.count - 1});
        }


        //increment function
        const handleIncrement = () =>{
            this.setState({count: this.state.count + 1});
        }

        return(<>

            <h1>App Name: {this.state.appName}</h1> <button onClick = {handleChangeAppName}>Change App Name</button><br/><br/>
            <button onClick = {handleDecrement}>Decrement (-)</button>
            <h2>Count: {this.state.count}</h2>
            <button onClick = {handleIncrement}>Increment (+)</button>

        </>)
    }
}

export default StateManagement;