import React, { Component } from 'react'
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardGridProtest from protest/cardGridProtest;

const cities = [
  { city: 'LA',
    twitter: 'twitter.com/BLMLA',
    website: 'BLMLA.org',
    email: 'emailblmla@gmail.com',
    facebook: 'facebook.com/BLMLA',
    instagram: 'instagram.com/BLMLosAngeles'
  },
  { city: 'Boston',
    twitter: 'twitter.com/BLMBoston',
    website: 'BlackLivesMatterBoston.org',
    email: 'boston@blacklivesmatter.com',
    facebook: 'facebook.com/BLMBoston',
    instagram: null
  },
  { city: 'Chicago',
    twitter: 'twitter.com/BLMChi',
    website: 'BlackLivesMatterChicago.com',
    email: null,
    facebook: 'facebook.com/BLMChi',
    instagram: 'instagram.com/BLMChi'
  },
  { city: 'DC',
    twitter: 'twitter.com/DMVBlackLives',
    website: 'BlackLivesMatterDMV.org',
    email: 'info@dcblm.org',
    facebook: 'facebook.com/BLMDC',
    instagram: 'instagram.com/BlackLivesMatterDC'
  },
  { city: 'Denver',
    twitter: 'twitter.com/BLM5280',
    website: 'BlackLivesMatter5280.WordPress.com',
    email: 'blacklivesmatter5280@gmail.com',
    facebook: 'facebook.com/BlackLivesMatter5280',
    instagram: 'instagram.com/BLM5280'
  },
  { city: 'Detroit',
    twitter: 'twitter.com/DetroitBLM',
    website: 'BLMDetroit.com',
    email: 'leadership@blmdetroit.com',
    facebook: 'facebook.com/DetroitBLM',
    instagram: null
  },
  { city: 'Lansing, Michigan',
    twitter: 'twitter.com/BLMLansing',
    website: 'liberationpac.org/BLMLansing',
    email: null,
    facebook: 'facebook.com/BLMLansing',
    instagram: null
  },
  { city: 'Long Beach, CA',
    twitter: 'twitter.com/BLMLBC',
    website: 'blmlbc.org',
    email: 'lbcblacklivesmatter@gmail.com',
    facebook: 'facebook.com/Groups/BlackLivesMatterLBC',
    instagram: 'instagram.com/BLMLBC'
  },
  { city: 'Michigan',
    twitter: 'twitter.com/BLMMichigan',
    website: null,
    email: null,
    facebook: 'facebook.com/BLMMichigan',
    instagram: 'instagram.com/blmmichigan'
  },
  { city: 'Nashville',
    twitter: 'twitter.com/BLM_Nashville',
    website: 'BlackLivesMatterNashville.WordPress.com',
    email: null,
    facebook: 'facebook.com/BlackLivesMatterNashville',
    instagram: 'instagram.com/BLM_Nashville'
  },
  { city: 'NYC',
    twitter: 'twitter.com/BLMNYC',
    website: null,
    email: null,
    facebook: 'facebook.com/BlackLivesMatter',
    instagram: 'instagram.com/BLMNYC'
  },
  { city: 'Philly',
    twitter: 'twitter.com/BLMPhilly',
    website: 'BLMPhilly.com',
    email: 'BlackLivesMatterPhilly@Gmail.com',
    facebook: 'facebook.com/BlackLivesMatterPhilly',
    instagram: 'instagram.com/BLMPhilly'
  },
  { city: 'South Bend, Indiana',
    twitter: 'twitter.com/BLMPhilly',
    website: 'BLMPhilly.com',
    email: 'blm.southbend@gmail.com',
    facebook: 'facebook.com/BlackLMSouthBend',
    instagram: null
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
