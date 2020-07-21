import React, { Component } from 'react'
import { Box, Button, Card, CardActions, CardMedia, CardHeader, Divider, Grid, Typography } from '@material-ui/core'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


export class CardGridReddit extends Component {

  render() {
    const { data } = this.props
    const grid = data ? data.map((post, index) =>  
      <Grid item xs={3} key={index} style={{marginBottom: 30, display: 'flex'}}>
        <Card style={{display: 'inline-flex', justifyContent: 'space-between', flexDirection: 'column', width: '100%'}}>
          <CardHeader
            title={<Typography variant="h6">{post.title}</Typography>}
            subheader={<Typography variant="caption">by {post.author.name} on {post.created_utc}</Typography>}
            onClick={() => window.open('https://www.reddit.com' + post.permalink, '_blank')}
          />

          {/* Screws up card height for posts that don't have pictures
          {!post.url.includes('www.reddit.com') && !post.url.includes("v.redd.it") ? 
            <CardMedia style={{height: '250px', width: '400px'}} image={post.url} /> : null 
          } 
          */}

          <Divider variant="middle"/>

          <CardActions style={{justifyContent: 'center'}}>
            {/* https://material-ui.com/components/material-icons/ */}
            <Box style={{display: 'grid', justifyItems: 'center'}}>
                <ThumbUpIcon /> 
                <Typography variant="caption">{post.score} Upvotes</Typography>
            </Box>
            <Button onClick={() => window.open('https://www.reddit.com' + post.permalink, '_blank')} endIcon={<OpenInNewIcon />}>        
              Reddit
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


export default CardGridReddit
