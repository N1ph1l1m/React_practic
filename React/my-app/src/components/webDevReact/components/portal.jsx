import React, { Component,Fragment } from "react";
import ReactDOM from 'react-dom';

//Компонент NewPortal находется не в корневым блоке React.В данном случае он находится в теле body над корневым компонентом root.
class NewPortal extends Component{
    el = document.createElement('div');

    componentDidMount(){
        document.body.prepend(this.el);
    }

    componentWillUnmount(){
        document.body.removeChild(this.el);
    }
    render(){
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}

class Portal extends Component{

    state = {
        counter:0,
    }
    handlerClick = () => {
        this.setState(({ counter })=>({
            counter: counter + 1,
        }))
        console.log("Click");
    }


    render(){
        return(
            <div  onClick={this.handlerClick}>
            <h1>Counter  : {this.state.counter}</h1>
            <NewPortal>
                <h1>Text in Portal</h1>
                <button>Counter +1 </button>
            </NewPortal>
            </div>
        )
    }
}
export default Portal;