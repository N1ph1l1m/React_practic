import React from "react";
import styled from "styled-components";



const CompositionWrap = styled.div`
margin:0px auto;
width:400px;
height:400px;
border:1px solid red;
`;
const Item1 = styled.div`
margin:0px auto;
min-width:110px;
min-height:100px;
margin-bottom:20px;
`
const Item2 = styled.div`
margin:0px auto;
height:200px;
padding-left:20px;
`
function FancyBorder(props){


    return(
        <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
        </div>
    )
}
function Dialog(props){
    return(
        <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
            {props.message}
        </p>
        </FancyBorder> 
    )
}

export default class Composition extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            login:'',
        }
        this.handleChangeItem2 = this.handleChangeItem2.bind(this);
        this.handleItem2SignUp = this.handleItem2SignUp.bind(this);
    }

    handleChangeItem2(e){
        this.setState({login: e.target.value});
    }
    handleItem2SignUp(){
        alert(`Welcome to Web Site , ${this.state.login}!`);
    }

    render() {
        return (
            <CompositionWrap>
            <Item1>
                <Dialog title='Hello' message="Thank you"/>
            </Item1>
            <Item2>
            <Dialog title = "Mars exploration program"
                message = "How should I address you?"/>
            <input value={this.setState.login} onChange={this.handleChangeItem2}/>
            <button onClick={this.handleItem2SignUp}>
                Sign me up!
            </button>
            </Item2>
            </CompositionWrap>
        );
    }
}