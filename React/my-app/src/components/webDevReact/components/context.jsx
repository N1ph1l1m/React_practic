import React, { Component, Fragment } from "react";

// простой способ, без контекста
const LevelThree = ({title}) =>
    <h1>{title}</h1>
    
const LevelTwo = ({title}) => <LevelThree title={title}/>

const LevelOne = ({title}) => <LevelTwo title={title}/>

// с контекстом
const TitleContext = React.createContext();

const WithContext3 = () => (
    <TitleContext.Consumer>
        {({title, number2 , click}) => (
            <Fragment>
            <h1 onClick={click}>{title}</h1>
            <h2>Sum 2 + {number2} = ?</h2>
            </Fragment>
        )}
      
    </TitleContext.Consumer>
)   
const WithContext2 = () => <WithContext3/>

const WithContext1 = () => <WithContext2/>



class LessonContext extends Component{
    render(){
        return(
            <>
            <LevelOne title="simple title"/>

            <TitleContext.Provider value={{title: 'Context text', number2:5 , click: ()=>{console.log("Click")}}}>
                <WithContext1/>
            </TitleContext.Provider>
       
            </>
        )
    }
}
export default LessonContext;