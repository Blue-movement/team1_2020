import React, { Component } from 'react'
import { Container, Typography } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";
import CardGridProtest from './cardGridProtest';

const chapters = [
  { city: 'Boston',
    state: 'Massachusetts',
    twitter: 'twitter.com/BLMBoston',
    website: 'BlackLivesMatterBoston.org',
    email: 'boston@blacklivesmatter.com',
    facebook: 'facebook.com/BLMBoston',
    instagram: null,
    image: 'https://blacklivesmatter.com/wp-content/uploads/2020/04/blm-chapter-logo-boston-250x243-01.png'
  },
  { city: 'Chicago',
    state: 'Illinois',
    twitter: 'twitter.com/BLMChi',
    website: 'BlackLivesMatterChicago.com',
    email: null,
    facebook: 'facebook.com/BLMChi',
    instagram: 'instagram.com/BLMChi',
    image: 'https://blacklivesmatter.com/wp-content/uploads/2020/04/blm-chapter-logo-chicago-250x244-01.png'
  },
  { city: 'Washington DC',
    state: 'District of Columbia',
    twitter: 'twitter.com/DMVBlackLives',
    website: 'BlackLivesMatterDMV.org',
    email: 'info@dcblm.org',
    facebook: 'facebook.com/BLMDC',
    instagram: 'instagram.com/BlackLivesMatterDC',
    image: 'https://blacklivesmatter.com/wp-content/uploads/2020/04/blm-chapter-logo-dc-250x244-01.png'
  },
  { city: 'Denver',
    state: 'Colorado',
    twitter: 'twitter.com/BLM5280',
    website: 'BlackLivesMatter5280.WordPress.com',
    email: 'blacklivesmatter5280@gmail.com',
    facebook: 'facebook.com/BlackLivesMatter5280',
    instagram: 'instagram.com/BLM5280',
    image: 'https://blacklivesmatter.com/wp-content/uploads/2020/04/blm-chapter-logo-denver-250x244-01.png'
  },
  { city: 'Detroit',
    state: 'Michigan',
    twitter: 'twitter.com/DetroitBLM',
    website: 'BLMDetroit.com',
    email: 'leadership@blmdetroit.com',
    facebook: 'facebook.com/DetroitBLM',
    instagram: null,
    image: 'https://blacklivesmatter.com/wp-content/uploads/2020/04/blm-chapter-logo-detroit-250x243-01.png'
  },
  { city: 'Los Angeles',
    state: 'California',
    twitter: 'twitter.com/BLMLA',
    website: 'BLMLA.org',
    email: 'emailblmla@gmail.com',
    facebook: 'facebook.com/BLMLA',
    instagram: 'instagram.com/BLMLosAngeles',
    image: 'https://blacklivesmatter.com/wp-content/uploads/2020/04/blm-chapter-logo-la-250x243-01.png'
  },
  { city: 'Lansing',
    state: 'Michigan',
    twitter: 'twitter.com/BLMLansing',
    website: 'liberationpac.org/BLMLansing',
    email: null,
    facebook: 'facebook.com/BLMLansing',
    instagram: null,
    image: 'https://blacklivesmatter.com/wp-content/uploads/2020/04/blm-chapter-logo-lansing-250x244-01.png'
  },
  { city: 'Long Beach',
    state: 'California',
    twitter: 'twitter.com/BLMLBC',
    website: 'blmlbc.org',
    email: 'lbcblacklivesmatter@gmail.com',
    facebook: 'facebook.com/Groups/BlackLivesMatterLBC',
    instagram: 'instagram.com/BLMLBC',
    image: 'https://blacklivesmatter.com/wp-content/uploads/2020/04/blm-chapter-logo-long-beach-250x244-01.png'
  },
  { city: 'Memphis',
    state: 'Tennessee',
    twitter: 'twitter.com/blm_memphis',
    website: null,
    email: 'blacklivesmattermemphis@gmail.com',
    facebook: 'facebook.com/blmmemphis',
    instagram: null,
    image: 'https://blacklivesmatter.com/wp-content/uploads/2020/04/blm-chapter-logo-memphis-250x244-01.png'
  },
  { city: '',
    state: 'Michigan',
    twitter: 'twitter.com/BLMMichigan',
    website: null,
    email: null,
    facebook: 'facebook.com/BLMMichigan',
    instagram: 'instagram.com/blmmichigan',
    image: 'https://blacklivesmatter.com/wp-content/uploads/2020/07/blm-chapter-logo-michigan-250x243-01.png'
  },
  { city: 'Nashville',
    state: 'Tennessee',
    twitter: 'twitter.com/BLM_Nashville',
    website: 'BlackLivesMatterNashville.WordPress.com',
    email: null,
    facebook: 'facebook.com/BlackLivesMatterNashville',
    instagram: 'instagram.com/BLM_Nashville',
    image: 'https://blacklivesmatter.com/wp-content/uploads/2020/04/blm-chapter-logo-nashville-250x244-01.png'
  },
  { city: 'New York',
    state: 'New York',
    twitter: 'twitter.com/BLMNYC',
    website: null,
    email: null,
    facebook: 'facebook.com/BlackLivesMatter',
    instagram: 'instagram.com/BLMNYC',
    image: 'https://blacklivesmatter.com/wp-content/uploads/2020/04/blm-chapter-logo-nyc-250x243-01.png'
  },
  { city: 'Philadelphia',
    state: 'Pennsylvania',
    twitter: 'twitter.com/BLMPhilly',
    website: 'BLMPhilly.com',
    email: 'BlackLivesMatterPhilly@Gmail.com',
    facebook: 'facebook.com/BlackLivesMatterPhilly',
    instagram: 'instagram.com/BLMPhilly',
    image: 'https://blacklivesmatter.com/wp-content/uploads/2020/04/blm-chapter-logo-philly-250x243-01.png'
  },
  { city: 'South Bend',
    state: 'Indiana',
    twitter: 'twitter.com/BLMPhilly',
    website: 'BLMPhilly.com',
    email: 'blm.southbend@gmail.com',
    facebook: 'facebook.com/BlackLMSouthBend',
    instagram: null,
    image: 'https://blacklivesmatter.com/wp-content/uploads/2020/04/blm-chapter-logo-south-bend-250x243-01.png'
  }
]

export class Protest extends Component {

  constructor() {
    super()
    this.state = {
      chaptersToShow: chapters,
      search: ''
    }
  }

  handleSearch(searchVal) {
    this.setState({ search: searchVal })
    let filteredChapters = chapters.filter(
      chapter => chapter.city.toLowerCase().includes(searchVal.toLowerCase()) || 
        chapter.state.toLowerCase().includes(searchVal)
    )
    this.setState({
      chaptersToShow: filteredChapters
    })
  }
  
  render() {
    

    return (
      <div>
        <Container>
          <h1 style={{textAlign: 'center'}}>Protest Page</h1>

          <SearchBar
            placeholder="Search for a chapter..."
            style={{margin: '0 auto', marginBottom: '40px', width: "50%"}}
            value={this.state.search}
            onChange={(newValue) => this.handleSearch(newValue)}
            onCancelSearch={() => this.setState({ chaptersToShow: chapters })}
          />

          {
            this.state.chaptersToShow.length > 0 ? <CardGridProtest chapters={this.state.chaptersToShow}/> :
            <Typography style={{textAlign: 'center'}}>
              No chapters found.<br/>
              Try looking on the official BlackLivesMatter <a href="https://blacklivesmatter.com/chapters/" target="_blank">chapters</a> page.
            </Typography>
          }
        </Container>
      </div>
    )
  }
}

export default Protest
