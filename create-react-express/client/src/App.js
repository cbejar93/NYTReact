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
      this.setState({query: ""});
      this.setState({bdate: ""});
      this.setState({edate: ""});
  }

  handleChange = event => {
      console.log(event.target);
      this.setState({query: event.target.query});
      this.setState({bdate: event.target.bdate});
      this.setState({edate: event.target.edate});
      console.log(this.state.edate);
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
          <form onSubmit = {this.handleFormSubmit}>
            <Input
            name="topicsearch"
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
            placeholder= "Search a Topic"
            />
            <Input
            name="Startdate"
            type= "text"
            value={this.state.bdate}
            onChange={this.handleChange}
            placeholder="YYYY/MM/DD Start"
            />
            <Input
            name="Enddate"
            value={this.state.edate}
            type= "text"
            onChange={this.handleChange}
            placeholder="YYYY/MM/DD End"
            />
            <Button 
            type="success"
            type="submit"
            className="input-lg"
            > Search!
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
