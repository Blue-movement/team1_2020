import React, { Component } from 'react'
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardGridProtest from protest/cardGridProtest;

export class Protest extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1 style={{textAlign: 'center'}}>Protest Page</h1>
          App or chat bot or website <br/>
          Text/input locations and return nearby protests <br/>
          Could also offer advice on keeping safe  <br/>
          And maybe text you live updates <br/>
          <CardGridProtest></CardGridProtest>
        </Container>
      </div>
    )
  }
}

export default Protest
