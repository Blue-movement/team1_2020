import React, { Component } from 'react'
import { Container, LinearProgress, Typography } from '@material-ui/core';
import makeComponentFromTheme from '../../theme'
import CardGridBlackBusiness from './cardGridBlackBusiness';
import '../../index.css'


export class Uplift extends Component {
  constructor(){
    super()
    this.state={
      longitude:0,
      latitude:0,
      accuracy:0,
      city:"",
      blackBusinesses:[]
    }

  }

  searchYelp(query="Black-owned"){
    const myHeaders = new Headers();
    const url="https://api.yelp.com/v3/businesses/search?term="
    const proxyurl="https://cors-anywhere.herokuapp.com/"
    myHeaders.append("Authorization", "Bearer "+ process.env.REACT_APP_YELP_BEARER_TOKEN,
    );
    
    const  requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    //const finalurl=(this.state.latitude)?proxyurl+url+query+"&latitude="+this.state.latitude+"&longitude="+this.state.longitude : proxyurl+url+query
    const finalurl=(this.state.city)?proxyurl+url+query+"&location="+this.state.city : proxyurl+url+query
    fetch(finalurl, requestOptions)
    .then(response => {
      if(response.ok) { return response.json()}
      else{ console.log("Yelp reqeust failed")}
      })
    .then(data =>  this.setState({blackBusinesses:data["businesses"]})  )
    .catch(error => console.log('error:', error));
  }
  
  
componentDidMount(){

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  
  
  navigator.geolocation.getCurrentPosition(
    (pos)=>{
        const crd=pos.coords
        
        this.setState({longitude:crd.longitude,latitude:crd.latitude,accuracy:crd.accuracy})
        const mapsurl="https://maps.googleapis.com/maps/api/geocode/json?key="+process.env.REACT_APP_GOOGLE_MAPS_API_KEY+"&latlng="+this.state.latitude.toString()+","+this.state.longitude.toString()
        fetch(mapsurl).then((response)=> response.json()).then((data)=>{
           const localcity=data.results[2].address_components[1]["long_name"]
           this.setState({city:localcity})
           this.searchYelp();
        })
      }
    
    , (err)=>{  
        //If there is a problem with the geolocaction just use a random city
        const cities=["New York","Miami","San Diego","Atlanta","Seattle","Chicago","Dallas","San Jose"]
        const ranNumber=Math.floor(Math.random() * cities.length)
        this.setState({city:cities[ranNumber]})
        this.searchYelp();

      
  }, options);

}

  render() {
    const BLMLoader = makeComponentFromTheme(<LinearProgress color="secondary" style={{marginTop: 20, marginBottom: 20}} />)
    return (
      <Container>
        <Typography variant="h4" className= "feedTitle" style={{textAlign: 'center', marginTop: 40, marginBottom: 20, fontWeight:'450'}}>Black owned businesses</Typography>
        {this.state.blackBusinesses && this.state.blackBusinesses.length > 0 ? 
          <CardGridBlackBusiness data={this.state.blackBusinesses} /> : <BLMLoader />
        }
      </Container>
    )
  }
}


export default Uplift


