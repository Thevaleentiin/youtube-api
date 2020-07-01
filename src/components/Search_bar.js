import React, {Component} from 'react'

class SearchBar extends Component {

  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
        term: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  }

  render () {
    return(
      <>
      <h1>Youtube library</h1>
      <div className="container-searchbar">
        <form onSubmit={this.handleSubmit} className="formSearch">
          <label htmlFor="search-video">Rechercher une vidéo</label>
          <input type="text" name="search-video" placeholder="Recherchez..." onChange={this.handleChange} />
        </form>
      </div>
      </>
    )
  }
}
export default SearchBar