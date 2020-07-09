import React, { Component } from 'react'
import { Button, Container } from '@material-ui/core';
import CardGridTwitter from './cardGridTwitter'
import makeComponentFromTheme from '../../theme'


export class Feed extends Component {

  // Constructor - Sets up initial states
  constructor() {
    super()

    this.state = {
      isLoading: true,
      twitterPosts: [],
      nextTwitterResultUrl: null,
    }
  }

  // Functions to run once component is mounted
  componentDidMount() {
    this.searchTwitter()
    this.setState({isLoading: false})
  }


  // Queries Twitter API
  // https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets
  searchTwitter(query='BLM OR "Black Lives Matter"') {
    const proxyurl = "https://cors-anywhere.herokuapp.com/"; // https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141
    let url = this.state.nextTwitterResultUrl ? 
    'https://api.twitter.com/1.1/search/tweets.json' + this.state.nextTwitterResultUrl : 
    'https://api.twitter.com/1.1/search/tweets.json?q=' + query + '&lang=en&result_type=mixed&include_entities=1&count=8'

    fetch(proxyurl + url, {
      headers: {
        Authorization: 'Bearer ' + process.env.REACT_APP_TWITTER_BEARER_TOKEN,
      }})
      .then(response => {
        if (response.ok) return response.json()
        else {
          console.log("Twitter request failed: " + url)
          return {statuses: this.state.twitterPosts, search_metadata: {next_results: this.state.nextTwitterResultUrl}}
        }
      })
      .then(data => this.setState(prevState => {
        return { twitterPosts: [...prevState.twitterPosts, ...data.statuses],
                 nextTwitterResultUrl: data.search_metadata.next_results }
        }))
      .catch(function(error) {
        console.log(error);
      });
  }


  // Loads more posts when "Load More" button is pressed
  loadMorePosts() {
    this.searchTwitter()
  }


  render() {
    const BLM_button = makeComponentFromTheme(<Button variant="outlined" color="secondary" onClick={() => this.loadMorePosts()} style={{marginTop: 20, marginBottom: 20}}>Load More</Button>)
   
    return (
      <Container>
        <h1 style={{textAlign: 'center'}}>Feed Page</h1>
        Combine multiple social media posts pertaining to the Black Lives Matter topic into one web application
        <br/> <br/> <br/> <br/>
        {!this.state.isLoading && this.state.twitterPosts && this.state.twitterPosts.length > 0 ? <CardGridTwitter data={this.state.twitterPosts} /> : <p>Loading...</p>}
        <BLM_button />
      </Container>
    )
  }
}


export default Feed
