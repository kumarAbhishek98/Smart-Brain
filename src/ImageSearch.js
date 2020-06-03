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
    });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default ImageSearch;
