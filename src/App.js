import React, {Component} from 'react';
import Header from './components/Header'
import './App.css';

class App extends React.Component {
  componentDidMount(){
    console.log('Component DID MOUNT');
  }

  //return 하는 부분
  render(){
    const name = 'Lain';

    return (
      <div className="App">
        <Header name={name} foo="bar" />        
      </div>
    );
  }
}


export default App;
