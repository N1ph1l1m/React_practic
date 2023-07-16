import React , {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'reactstrap';

export default class App extends Component{
    constructor(props){
        super (props)

        this.state = {
            name: "Alex",
            count: 1,
        }
        this.handler = this.handler.bind(this)
        this.plus = this.plus.bind(this)
        this.minus = this.minus.bind(this)
        this.reset = this.reset.bind(this)
    }
    handler(){
        this.setState(state => ({
            name:"Ingrid"
        }));
    }
    plus(){
        this.setState(state => ({
            count:state.count+1
       }))
    }
    minus(){
       this.setState(state => ({
        count:state.count-1
       }))
    }
    reset(){
        this.setState(state => ({
             count:0
        }))
     }

    render(){
        const name = this.state.name;
        const count = this.state.count;
        return(
            <div>
                <div class="container">
                <h1> Name {name}</h1>
                <h2> {count}</h2>
            <div class="row">
                <div class="col">
                <Button color="primary"
                        size="sm"
                        onClick={this.handler}>
                            Change name 
                </Button>
                </div>
                <div class="col">
                <Button color="primary"
                        size="sm"
                        onClick={this.plus}>
                            Plus
                </Button>
                </div>
                <div class="col">
                <Button color="primary"
                        size="sm"
                        onClick={this.minus}>
                            Minus
                </Button>
                </div>
                <div class="col">
                <Button color="primary"
                        size="sm"
                        onClick={this.reset}>
                            Reset
                </Button>
                </div>
            </div>
            </div>
            </div>
        );
    }
}