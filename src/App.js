import React, { Component } from 'react';
import Movie from './components/Movie';
import './App.css';

class App extends Component {
  state = {};

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? 'App' : 'App--loading'}>
        {movies ? this._renderMovies() : 'loading'}
      </div>
    );
  }

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    return (
      <Movie
        movies={this.state.movies}
        bg={this.state.bg}
        searchMovies={this.state.searchMovies}
        movieCount={this.state.movieCount}
        handleInputSearchChange={this._handleInputSearchChange}
      ></Movie>
    );
  };

  _getMovies = async () => {
    const ratingPromise = this._getMoviePromise('rating');
    const downloadPromise = this._getMoviePromise('download_count');
    const likeCountPromise = this._getMoviePromise('like_count');

    const ratingMovies = await ratingPromise;
    const downloadCountMovies = await downloadPromise;
    const likeCountMovies = await likeCountPromise;

    this.setState({
      movies: {
        rating: ratingMovies,
        download: downloadCountMovies,
        like: likeCountMovies,
      },
      bg: {
        rating: ratingMovies[0].background_image,
        download: downloadCountMovies[0].background_image,
        like: likeCountMovies[0].background_image,
      },
      movieCount: undefined,
    });
  };

  _getMoviePromise = (search) => {
    return new Promise((resolve, reject) => {
      fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=${search}`)
        .then((response) => response.json())
        .then((json) => resolve(json.data.movies))
        .catch((err) => console.log(err));
    });
  };

  _getMovieSearch = (value) => {
    return fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${value}`)
      .then((response) => response.json())
      .then((json) => {
        return {
          searchMovies: json.data.movies,
          movieCount: json.data.movie_count,
        };
      })
      .catch((err) => console.log(err));
  };

  _handleInputSearchChange = async (value) => {
    if (value) {
      const searchMoviesObj = await this._getMovieSearch(value);

      this.setState({
        searchMovies: searchMoviesObj.searchMovies,
        movieCount: searchMoviesObj.movieCount,
      });
    } else {
      this._getMovies();
    }
  };
}

export default App;
