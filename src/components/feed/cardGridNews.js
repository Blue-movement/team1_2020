import React, { Component } from 'react'
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from '@material-ui/core'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'


export class CardGridNews extends Component {

  render() {
    const { data } = this.props
    const grid = data ? data.map((article, index) =>  
      <Grid item xs={3} key={index} style={{marginBottom: 30, display: 'flex'}}>
        <Card className = "feedGrid" style={{background: 'black', display: 'inline-flex', justifyContent: 'space-between', flexDirection: 'column'}}>
          <CardHeader
            className = "feedGrid"
            title={<Typography variant="subtitle2">{article.title}</Typography>}
            subheader={<Typography variant="overline">{article.publishedAt}</Typography>}
            onClick={() => window.open(article.url, '_blank')}
          />
         
          <CardMedia className = "feedGrid" style={{margin: 'auto 0', height: '250px', width: '100%'}}
            image={article.urlToImage ? article.urlToImage : 'https://blacklivesmatter.com/wp-content/themes/blm/dist/images/logo-black-lives-matter.png'}
          />

          <CardContent className="feedGrid" style={{margin: 'auto 0'}}>
            <Typography className= "feedGrid" variant="body2">
              {article.description}
            </Typography>
          </CardContent>

          <CardActions className = "feedGrid" style={{justifyContent: 'center'}}>
            {/* https://material-ui.com/components/material-icons/ */}
            <Button style={{color:'#ffd415', backgroundColor: 'black'}} onClick={() => window.open(article.url, '_blank')} endIcon={<OpenInNewIcon />}>        
              {article.source.name}
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


export default CardGridNews
