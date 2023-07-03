import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';



const Header = () => {
    return <h2>Hello world 2</h2>

}
const Field = () => {
    const placeText = 'Enter here,please'
    const styleField = {
        width:'300px'
    }
    return <input 
                style={styleField}
                type="text"
                placeholder={placeText}
                autoComplete=''
                className='first'
                htmlFor= ""/>
}

const Btn = () => { 
    const logged = true;
    const text = "Log in";

    // const res = () =>{v 
    //     return "Sign in";
    // }
    return <button>{logged ?  "Enter" :text}</button>
}
const App = () => {
    return (
        <div>
            <Header/>
            <Field/>
            <Btn/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


reportWebVitals();
  