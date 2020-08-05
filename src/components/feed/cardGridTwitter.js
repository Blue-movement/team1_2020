import React, { Component } from 'react'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Typography } from '@material-ui/core'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'


export class CardGridTwitter extends Component {

  render() {
    const { data } = this.props
    const grid = data ? data.map((tweet, index) =>  
      <Grid item xs={3} key={index} style={{marginBottom: 30, display: 'flex'}}>
        <Card className = "feedGrid" style={{background: 'black', display: 'inline-flex', justifyContent: 'space-between', flexDirection: 'column'}}>
          <CardHeader
            className = "feedGrid"
            avatar={
              <Avatar src={tweet.user.profile_image_url} />
            }
            title={tweet.user.name}
            subheader={tweet.created_at.substring(0, 20)}
            onClick={() => window.open('https://www.twitter.com/'+ tweet.user.screen_name, '_blank')}
          />

          <Divider style={{background: '#ffd415'}} variant="middle"/>

          <CardContent className = "feedGrid" style={{margin: 'auto 0'}}>
            <Typography className = "feedGrid" variant="body1">
              {tweet.text}
            </Typography>
          </CardContent>

          <Divider style={{background: '#ffd415'}} variant="middle"  />

          <CardActions className="feedGrid" style={{justifyContent: 'center'}}>
            {/* https://material-ui.com/components/material-icons/ */}
            <Button style={{color:'#ffd415', backgroundColor: 'black'}} onClick={() => window.open('https://www.twitter.com/'+ tweet.user.screen_name + '/status/' + tweet.id_str, '_blank')} endIcon={<OpenInNewIcon />}>        
              Twitter
            </Button>         
          </CardActions>
        </Card>
      </Grid>) : null


    return (
      <Grid container spacing={3}>
        {grid}
      </Grid>
    )
  }
}


export default CardGridTwitter
