import React, { Component } from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Icon, Typography } from '@material-ui/core';
import { red, green } from '@material-ui/core/colors';


export class CardGridSocialSearcher extends Component {

  render() {
    const { data } = this.props
    console.log(data)
    const grid = data ? data.map((info, index) =>  
      <Grid item xs={3} key={index}>
        <Card>
          <CardHeader
            avatar={
              <Avatar href={info.user.url} src={info.user.image} />
            }
            title={info.user.name}
            subheader={info.posted.substring(0, 19)}
          />

          {/* <CardMedia style={{height: 80}}
            image="img/banner.png"
            title={info.title}
          /> */}

          <CardContent>
            <Typography variant="body1">
              {info.text}
            </Typography>
          </CardContent>

          <CardActions >
            {/* https://material.io/resources/icons */}
            {info.sentiment === 'positive' ? <Icon style={{ color: green[500] }}>thumb_up_alt</Icon> : null }
            {info.sentiment === 'negative' ? <Icon style={{ color: red[500] }}>thumb_down_alt</Icon> : null }
            <Typography variant="button" style={{flex: 'auto', textAlign: 'right'}}>{info.network}</Typography>
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


export default CardGridSocialSearcher
