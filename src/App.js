import React, {Component} from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {

  state = {
    quote : ''
  }

  componentDidMount(){
    console.log('inside comp did mount')
    this.fetchQuote();
  }

  fetchQuote = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then( (res) => {
      let advice = res.data.slip.advice
      this.setState({
        quote : advice
      })
    }).catch( (error) => {
      console.log(error)
    })
  }
  render(){
    return(
      <div className='app'>
        <div className = 'card'>
        <h1 className = 'heading'>
          {this.state.quote}
          <button className='button' onClick={this.fetchQuote}>
          Next Quote
          </button>
        </h1>
        </div>
      </div>
    )
  }
}

export default App;