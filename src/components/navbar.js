import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Avatar, Toolbar, Typography }  from '@material-ui/core'
import { List, ListItem, ListItemText } from '@material-ui/core'
import makeComponentFromTheme from '../theme'


const NavBar = () => {
  return(
    <div style={{flexGrow: '1'}}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <ListItem >
            <Link to="/about" style={{ color: 'inherit', textDecoration: 'inherit' }} >
              <Avatar alt="About" src="/img/logo_inverted.png" />
            </Link>
          </ListItem >
          
          <List >
            <ListItem >
              <ListItemText>
                <Typography color="inherit" variant="button">
                  <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }} >
                    Feed
                  </Link>
                </Typography>
              </ListItemText>

              <ListItemText inset>
                <Typography color="inherit" variant="button">
                  <Link to="/action" style={{ color: 'inherit', textDecoration: 'inherit' }} >
                    Action
                  </Link>
                </Typography>
              </ListItemText>

              <ListItemText inset>
                <Typography color="inherit" variant="button">
                  <Link to="/protest" style={{ color: 'inherit', textDecoration: 'inherit' }} >
                    Protest
                  </Link>
                </Typography>
              </ListItemText>

              <ListItemText inset>
                <Typography color="inherit" variant="button">
                  <Link to="/uplift" style={{ color: 'inherit', textDecoration: 'inherit' }} >
                    Uplift
                  </Link>
                </Typography>
              </ListItemText>                
            </ListItem >
          </List>
        </Toolbar>
      </AppBar>
    </div>
  )
}


export default makeComponentFromTheme(NavBar());