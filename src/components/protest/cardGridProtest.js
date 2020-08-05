import React, { Component } from 'react'
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, Typography } from '@material-ui/core'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export class CardGridProtest extends Component {
    const classes = useStyles();
    render() {
      const grid = <Grid item xs={3} key={index} style={{marginBottom: 30, display: 'flex'}}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
             component="img"
             alt="BLM Logo"
             height="140"
             image_url="https://blacklivesmatter.com/wp-content/themes/blm/dist/images/logo-black-lives-matter.png"
             title="Contemplative Reptile"
           />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Police Brutality Protest 
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              BLM DC
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Twitter
          </Button>
          <Button size="small" color="primary">
            Website
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="BLM Logo"
            height="140"
            image_url="https://blacklivesmatter.com/wp-content/themes/blm/dist/images/logo-black-lives-matter.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              March for Justice
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              BLM LA
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Twitter
          </Button>
          <Button size="small" color="primary">
            Website
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="BLM Logo"
            height="140"
            image_url="https://blacklivesmatter.com/wp-content/themes/blm/dist/images/logo-black-lives-matter.png"
            title="BLM logo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Freedom Protest
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              BLM Boston
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Twitter
          </Button>
          <Button size="small" color="primary">
            Website
          </Button>
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
