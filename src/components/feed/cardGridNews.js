import React, { Component } from 'react'
import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Icon, Typography } from '@material-ui/core';


export class CardGridNews extends Component {

  render() {
    const { data } = this.props
    const grid = data ? data.map((article, index) =>  
      <Grid item xs={3} key={index} style={{marginBottom: 30, display: 'flex'}}>
        <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
          <CardHeader
            title={<Typography variant="subtitle2">{article.title}</Typography>}
            subheader={<Typography variant="overline">{article.publishedAt}</Typography>}
            onClick={() => window.open(article.url, '_blank')}
          />

          <CardMedia style={{height: '250px', width: '100%'}}
            image={article.urlToImage}
          />

          <CardContent>
            <Typography variant="body2">
              {article.description}
            </Typography>
          </CardContent>

          <CardActions >
            {/* https://material.io/resources/icons */}
            <Typography variant="button" style={{flex: 'auto', textAlign: 'right'}}>News: {article.source.name}</Typography>
            <Icon onClick={() => window.open(article.url, '_blank')} style={{flex: 'auto', textAlign: 'right'}}>read_more</Icon> 
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


export default CardGridNews
