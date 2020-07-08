import React, { Component } from 'react'
import { Container } from '@material-ui/core';


export class Feed extends Component {
  
  constructor(){

    super();
    this.state={
      isLoading: true,
      articles:[]
    }
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
    return (
      <div>
        <Container>
          <h1 style={{textAlign: 'center'}}>Feed Page</h1>
          Combine multiple social media posts pertaining to the Black Lives Matter topic into one web application 
        </Container>
      </div>
    )
  }
}


export default Feed
