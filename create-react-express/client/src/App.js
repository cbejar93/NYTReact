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
      savedArticles: [],
      query: "",
      bdate: "",
      edate: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount () {
    this.databaseArticles();
  }

  saveArticle= (event)=> {
    event.preventDefault();
    console.log(event.target.value);
    let i = event.target.value;
    this.hellothere(i);
  }

  hellothere= (x) => {
    // console.log(this.state.articles[x]);
    console.log(x);
    let saveNews = this.state.articles[x];
    let title = saveNews.headline.main;
    let snippet = saveNews.snippet;
    let url = saveNews.web_url;
    let bodyreq = {title: title, snippet: snippet, url:url};
    console.log(bodyreq);
    API.createArticles(bodyreq);
  }

  databaseArticles = () => {
    API.getSavedArticles()
    .then(res =>{
    this.setState({savedArticles: res.data})
    console.log(this.state.savedArticles);
    })
    .catch(err =>{console.log(err)})
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
               saveArticle = {this.saveArticle}
            />                
         
        </div>
      </div>
    );
  }
}

export default App;
