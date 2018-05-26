import axios from "axios";

export default {
    nytAPIkey:  "c44ee857a584448bbda87e4ef872a846",

    nytUrl: "https://api.nytimes.com/svc/search/v2/articlesearch.json?",

    getArticles: function () {
        return axios.get(`${this.nytUrl}?api_key=${this.nytAPIkey}?begin_date=20100326?end_date=20100328`)
    }
} 