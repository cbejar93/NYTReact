import React from "react";

const ArticleCard = (props) => (
  <div className= "row">
     {props.articles.map((article, index )=> (
        <div className="card w-75">
        <div className="card-body">
          <h5 className="card-title">{article.headline.main}</h5>
          <p className="card-text">{article.snippet}</p>
          <a href={article.web_url} className="btn btn-primary">Article</a>
          <button value={index} onClick={props.saveArticle} className="btn btn-primary">Save</button>
        </div>
      </div>
     ))}
  </div>
    


)

export default ArticleCard;