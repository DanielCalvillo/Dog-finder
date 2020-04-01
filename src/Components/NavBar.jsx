import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

class NavBar extends Component {
    constructor(props){
        super(props)
    }

    render(){

        var dogs = this.props.dogs.map( d => (
            <NavLink activeClassName="active-link" to={`/dog/${d.name}`}>
                {d.name}
            </NavLink>
          ))

        return(
            <div>
                <NavLink to="/">
                    Home
                </NavLink>
                {dogs}
            </div>
        )
    }
}

export default withRouter(NavBar);