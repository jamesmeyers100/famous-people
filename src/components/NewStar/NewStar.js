import React, { Component } from 'react';

class NewStar extends Component {

    render(){
        return (
                <div>
                <h2>The Most Famous</h2>
                <form onSubmit={this.props.handleSubmit}>
                   <label>Name:</label>
                        <input value={this.props.newStar.name} 
                            onChange={this.props.handleChangeFor('name')}/>
                    <label>Famous for:</label>
                        <input value={this.props.newStar.famousFor} 
                          onChange={this.props.handleChangeFor('famousFor')} />
                    <input type="submit" value="Submit"/>
                </form>
                </div>
        );
    }
}

export default NewStar;