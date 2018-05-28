import React, { Component } from "react";
import "./App.css";
import API from "./utils/API";
import Input from "./components/Input"
import Button from "./components/Button"

class App extends Component {
  state = {
    articles: [],
    query: "",
    bdate: "",
    edate: ""
  }

  componentDidMount () {
      // this.loadArticles();
  }

  handleFormSubmit= event => {
      event.preventDefault();
      this.loadArticles(this.state.query, this.state.bdate, this.state.edate);
  }

  handleInputChange = event => {
      console.log(event.target)
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
  }

  loadArticles = () => {
    API.getArticles(this.state.query, this.state.bdate, this.state.edate)
      .then( res => console.log(res.data))
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <Input
          name="topicsearch"
          value={this.state.query}
          onChange={this.handleInputChange}
          placeholder= "Search a Topic"
          />
          <Input
          name="Startdate"
          value={this.state.bdate}
          onChange={this.handleInputChange}
          placeholder="YYYY/MM/DD Start"
          />
          <Input
          name="Enddate"
          value={this.state.edate}
          onChange={this.handleInputChange}
          placeholder="YYYY/MM/DD End"
          />
          <Button 
          onClick={this.handleFormSubmit}
          type="success"
          className="input-lg"
          > Search!
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
