import React from 'react';
import logo from '../logo.svg';


//ES6형태
//Stateless component, dumb component
const Header = props => {
    const {name, foo} = props;
    return(
       
       //console.log(props);
       //console.log(props.name);
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
            My name is {props.name},
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    )
}



export default Header;