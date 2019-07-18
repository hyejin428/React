import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'

import './App.css';


class App extends React.Component {
  componentDidMount(){
    console.log('Component DID MOUNT');
  }

  //return 하는 부분
  render(){
    const name = 'Lain';

    return (
      <BrowserRouter>
        <div className="App">
        <Header name={name} foo="bar" /> 
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About}/>
       
                
        </div>
      </BrowserRouter>

      
    );
  }
}


export default App;
