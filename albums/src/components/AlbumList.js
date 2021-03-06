// import library for making a component
import React, {Component} from 'react'
import { Text, View,ScrollView } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail';

// make a component & make the component available to other parts of the app
export default class AlbumList extends Component {

  state = {
    albums : [],
  };

  componentDidMount() {
    // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    // .then(response => console.log(response)
    // );
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({albums: response.data})
    );
  }

  renderAlbums () {
    return this.state.albums.map(
      album => <AlbumDetail key={album.title} dataAlbum={album} />
    );
  }

  render () {
    console.log(this.state);
    
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
};

const styles = {
  
}