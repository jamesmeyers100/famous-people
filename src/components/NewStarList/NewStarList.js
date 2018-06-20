import React, { Component } from 'react';

class NewStarList extends Component {

    render(){
        return (
            <header >
                <h2>The Most Famous</h2>
                <form onSubmit={this.handleSubmit}>
                    Name: <input onChange={this.handleChangeFor('name')} placeholder="Name" value={this.state.star.name}/>
                    Famous for: <input onChange={this.handleChangeFor('famousFor')} placeholder="Famous for" value={this.state.star.famousFor}/>
                    <input type="submit" value="Submit"/>
                </form>
                <ul>
                    {this.state.starList.map( star => 
                        <li key={star.name}>{star.name} is famous for their role in {star.famousFor}</li>)}
                </ul>
            </header>
        );
    }
}

export default NewStarList;