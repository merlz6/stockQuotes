import React, { Component } from 'react';
import { BrowserRouter ,Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
  super();
  this.state = {
    notes: [],
    note: null,
    quotes:null,
    dailyGainers:[],
    dailyLosers:[],
    value:'',
    foundQuote:null
  };
  this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

  componentDidMount(){
    fetch('https://financialmodelingprep.com/api/v3/stock/gainers')
      .then(res => res.json())
      .then(res => {
        console.log(res.mostGainerStock)
        this.setState({dailyGainers:res.mostGainerStock})
        console.log(this.state.dailyGainers)
      }, [])
      .catch((error) => {
        console.log("error", error)
      })

      fetch('https://financialmodelingprep.com/api/v3/stock/losers')
        .then(res => res.json())
        .then(res => {
          console.log(res.mostLoserStock)
          this.setState({dailyLosers:res.mostLoserStock})
          console.log(this.state.dailyLosers)
        }, [])
        .catch((error) => {
          console.log("error", error)
        })
  }

  handleChange(event) {
    this.setState({ value: event.target.value});
  }
  handleSubmit(event) {
    fetch('https://financialmodelingprep.com/api/v3/company/profile/' + this.state.value)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({foundQuote:res})
        // console.log(this.state.dailyLosers)
      }, [])
      .catch((error) => {
        console.log("error", error)
      })
  event.preventDefault();
}


render(){
  return (
    <div className="App">
    <div className="winsAndLosesBox">
    <div className="gainersBox">
      <h2>Top Gainers </h2>
        {this.state.dailyGainers.map((item, key) => (
          <div className="gainersTickerBoxes">
          <h3 >{key + 1}:  {item.ticker}  </h3>
          <h4>{item.changesPercentage}</h4>
          </div>
        ))}
    </div>
    <div className="losersBox">
      <h2>Top Losers </h2>
        {this.state.dailyLosers.map((item, key) => (
          <div className="losersTickerBoxes">
          <h3 >{key + 1}:  {item.ticker}  </h3>
          <h4>{item.changesPercentage}</h4>
          </div>
        ))}
    </div>
    </div>
    <SearchForm
          {...this.state}
          search={this.handleSubmit}
          change={this.handleChange}
        />
{this.state.foundQuote != null ? <p>{this.state.foundQuote.symbol} - {this.state.foundQuote.profile.price}</p> : ''
} 


    </div>
  );
}
}
export default App;
