import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title, desc, imageUrl} = this.props;
    return (
      <div>
        <div className="card my-3 mx-3" style={{width: "18rem"}}>
            <img src = {imageUrl ? imageUrl : "https://c.ndtvimg.com/2023-12/bs6kptd_virat-kohli-rohit-sharma-reuters-_625x300_25_December_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        
      </div> 
    )
  }
}

export default NewsItem

