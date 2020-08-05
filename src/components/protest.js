import React, { Component } from 'react'
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardGridProtest from protest/cardGridProtest;

const cities = [
  {
    'LA': {
      twitter: 'twitter.com/BLMLA',
      website: 'BLMLA.org',
    };
    'Boston': {
      twitter: 'twitter.com/BLMBoston',
      website: 'BlackLivesMatterBoston.org',
    };
    'Chicago': {
      twitter: 'twitter.com/BLMChi',
      website: 'BlackLivesMatterChicago.com',
    };
    'DC': {
      twitter: 'twitter.com/DMVBlackLives',
      website: 'BlackLivesMatterDMV.org',
    };
    'Denver': {
      twitter: 'twitter.com/BLM5280',
      website: 'BlackLivesMatter5280.WordPress.com',
    };
    'Detroit': {
      twitter: 'twitter.com/DetroitBLM',
      website: 'BLMDetroit.com',
    };
    'Lansing, Michigan': {
      twitter: 'twitter.com/BLMLansing',
      website: 'liberationpac.org/BLMLansing',
    };
    'Long Beach, CA': {
      twitter: 'twitter.com/BLMLBC',
      website: 'blmlbc.org',
    };
    'Michigan': {
      twitter: 'twitter.com/BLMMichigan',
      website: null,
    };
    'Nashville': {
      twitter: 'twitter.com/BLM_Nashville',
      website: 'BlackLivesMatterNashville.WordPress.com',
    };
    'NYC': {
      twitter: 'twitter.com/BLMNYC',
      website: null,
    };
    'Philly': {
      twitter: 'twitter.com/BLMPhilly',
      website: 'BLMPhilly.com',
    };
    'South Bend, Indiana': {
      twitter: 'twitter.com/BLMPhilly',
      website: 'BLMPhilly.com',
    };
  }
]

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
