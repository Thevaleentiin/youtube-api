import React, {Component} from 'react'
import Api from './components/Api'
import SearchBar from './components/Search_bar'
import Listvideos from './components/Listvideos'
import Openvideo from './components/Openvideo'
import './style/index.css'

class App extends Component {

  state = {
    videos: [],
    selectedVideos: null,
    term: null
  }

  handleSubmit = async (termFromSearchBar) => {
    const response = await Api.get('/search', {
        params: {
            q: termFromSearchBar
        }
    })
    this.setState({
        videos: response.data.items,
        term: termFromSearchBar
    })
    console.log("Un réponse enfin !",response);
  };
  handleVideoSelect = (video) => {
    this.setState({selectedVideos: video})
  }

  render () {
    return(
      <main className="container">
        <section className="container-search">
          <SearchBar handleFormSubmit={this.handleSubmit} />
          <p className="resultSearchTerm">Résultat de votre recherche pour: {this.state.term}</p>
          <Listvideos handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
        </section>
        <section className="container-details">
          <Openvideo video={this.state.selectedVideos}/>
        </section>
      </main>
    )
  }  
}

export default App;
