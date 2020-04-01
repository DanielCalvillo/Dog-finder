import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import "../Assets/Home.css"

class Home extends Component {
    constructor(props){
        super(props)
    }

    render(){

        var dogs = this.props.dogs.map( d => (
            <div className="Dog col-md-4 text-center" key={d.name}>
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
                <div className="container">
                    <div className="row">
                        {dogs}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;