import React, { Component } from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, Grid, Icon, Typography } from '@material-ui/core';


export class CardGridTwitter extends Component {

  render() {
    const { data } = this.props
    const grid = data ? data.map((tweet, index) =>  
      <Grid item xs={3} key={index} style={{marginBottom: 30, display: 'flex'}}>
        <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
          <CardHeader
            avatar={
              <Avatar src={tweet.user.profile_image_url} />
            }
            title={tweet.user.name}
            subheader={tweet.created_at.substring(0, 20)}
            onClick={() => window.open('https://www.twitter.com/'+ tweet.user.screen_name, '_blank')}
          />

          <CardContent>
            <Typography variant="body1">
              {tweet.text}
            </Typography>
          </CardContent>

          <CardActions >
            {/* https://material.io/resources/icons */}
            <Typography variant="button" style={{flex: 'auto', textAlign: 'right'}}>Twitter</Typography>
            <Icon onClick={() => window.open('https://www.twitter.com/'+ tweet.user.screen_name + '/status/' + tweet.id_str, '_blank')} style={{flex: 'auto', textAlign: 'right'}}>read_more</Icon> 
          </CardActions>
        </Card>
      </Grid>) : null


    return (
      <div>
        <Grid container spacing={3}>
          {grid}
        </Grid>
      </div>
    )
  }
}


export default CardGridTwitter
