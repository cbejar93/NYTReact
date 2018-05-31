import React from "react";

const SavedCard = (props) => (
  <div className= "row">
     {props.savedArticles.map((article, index )=> (
        <div className="card w-75">
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text">{article.summary}</p>
          <a href={article.url} className="btn btn-primary">Article</a>
          <button value={article._id} onClick={props.removeArticle} className="btn btn-primary">Delete</button>
        </div>
      </div>
     ))}
  </div>
    


)

export default SavedCard;