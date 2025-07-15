import {Component} from 'react'

export default class SimpleState extends Component{
    constructor(){
        super()
        this.state = {
            candidateName:'Yuireising',
            candidateLastName: 'Ngalung'
        }
    }

    render(){
        return <div>
            <h1>Simple State Learnings.</h1>
            <p>Hello Welcome {this.state.candidateName} {this.state.candidateLastName} !!!</p>
        </div>
    }
}