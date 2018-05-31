import axios from "axios";

export default {
    nytAPIkey:  "c44ee857a584448bbda87e4ef872a846",

    nytUrl: "https://api.nytimes.com/svc/search/v2/articlesearch.json",

    getArticles: function (q, bdate, edate) {
        return axios.get(`${this.nytUrl}?q=${q}?begin_date=${bdate}?end_date=${edate}&api_key=${this.nytAPIkey}`)
    },

    createArticles: function(articleData){
        return axios.post("/api/articles", articleData);
    },
    getSavedArticles: function (){
        return axios.get("api/articles")
    }
} 