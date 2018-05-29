import React, { Component } from "react";
import "./App.css";
import API from "./utils/API";
import Input from "./components/Input";
import ArticleCard from "./components/ArticleCard";

class App extends Component {
  constructor () {
    super();
    this.state = {
      articles: [],
      query: "",
      bdate: "",
      edate: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount () {
      // this.loadArticles();
  }

  handleFormSubmit= event => {
      event.preventDefault();
      this.setState({[event.target.name]: [event.target.value]});
      console.log(this.state.query, this.state.bdate,  this.state.edate);
      this.loadArticles();
      this.setState({query: ""});
      this.setState({bdate: ""});
      this.setState({edate: ""});
  }

  handleChange = event => {
      console.log(event.target.value);
      console.log(event.target.name)
      this.setState({[event.target.name]: [event.target.value]});
      // console.log(this.state.edate);
  }

  loadArticles = () => {
    API.getArticles(this.state.query, this.state.bdate, this.state.edate)
      .then( res => { 
        // console.log(res.data.response.docs);
      this.setState({articles: res.data.response.docs});
      console.log(this.state.articles); 
      })
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
            <Input
            handleChange= {this.handleChange}
            handleFormSubmit = {this.handleFormSubmit}
            />
            
          
            <ArticleCard
               articles = {this.state.articles}
            />                
         
        </div>
      </div>
    );
  }
}

export default App;
