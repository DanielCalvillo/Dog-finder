import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
import Dog from './Components/Dog';
import NavBar from './Components/NavBar';
import Home from './Components/Home';

import whiskey from './Assets/whiskey.jpg';
import hazel from './Assets/hazel.jpg';
import tubby from './Assets/tubby.jpg';
import './Assets/App.css';

var home = () => <h1>Click a Dog!</h1>

class App extends Component {

    static defaultProps = {
      dogs: [
        {
          name: "Hazel",
          age: 3,
          src: hazel,
          facts: [
            "Hazel has soooo much energy!",
            "Hazel is highly intelligent.",
            "Hazel loves people more than dogs."
          ]
        },
          {
            name: "Whiskey",
            age: 5,
            src: whiskey,
            facts: [
              "Whiskey loves eating popcorn.",
              "Whiskey is a terrible guard dog.",
              "Whiskey wants to cuddle with you!"
            ]
          },
          {
            name: "Tubby",
            age: 4,
            src: tubby,
            facts: [
              "Tubby is not the brightest dog",
              "Tubby does not like walks or exercise.",
              "Tubby loves eating food."
            ]
          }
        ]
  }

  constructor(props){
      super(props)
  }

  render() {

      var dogs = this.props.dogs.map( d => (
          <Route 
            exact path = {`/dog/${d.name}`}
            render={routeProps => <Dog {...routeProps} dog={d} />}
          />
      ))

      return (
          <div className="App">
              <NavBar dogs={this.props.dogs}/>
              <Switch>
                <Route 
                  exact path = '/'
                  render={routeProps => <Home {...routeProps} dogs={this.props.dogs}/>}
                />
                {dogs}
                <Route render={routeProps => <Home {...routeProps} dogs={this.props.dogs}/>} />
              </Switch>
          </div>
      )
  }
}

export default App;
