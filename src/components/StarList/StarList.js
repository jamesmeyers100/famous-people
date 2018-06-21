import React, { Component } from 'react';
import Star from '../Star/Star'

class StarList extends Component {

    render(){
        return (
            <div>
                <h2>All the Stars</h2>
                <ul>
                    {this.props.starList.map( person => <Star star={person}/>)}
                </ul>
            </div>
        );
    }
}

export default StarList;