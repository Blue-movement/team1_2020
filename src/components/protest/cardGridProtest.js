import React, { Component } from 'react'
import { Button, Card, CardActions, CardHeader, CardMedia, IconButton, Grid, Typography } from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


export class CardGridProtest extends Component {
    
    render() {
      const {chapters} = this.props;
      const grid = chapters ? chapters.map((chapter, index) => 
      <Grid item xs={4} key={index} style={{marginBottom: 30}}>
        <Card className="feedGrid" style={{display: 'block', justifyContent: 'space-between', flexDirection: 'column'}}>
          <CardHeader
            className="feedGrid"
            title={chapter.city !== '' ? chapter.city : chapter.state}
            subheader={<Typography className="feedGrid">{chapter.state}</Typography>}
          />
            
          <CardMedia
            component="img"
            alt="City Logo"
            image={chapter.image}
          />
          
          <CardActions className="feedGrid" style={{justifyContent: 'center'}}>
            {chapter.website ? <Button style={{color:'#ffd415', backgroundColor: 'black'}}
              onClick={() => window.open('https://www.'+ chapter.website, '_blank')}>        
              Website
            </Button> : null }
            {chapter.email ? <IconButton style={{color:'#ffd415', backgroundColor: 'black'}} 
              onClick={() => window.open('mailto: '+ chapter.email)}> 
              <EmailIcon />
            </IconButton> : null }
            {chapter.twitter ? <IconButton style={{color:'#ffd415', backgroundColor: 'black'}} 
              onClick={() => window.open('https://www.'+ chapter.twitter, '_blank')}>        
              <TwitterIcon />
            </IconButton> : null }
            {chapter.facebook ? <IconButton style={{color:'#ffd415', backgroundColor: 'black'}} 
              onClick={() => window.open('https://www.'+ chapter.facebook, '_blank')}>        
              <FacebookIcon />
            </IconButton> : null }
            {chapter.instagram ? <IconButton style={{color:'#ffd415', backgroundColor: 'black'}} 
              onClick={() => window.open('https://www.'+ chapter.instagram, '_blank')}>        
              <InstagramIcon />
            </IconButton> : null }
          </CardActions>
        </Card>
   </Grid>) : null
  
  
  return (
      <Grid container spacing={3}>
        {grid}
      </Grid>
    );
  }
}
  
export default CardGridProtest
