import React, { Component } from 'react'
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardGridProtest from protest/cardGridProtest;

const cities = [
  { city: 'LA',
    twitter: 'https://twitter.com/BLMLA',
    website: 'https://www.blmla.org/',
    email: 'emailblmla@gmail.com',
    facebook: 'https://www.facebook.com/blmla/',
    instagram: 'https://www.instagram.com/BLMLosAngeles/'
  },
  { city: 'Boston',
    twitter: 'https://twitter.com/BLMBoston',
    website: 'https://blacklivesmatterboston.org',
    email: 'boston@blacklivesmatter.com',
    facebook: 'https://www.facebook.com/BlmBoston/',
    instagram: null
  },
  { city: 'Chicago',
    twitter: 'https://twitter.com/BLMChi',
    website: 'https://www.blacklivesmatterchicago.com/',
    email: null,
    facebook: 'https://www.facebook.com/BLMChi',
    instagram: 'https://www.instagram.com/BLMChi/'
  },
  { city: 'DC',
    twitter: 'https://twitter.com/DMVBlackLives',
    website: 'http://www.blacklivesmatterdmv.org/',
    email: 'info@dcblm.org',
    facebook: 'https://www.facebook.com/BLMDC',
    instagram: 'https://www.instagram.com/BlackLivesMatterDC/'
  },
  { city: 'Denver',
    twitter: 'https://twitter.com/BLM5280',
    website: 'https://blacklivesmatter5280.wordpress.com/',
    email: 'blacklivesmatter5280@gmail.com',
    facebook: 'https://www.facebook.com/BlackLivesMatter5280',
    instagram: 'https://www.instagram.com/BLM5280/'
  },
  { city: 'Detroit',
    twitter: 'https://twitter.com/DetroitBLM',
    website: 'https://www.blmdetroit.com/',
    email: 'leadership@blmdetroit.com',
    facebook: 'https://www.facebook.com/DetroitBLM',
    instagram: null
  },
  { city: 'Lansing, Michigan',
    twitter: 'https://twitter.com/BLMLansing',
    website: 'liberationpac.org/BLMLansing',
    email: null,
    facebook: 'https://www.facebook.com/blmlansing/',
    instagram: null
  },
  { city: 'Long Beach, CA',
    twitter: 'https://twitter.com/BLMLBC',
    website: 'https://blmlbc.org/',
    email: 'lbcblacklivesmatter@gmail.com',
    facebook: 'https://www.facebook.com/Groups/BlackLivesMatterLBC',
    instagram: 'https://www.instagram.com/BLMLBC/'
  },
  { city: 'Michigan',
    twitter: 'https://twitter.com/BLMMichigan',
    website: null,
    email: null,
    facebook: 'https://www.facebook.com/BLMMichigan',
    instagram: 'https://www.instagram.com/blmmichigan/'
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
          <CardGridProtest cities={citiesarray}/>
        </Container>
      </div>
    )
  }
}

export default Protest
