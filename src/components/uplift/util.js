


const util=()=>{

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer joCHI4iyiFsdWXevs76e3NDMoand-ZtkGOse3e-nPQXFJmsiP8gbwILFJawdYlQzrJgU1HqHyNuA9q2HqAkcIhnlpc60y1jRlkF3imHgNU4DTlgM4au8YGaP7wsiX3Yx");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://api.yelp.com/v3/businesses/search?term=black owned", requestOptions)
      .then(response => {
        if(response.ok) { return response.json()}
        else{ console.log("Yelp reqeust failed")}
        })
      .then(data => console.log(result))
      .catch(error => console.log('error', error));
    
    
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    function success(pos) {
      var crd = pos.coords;
    
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);
  
  }
  
  