import React, { Component } from 'react'
import { Button, Container } from '@material-ui/core';
import CardGridFakeJSON from './cardGridFakeJSON'
import CardGridSocialSearcher from './cardGridSocialSearcher'


const SOCIAL_SEARCHER_KEY = '98899c69080642318607dc8961e100a7'


export class Feed extends Component {

  constructor() {
    super()

    this.state = {
      isLoading: true,
      socialSearcher: [],
      fakeJSON: null,
      page: 0
    }
  }

  componentDidMount() {
    this.socialSearcher('blmOR"BlackLivesMatter"OR"black lives matter"')
    // this.fakeJSON()
    this.setState({isLoading: false})
  }


  fakeJSON() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => this.setState({fakeJSON: data}))
  }


  // https://www.social-searcher.com/api-v2
  socialSearcher(query='blmOR"BlackLivesMatter"OR"black lives matter"') {
    fetch('https://api.social-searcher.com/v2/search?q=' + query + '&page=' + this.state.page + '&lang=en&type=photo,status,link&key=' + SOCIAL_SEARCHER_KEY)
      .then(response => response.json())
      .then(data => this.setState(prevState => {
        return { socialSearcher: [...prevState.socialSearcher, ...data.posts] }
        }))
      .catch(function(error) {
        console.log(error);
      });
  }

  loadMore() {
    this.setState({page: this.state.page + 1}, 
      this.socialSearcher
    )
  }


  render() {
   
    return (
      <div>
        <Container>
          <h1 style={{textAlign: 'center'}}>Feed Page</h1>
          Combine multiple social media posts pertaining to the Black Lives Matter topic into one web application
          <br/> <br/> <br/> <br/>
          {!this.state.isLoading && this.state.socialSearcher && this.state.socialSearcher.length > 0 ? <CardGridSocialSearcher data={this.state.socialSearcher} /> : <p>Loading...</p>}
          {/* {!this.state.isLoading && this.state.fakeJSON ? <CardGridFakeJSON data={this.state.fakeJSON} /> : <p>Loading...</p>} */}
          <Button onClick={() => this.loadMore()} style={{marginTop: 20, marginBottom: 20}}>Load More...</Button>
        </Container>
      </div>
    )
  }
}


export default Feed
