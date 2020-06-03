import React, { Component } from 'react';

const style = {
  background: 'transparent',
  width: '30%',
  marginLeft: 'auto',
};

class SearchBar extends Component {
  state = { searchTerm: '' };

  onInputChange = e => {
    this.setState({
      searchTerm: e.target.value,
    });
  };
  onSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  };
  render() {
    return (
      <div style={style} className="ui segment">
        <form onSubmit={this.onSubmitForm} className="ui form">
          <div className="field">
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
              placeholder="Search Images.."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
