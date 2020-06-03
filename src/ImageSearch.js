import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

class ImageSearch extends Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?per_page=20`,
      {
        params: { query: term },
        headers: {
          Authorization:
            'Client-ID 0jT_ojtl80OejPvslfFskWK1ehDFcu9Vv69CHhi3Ya4',
        },
      }
    );
    this.setState({
      images: response.data.results,
      results: response.data.total,
    });
    const response1 = await axios.get(`https://api.pexels.com/v1/search`, {
      params: {
        query: term,
        per_page: 15,
        page: 1,
      },
      headers: {
        Authorization:
          '563492ad6f9170000100000122fc1036ed17406a902cd17b5777846d',
      },
    });
    this.setState({ images: response1.data.photos });
  };
  render() {
    console.log(this.state.images);
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} count={this.state.results} />
      </div>
    );
  }
}

export default ImageSearch;
