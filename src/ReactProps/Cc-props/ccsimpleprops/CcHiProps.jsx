import { Component } from "react";

class CcHiProps extends Component{

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         name: props.name,
    //         age:props.age
    //     }
    // }

    render(){
        return(
            <div>
                <h1>Hi Class Component Props</h1>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
            </div>
        )
    }

}

export default CcHiProps;