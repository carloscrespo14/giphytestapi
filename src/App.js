import React, { Component } from 'react';
import NavBar from './components/navbar_component/Navbar';
import Search from './components/search_component/Search';
import Trending from './components/trending_component/Trending';
import Content from './components/content_component/Content';
import GiphyService from './services/giphy.service';
import './App.css';


export class App extends Component {

  state = {
    searchValue: null,
    trendingGifs: [],
    searchingGif: []
  }

  getSearchValue = (event) => {
    this.setState({searchValue: event.target.value});
  }

  getSearch = async () => {
    let searchArray = [];
    const giphyService = new GiphyService();
    searchArray = await giphyService.search(this.state.searchValue);
    this.setState({searchingGif: searchArray.data});
  }

  async componentDidMount() {
    let trendingArray = [];
    const giphyService = new GiphyService();
    trendingArray = await giphyService.trending();
    this.setState({trendingGifs: trendingArray.data});
  }

  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <Search 
          value={this.state.searchValue} 
          click={this.getSearch.bind(this)}
          changed={this.getSearchValue}>
        </Search>
        <Trending list={this.state.trendingGifs}></Trending>
        <Content searchResult={this.state.searchingGif}></Content>
      </div>
    );
  }
}

export default App;
