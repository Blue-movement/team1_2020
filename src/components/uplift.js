import React, { Component } from 'react'
import { Container } from '@material-ui/core';
import CardGridBlackBusiness from './uplift/cardGridBlackBusiness';


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
    return (
      <div>
        <Container>
          <h1 style={{textAlign: 'center'}}>Uplift Page</h1>
          Black people talking about and black people achievements: Ideas, businesses, apps, etc. <br/>
          Encourage positivity within the black community <br/>
          Can also sign up for positive affirmations to be sent to you(chat bot or texting platform)? <br/>

      

      <h1>Black owned businesses</h1>
      <CardGridBlackBusiness data={this.state.blackBusinesses}></CardGridBlackBusiness>
      yelp sourced
      </Container>

      </div>
    )
  }
}


export default Uplift

