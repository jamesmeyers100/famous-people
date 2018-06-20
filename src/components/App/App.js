import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import NewStarList from '../NewStarList/NewStarList'

class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
        star: { name: '', famousFor:'' },
        starList: [],
    };

}

handleChangeFor = (propertyName) => {
    return ( event ) => {
        console.log(propertyName);
        //Change the state using setState not =
        this.setState( { star: { 
            ...this.state.star,
            [propertyName]:event.target.value
        } 
        });
    }
}

handleSubmit = (event) => {
    // alert(this.state.star + ' was submitted')
    event.preventDefault();
    console.log(this.state.star)
    this.setState({
        starList: [...this.state.starList, this.state.star]
    })
    this.setState({star: {name: '', famousFor: ''} });

}

render() {
  return (
    <div className="App">
      <Header />
      <NewStarList />
    </div>
    );
  }
}

export default App;
