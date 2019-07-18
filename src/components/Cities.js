import React, {Component} from 'react';
import { fsyncSync } from 'fs';
import { domainToASCII } from 'url';
import <Link> from react-route-dom

class Cities extends Component{
    state = {
        cities: []

    }

    componentDidMount(){
        const API = 'http://demo6468405.mockable.io/weather-crawlers/cities';

        fetch(API) //성공하면 then안으로 들어감
        .then(data => data.json())
        //.then(result => console.log(result));
        .then(result =>{
            this.state.cities = result;
            this.setState({
                cities: result
            })
        } );
    }

    render(){
        const {cities} = this.state;
        console.log('===========render');
        console.log(this.state.cities);


        return(
            <div> <h2>List</h2>
            <ul>
                {cities.map(item =>{
                    return <li key={item}>
                    <Link to={'/city/${item}'}>{item}</Link>
                    </li>;
                })}
                <li>Seoul</li>
                <li>Gy</li>
            </ul>
            </div>)
            
        
    };


}

export default Cities