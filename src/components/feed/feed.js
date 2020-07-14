import React, { Component } from 'react'
import { Button, Container } from '@material-ui/core';
import CardGridTwitter from './cardGridTwitter'
import CardGridInstagram from './cardGridInstagram'
import makeComponentFromTheme from '../../theme'

const NUM_POSTS_PER_NETWORK = 4;

export class Feed extends Component {

  // Constructor - Sets up initial states
  constructor() {
    super()

    this.state = {
      isLoading: true,
      twitterPosts: [],
      nextTwitterResultUrl: null,
      instagramPosts: [],
      nextInstagramResultUrl: null,
      visiblePosts: {}
    }
  }

  // Functions to run once component is mounted
  componentDidMount() {
    this.searchTwitter()
    this.searchInstagram()
    console.log(this.state.visiblePosts)
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
        }, () => this.state.visiblePosts.twitter = this.state.twitterPosts.splice(0, NUM_POSTS_PER_NETWORK)))
      .catch(function(error) {
        console.log(error);
      });
  }


  // Queries Instagram using Hashtag
  // https://medium.com/@h4t0n/instagram-data-scraping-550c5f2fb6f1
  searchInstagram(query='blacklivesmatter') {
    let url = this.state.nextInstagramResultUrl ? 
    'https://www.instagram.com/explore/tags/' + query + '/?__a=1&max_id=' + this.state.nextInstagramResultUrl : 
    'https://www.instagram.com/explore/tags/' + query + '/?__a=1'

    fetch(url)
      .then(response => {
        if (response.ok) return response.json()
        else {
          console.log("Instagram request failed: " + url)
          return {graphql: {hashtag: {edge_hashtag_to_media: {edges: this.state.instagramPosts, page_info: {end_cursor: this.state.nextInstagramResultUrl}}}}}
        }
      })
      .then(data => this.setState(prevState => {
        return { instagramPosts: [...prevState.instagramPosts, ...data.graphql.hashtag.edge_hashtag_to_media.edges],
                 nextInstagramResultUrl: data.graphql.hashtag.edge_hashtag_to_media.page_info.end_cursor }
        }, () => this.state.visiblePosts.instagram = this.state.instagramPosts.splice(0, NUM_POSTS_PER_NETWORK)))
      .catch(function(error) {
        console.log(error);
      });
  }


  // Loads more posts when "Load More" button is pressed
  loadMorePosts() {
    if (this.state.twitterPosts.length < NUM_POSTS_PER_NETWORK)
      this.searchTwitter()
    else this.state.visiblePosts.twitter = this.state.twitterPosts.splice(0, NUM_POSTS_PER_NETWORK)

    if (this.state.instagramPosts.length < NUM_POSTS_PER_NETWORK)
      this.searchInstagram()
    else this.state.visiblePosts.instagram = this.state.instagramPosts.splice(0, NUM_POSTS_PER_NETWORK)
  }


  
  constructor(){

    super();
    this.state={
      isLoading: true,
      articles:[],
      tweets:[]
    }
  }
  

  getTweets(){

    const url="https://black-lives-matter-ibm.uk.r.appspot.com/"
    fetch(url).then(
      
      (response)=>{
         // console.log("Response is ")
          return(response.json())
      }
      
      ).then((data)=>{
          
           this.setState({tweets:data})
         })    

  }

  getNewsArticles(){
    const apiKey="879248ecbcc04ce1a9bf0fef399076ff";
    const url="http://newsapi.org/v2/everything?q=BlackLivesMatter&sortBy=publishedAt&apiKey=879248ecbcc04ce1a9bf0fef399076ff"
    fetch(url).then(
      
      (response)=>{
         // console.log("Response is ")
          return(response.json())
      }
      
      ).then((data)=>{
          
           this.setState({articles:data})
         })    

  }
  
  componentDidMount(){
 
 this.setState({isLoading: false})
  }
  
  render() {
    const BLM_button = makeComponentFromTheme(<Button variant="outlined" color="secondary" onClick={() => this.loadMorePosts()} style={{marginTop: 20, marginBottom: 20}}>Load More</Button>)
   
    return (
      <Container>
        <h1 style={{textAlign: 'center'}}>Feed Page</h1>
        Combine multiple social media posts pertaining to the Black Lives Matter topic into one web application
        <br/> <br/> <br/> <br/>
        {!this.state.isLoading && this.state.visiblePosts.twitter && this.state.visiblePosts.twitter.length > 0 ? <CardGridTwitter data={this.state.visiblePosts.twitter} /> : <p>Loading...</p>}
        {!this.state.isLoading && this.state.visiblePosts.instagram && this.state.visiblePosts.instagram.length > 0 ? <CardGridInstagram data={this.state.visiblePosts.instagram} /> : <p>Loading...</p>}
        <BLM_button />
      </Container>
    )
  }
}


export default Feed
