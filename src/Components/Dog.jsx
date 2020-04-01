import React, { Component } from 'react';

class Dog extends Component {
    render(){

        const description = this.props.dog

        return (
            <div>
                <h2>{description.name}</h2>1
                <h4>{description.age} years old</h4>
                {description.facts.map( f => (
                    <p className='fact'>{f}</p>
                ))}
                <button onClick={this.props.history.goBack}>Go back!</button>
            </div>
        )
    }
}

export default Dog;