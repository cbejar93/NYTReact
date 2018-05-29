import React from "react";

const ArticleCard = (props) => (
  <div className= "row">
     {props.articles.map(article => (
        <div className="card w-75">
        <div className="card-body">
          <h5 className="card-title">{article.headline.main}</h5>
          <p className="card-text">{article.snippet}</p>
          <a href={article.web_url} class="btn btn-primary">Article</a>
        </div>
      </div>
     ))}
  </div>
    


)

export default ArticleCard;