import React, { Component } from 'react';

class Star extends Component {

    render(){
        return (
            <ul>
                <div>
                    <li key={this.props.star.name}>{this.props.star.name}
                     is famous for their role in {this.props.star.famousFor}</li>
                </div>
            </ul>
        );
    }
}

export default Star;