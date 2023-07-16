import React , {Component} from "react";

export default class App extends Component{
    constructor(props){
        super (props)

        this.state = {
            name: "Alex"

        }
    }
    render(){
        return(
            <div>
                <h1> Class Component {this.state.name}</h1>
            </div>
        );
    }
}