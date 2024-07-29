import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title, desc, imageUrl, url} = this.props;
    return (
      <div>
        <div className="card my-3 mx-3" style={{width: "18rem"}}>
            <img src = {imageUrl ? imageUrl : "https://www.shutterstock.com/shutterstock/photos/1928997539/display_1500/stock-vector-breaking-news-template-with-d-red-and-blue-badge-breaking-news-text-on-dark-blue-with-earth-and-1928997539.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <a href={url} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        
      </div> 
    )
  }
}

export default NewsItem

