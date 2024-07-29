import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

  capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)}`
    }

    async updateNews() {
        this.props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8e89aaf7400e41f0a5720571fcd7ff8f&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading: true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({articles : parsedData.articles,
          totalResults: parsedData.totalResults,
          loading: false})
        this.props.setProgress(100)
    }

    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4d217a4977864bffb706c6eb40c27acd&page=1&pageSize=${this.props.pageSize}`
        // this.setState({loading: true})
        // let data = await fetch(url)
        // let parsedData = await data.json()
        // this.setState({articles : parsedData.articles,
        //   totalResults: parsedData.totalResults,
        //   loading: false})
        this.updateNews();
    }

    handlePrevClick = async()=>{
      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4d217a4977864bffb706c6eb40c27acd&page=${this.state.page-1}&pagesize=${this.props.pageSize}`
      // this.setState({loading: true})
      //   let data = await fetch(url)
      //   let parsedData = await data.json()
      //   this.setState({
      //     articles : parsedData.articles,
      //     page: this.state.page-1,
      //     loading: false
      //   })
      await this.setState({page: this.state.page-1})
      this.updateNews();
    }

    handleNextClick = async ()=>{
      // if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))
      // {}
      // else
      // {
      //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4d217a4977864bffb706c6eb40c27acd&page=${this.state.page+1}&pagesize=${this.props.pageSize}`
      //   this.setState({loading: true})
      //   let data = await fetch(url)
      //   let parsedData = await data.json()
      //   this.setState({
      //     articles : parsedData.articles,
      //     page: this.state.page+1,
      //     loading: false
      //   })
        await this.setState({page: this.state.page+1})
        // adding await waits for the state to get changed, else, it justs calls without changing the state
        this.updateNews();
      // }
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=8e89aaf7400e41f0a5720571fcd7ff8f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
        })
    };

  render() {
    return (
      <div>

        <h2 className = "text-center my-3">Top Headlines from {this.capitalizeFirstLetter(this.props.category)}</h2>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength = {this.state.articles.length}
          next = {this.fetchMoreData}
          hasMore = {this.state.articles.length !== this.state.totalResults}
          loader = {<Spinner />}
        >

          <div className="container">
            <div className="row">
              
              {!this.state.loading && this.state.articles.map( (element) => {
                //for each element of the array, ie eeach news
                  return <div className="col-md-4" key = {element.url}>
                      <NewsItem title = {element.title} desc = {element.description} imageUrl = {element.urlToImage} url = {element.url}/>
                  </div>
              } ) }
            </div>
          </div>

        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
        <button type="button" disabled = {this.state.page<=1} class="btn btn-dark" onClick={this.handlePrevClick}>&larr;Prev</button>
        <button type="button" disabled = {this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} class="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
        </div> */}
      </div>
    )
  }
}

export default News

