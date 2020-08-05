import React, { Component } from 'react'
import { Card, CardContent, CardHeader, CardMedia, Divider, Grid, Typography } from '@material-ui/core'


export class CardGridBlackBusiness extends Component {

  render() {
    const { data } = this.props
    const grid = data ? data.map((business, index) =>  
      <Grid item xs={3} key={index} style={{marginBottom: 30, display: 'flex'}}>
        <Card style={{display: 'inline-flex', justifyContent: 'space-between', flexDirection: 'column'}}>
          <CardHeader
            title={<Typography variant="subtitle1">{business.name}</Typography>}
            subheader={<Typography variant="overline" style={{textAlign:"center"}}>{business.categories[0].title}</Typography>}
            onClick={() => window.open(business.url, '_blank')}
          />
         
          <CardMedia style={{height: '250px', width: '300px'}}
            image={business.image_url?business.image_url:'https://blacklivesmatter.com/wp-content/themes/blm/dist/images/logo-black-lives-matter.png'}
          />

          <CardContent>
            <Typography display="block" variant="caption">
                {business.price}
              </Typography>
              <Typography display="block" variant="caption">
                {"Rating:  "+business.rating+ " \n"}
              </Typography>
              
            <Typography variant="subtitle2">{business.location.address1}</Typography>
            <Typography variant="subtitle2">{business?"Phone Number:"+business.display_phone :""}</Typography>
            <Typography variant="subtitle2" >{Math.round(business.distance)+" miles away"}</Typography>
            <Typography>
              {business.transactions.map((item, idx)=>{
                  return(<Typography variant="overline" key={idx}>{item+"    "}</Typography>)
              })}
            </Typography>
          </CardContent>

          <Divider variant="middle"/>
        </Card>
      </Grid>) : null


    return (
      <Grid container spacing={3}>
        {grid}
      </Grid>
    )
  }
}


export default CardGridBlackBusiness
