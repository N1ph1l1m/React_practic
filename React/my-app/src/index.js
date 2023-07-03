import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';



const Header = () => {
    return <h2>Hello world 2</h2>

}
const Field = () => {
    return <input type="text" placeholder='Type here'/>
}

const Btn = () => {
    return <button/>
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
  