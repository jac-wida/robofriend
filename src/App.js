import React from 'react';
import CardList from './components/CardList';
// import {robots} from './robots'
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import ErrorBoundry from './components/ErrorBoundry'
import {setSearchField,requestRobots} from  './actions'
import { connect}  from 'react-redux'

import './App.css';

class App extends React.Component {
  

  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(users => this.setState({
  //     robots: users
  //   }))
    
  // }
  componentDidMount(){
    this.props.onRequestRobots()
      }

  // onSearchChange =(e) =>{
  //   e.preventDefault();
  //       this.setState({searchField: e.target.value});
  // }

  render() {
      const {searchField, onSearchChange,robots,isPending} = this.props;
    
    const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    if(isPending){
      return <h1 className="tc">LOADING</h1>
    }
    else{
      return (
        <div className='tc ma3'>
          <h1 className='f1'>Robo friends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
            <CardList robots={filteredRobots}/>
            </ErrorBoundry>
            
          </Scroll>
         
          
        </div>
      );

    }

    

  }
  
}

const mapStateToProps = state =>({
  searchField:  state.searchRobots.searchField,
  isPending: state.requestRobots.isPending,
  robots: state.requestRobots.robots,
  error: state.requestRobots.error
})

const mapDispatchToProps =(dispatch)  =>({
  onSearchChange: e =>  dispatch(setSearchField(e.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
})

export default connect(mapStateToProps, mapDispatchToProps) (App);
