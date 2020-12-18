import React from 'react';
import CardList from './components/CardList';
// import {robots} from './robots'
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';

import './App.css';

class App extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        robots:[],
        searchField: ''
      }
  }

  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(users => this.setState({
  //     robots: users
  //   }))
    
  // }
  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())      
    .then(users => this.setState({robots: users}))
  }

  onSearchChange =(e) =>{
    e.preventDefault();
        this.setState({searchField: e.target.value});
  }

  render() {
    const {robots,searchField} = this.state;
    const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    if(!robots.length){
      return <h1 className="tc">LOADING</h1>
    }
    else{
      return (
        <div className='tc ma3'>
          <h1 className='f1'>Robo friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
         
          
        </div>
      );

    }

    

  }
  
}

export default App;
