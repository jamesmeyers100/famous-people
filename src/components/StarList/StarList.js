import React, { Component } from 'react';

class StarList extends Component {

    constructor(props){
        super(props);
        this.state = { star: {
            name: '',
            role:'',
            }
        }
    }

    handleChangeFor = (propertyName) => {
        return ( event ) => {
            console.log(propertyName);
            //Change the state using setState not =
            this.setState( {star:{
                ...this.state.star,
                [propertyName]: event.target.value
            } 
            });
        }
    }


    render(){
        return (
            <header >
                <div>
                    <div>
                        <h2>The Most Famous</h2>
                    </div>
                    <div>
                        Name: <input onChange={this.handleChangeFor('name')} />
                        Role: <input onChange={this.handleChangeFor('role')}/>
                        <input type="submit"/>
                    </div>
                </div>
                <p>{this.state.star.name} is famous for their role in {this.state.star.role}</p>
            </header>
        );
    }
}

export default StarList;