import React, { Component } from 'react'
import { Box, Button, Card, CardActions, CardHeader, Grid, Typography } from '@material-ui/core'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


export class CardGridReddit extends Component {

  render() {
    const { data } = this.props
    const grid = data ? data.map((post, index) =>  
      <Grid item xs={3} key={index} style={{marginBottom: 30, display: 'flex'}}>
        <Card className = "feedGrid" style={{background: 'black', display: 'inline-flex', justifyContent: 'space-between', flexDirection: 'column', width: '100%'}}>
	        <CardHeader
            className = "feedGrid"
            title={<Typography variant="h6">{post.title}</Typography>}
            subheader={<Typography variant="caption">by {post.author.name} on {post.created_utc}</Typography>}
            onClick={() => window.open('https://www.reddit.com' + post.permalink, '_blank')}
          />

          <CardActions className = "feedGrid" style={{justifyContent: 'center'}}>
            {/* https://material-ui.com/components/material-icons/ */}
            <Box className = "feedGrid" style={{display: 'grid', justifyItems: 'center'}}>
                <ThumbUpIcon style={{color:'#ffd415', backgroundColor: 'black'}}/> 
                <Typography style={{color:'#ffd415', backgroundColor: 'black'}} variant="caption">{post.score} Upvotes</Typography>
            </Box>
            <Button style={{color:'#ffd415', backgroundColor: 'black'}} onClick={() => window.open('https://www.reddit.com' + post.permalink, '_blank')} endIcon={<OpenInNewIcon />}>        
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
