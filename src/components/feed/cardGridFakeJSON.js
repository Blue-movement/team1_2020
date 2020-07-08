import React, { Component } from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Icon, Typography } from '@material-ui/core';


export class CardGridFakeJSON extends Component {

  render() {
    const { data } = this.props
    const grid = data ? data.map((info, index) => 
      <Grid item xs={3} key={index}>
        <Card>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                {info.userId}
              </Avatar>
            }
            title={info.userId}
            subheader={info.date}
          />

          <CardMedia style={{height: 80}}
            image="img/banner.png"
            title={info.title}
          />

          <CardContent>
            <Typography variant="body1">
              {info.title}
            </Typography>
            <Typography variant="body2">
              {info.body}
            </Typography>
          </CardContent>

          <CardActions >
            {/* https://material.io/resources/icons */}
            <Icon onClick={() => window.open('http://www.google.com', '_blank')} style={{flex: 'auto', textAlign: 'right'}}>share</Icon>  
            <Icon onClick={() => window.open(info.url, '_blank')} style={{flex: 'auto', textAlign: 'right'}}>read_more</Icon> 
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


export default CardGridFakeJSON
