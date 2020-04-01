import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'

class Home extends Component {
    constructor(props){
        super(props)
    }

    render(){

        var dogs = this.props.dogs.map( d => (
            <div>
                <Link to={`/dog/${d.name}`}>
                    <img src={d.src} alt={d.name} />
                </Link>
                <h3>{d.name}</h3>
            </div>
          ))

        return(
            <div>
                <Redirect to='/' />
                <h1 className='display-1 text-center'>Click a dog!</h1>
                {dogs}
            </div>
        )
    }
}

export default Home;