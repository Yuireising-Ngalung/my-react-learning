import { Component, Fragment } from "react";

class AddFruitArray extends Component{
    constructor(){
        super();

        this.state = {
            isAvailable : true,
            fruits : ['Apple', 'Mango', 'Banana', 'Orange'],
            userInput: null
        }
    }


    render(){


        //handle userinput
        const handleaddFruit = () =>{
            const input = this.state.userInput;

            this.setState([...this.state.fruits, input]);
        }
       


        return(<>
            <h1>Fruit Array</h1>
            <hr />

            {
                (this.state.isAvailable)
                ?
                this.state.fruits.map((value, index)=>{
                    return<Fragment key={index}>
                        <p>{value}</p>
                    </Fragment>
                })
                :
                <h2>Fruits are not Available</h2>
            }
            <div>
                <label htmlFor="">Enter Fruit Name: </label>
                <input type="text" onChange={()=> {this.setState(this.state.userInput)}}/>
                
            </div>
            <button onClick = {handleaddFruit}>Add Fruit</button>
        </>)
    }
}

export default AddFruitArray;