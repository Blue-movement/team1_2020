import React, { Component } from 'react'
import { Container } from '@material-ui/core';


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
          <!-- Google Custom Search Element →
          <div id=”cse” style=”width:100%;”>Loading</div>
          <script src=”http://www.google.com/jsapi” type=”text/javascript”></script>
          <script type=”text/javascript”>google.load(‘search’, ‘1’);
          google.setOnLoadCallback(function(){var cse = new google.search.
          CustomSearchControl();cse.draw(‘cse’);}, true);</script>
        </Container>
      </div>
    )
  }
}

export default Protest
