import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import React, { Component } from 'react'
import News from "./Components/News";
import Navbar from './Components/Navbar';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

  state = {
    progress: 0
  } 

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
          
        <Router>
          <Navbar />

          <LoadingBar 
            color = '#f11946'
            height = {3}
            progress = {this.state.progress}
          />

          <div className='container'>
            <Routes>
              <Route path='/' element={<News setProgress = {this.setProgress} key='general' pageSize={6} country='in' category='general' />}></Route>
              <Route path='/business' element={<News setProgress = {this.setProgress} key='business' pageSize={6} country='in' category='business' />}></Route>
              <Route path='/entertainment' element={<News setProgress = {this.setProgress} key='entertainment' pageSize={6} country='in' category='entertainment' />}></Route>
              <Route path='/health' element={<News setProgress = {this.setProgress} key='health' pageSize={6} country='in' category='health' />}></Route>
              <Route path='/science' element={<News setProgress = {this.setProgress} key='science' pageSize={6} country='in' category='science' />}></Route>
              <Route path='/sports' element={<News setProgress = {this.setProgress} key='sports' pageSize={6} country='in' category='sports' />}></Route>
              <Route path='/technology' element={<News setProgress = {this.setProgress} key='technology' pageSize={6} country='in' category='technology' />}></Route>
            </Routes>
          </div> 
          
        </Router>
      </div>
    )
  }
}


