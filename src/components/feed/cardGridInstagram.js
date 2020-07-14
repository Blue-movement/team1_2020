import React, { Component } from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Icon, Typography, Button } from '@material-ui/core';


class CardGridInstagram extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    let {data} = this.props
    console.log(data)
    let fetches = []

    const addUserData = user_info => {
      data.forEach((post, index) => {
        this.setState({
          data: this.state.data.concat(post)
        }, () => {
          let curData = this.state.data
          curData[index].node.owner = Object.assign({}, curData[index].node.owner, user_info[index].user)
          this.setState({
            data: curData
          })
        })
      })
    }

    // Gets users' username, and profile pic url from a Python flask server
    if (data) data.forEach((post) =>
      fetches.push(
        fetch(proxyurl + "http://prince25.pythonanywhere.com/idtoname?id=" + post.node.owner.id)
          .then(res => res.json())
      )
    )

    if (data) Promise.all(fetches).then((values) => addUserData(values)).catch((error) => console.log("Instgram getUserInfo() Failed:", error))
  }


  render() {

    const grid = this.state.data && this.state.data.length > 0 ? this.state.data.map((post, index) =>
      <Grid item xs={3} key={index} style={{marginBottom: 30, display: 'flex'}}>
        <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
          <CardHeader
            avatar={
              <Avatar src={post.node.owner.profile_pic_url} />
            }
            title={post.node.owner.username}
            subheader={new Date(post.node.taken_at_timestamp).toLocaleString("en-US")}
            onClick={() => window.open('https://www.instagram.com/' + post.node.owner.username, '_blank')}
          />

          <CardMedia style={{height: '250px', width: '100%'}}
            image={post.node.display_url}
          />

          <CardContent>
            <Typography variant="body1">
              {post.node.edge_media_to_caption.edges[0] ? 
                post.node.edge_media_to_caption.edges[0].node.text.length > 150 ?  
                  post.node.edge_media_to_caption.edges[0].node.text.substring(0, 150) + '...' : post.node.edge_media_to_caption.edges[0].node.text
                : null}
            </Typography>
          </CardContent>

          <CardActions >
            {/* https://material.io/resources/icons */}
            <Icon onClick={() => window.open('https://www.instagram.com/p/' + post.node.shortcode, '_blank')} style={{flex: 'auto', textAlign: 'right'}}>read_more</Icon> 
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

export default CardGridInstagram
