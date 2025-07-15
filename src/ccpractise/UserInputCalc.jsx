import { Component } from "react";

class UserInputCalc extends Component{

    constructor(){
        super();

        this.state = {
            count: 0,
            userOutput: null,
        }
    }


    render(){
        //Button handle add
        const handleAdd = () =>{
            const userValue = this.state.userOutput;
            
            if(userValue){
                const newCount = this.state.count + Number(userValue);
                this.setState({count: newCount});
            }
            else{
                this.setState({count: this.state.count + 1});
            }
            
        }

        return(<>
            <h1>User Input Calculator</h1>
            <h3>Count: {this.state.count}</h3>
            <div>
                <label htmlFor="">Enter Number: </label>
                <input type="number" onChange={(event)=>{this.setState({userOutput: event.target.value})}}/>
                <p>Your Input is: {this.state.userOutput}</p>
                <button onClick={handleAdd}>(Click Me) Your input will be added to count or else increase by 1</button>
            </div>

            
        </>)
    }
}

export default UserInputCalc;