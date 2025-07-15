import { Component } from "react";
import CcHiProps from "./CcHiProps";

class CcHelloProps extends Component{

    render(){
        return(
            <div>
                <h1>Hello Class Coponent Props</h1>

                {/*Import CcHiProps Component*/}
                <CcHiProps 
                    name={'Yuireising'}
                    age={26}
                />
            </div>
        )
    }
}

export default CcHelloProps;