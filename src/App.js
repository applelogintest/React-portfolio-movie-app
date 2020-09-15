import React, { Component } from 'react';
import Movie from './js/Movie';
import './App.css';

class App extends Component {
  state = {};

  _callAPI = async () => {
    const ratingPromise = this._getMoviesPromise('rating');
    const downloadCountPromise = this._getMoviesPromise('download_count');
    const likeCountPromise = this._getMoviesPromise('like_count');

    const ratingMovies = await ratingPromise;
    const downloadCountMovies = await downloadCountPromise;
    const likeCountMovies = await likeCountPromise;

    this.setState({
      ratingMovies,
      downloadCountMovies,
      likeCountMovies,
    });
  };

  _renderMovies = () => {
    return (
      <Movie
        ratingMovies={this.state.ratingMovies}
        downloadCountMovies={this.state.downloadCountMovies}
        likeCountMovies={this.state.likeCountMovies}
      ></Movie>
    );
  };

  render() {
    const { movies } = this.state;
    console.log(movies);
    console.log(this.state);
    return (
      <div className={this.state ? 'App' : 'App--loading'}>
        {this.state ? this._renderMovies() : 'loading'}
      </div>
    );
  }

  componentDidMount() {
    this._callAPI();
  }

  _getMoviesPromise(search) {
    return new Promise((resolve, reject) => {
      fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=${search}`)
        .then((response) => response.json())
        .then((json) => resolve(json.data.movies))
        .catch((error) => console.log(error));
    });
  }
}

export default App;
