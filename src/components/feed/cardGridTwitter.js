import React, { Component } from 'react'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Typography } from '@material-ui/core'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'


export class CardGridTwitter extends Component {

  render() {
    const { data } = this.props
    const grid = data ? data.map((tweet, index) =>  
      <Grid item xs={3} key={index} style={{marginBottom: 30, display: 'flex'}}>
        <Card style={{display: 'inline-flex', justifyContent: 'space-between', flexDirection: 'column'}}>
          <CardHeader
            avatar={
              <Avatar src={tweet.user.profile_image_url} />
            }
            title={tweet.user.name}
            subheader={tweet.created_at.substring(0, 20)}
            onClick={() => window.open('https://www.twitter.com/'+ tweet.user.screen_name, '_blank')}
          />

          <Divider variant="middle"/>

          <CardContent>
            <Typography variant="body1">
              {tweet.text}
            </Typography>
          </CardContent>

          <Divider variant="middle"  />

          <CardActions style={{justifyContent: 'center'}}>
            {/* https://material-ui.com/components/material-icons/ */}
            <Button onClick={() => window.open('https://www.twitter.com/'+ tweet.user.screen_name + '/status/' + tweet.id_str, '_blank')} endIcon={<OpenInNewIcon />}>        
              Twitter
            </Button>         
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
