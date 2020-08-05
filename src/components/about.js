import React, { useState, useEffect } from 'react'
import marked from 'marked'
import { Container } from '@material-ui/core';


function About() {
  const [markdown, setMarkdown] = useState(0);

  useEffect(() => {
    const readmePath = require("../README.md");
    fetch(readmePath)
      .then(response => response.text())
      .then(text => setMarkdown(marked(text)))
      .catch(err => console.log(err))
    });
  return (
    <Container>
      <div dangerouslySetInnerHTML={{__html: markdown}} />
    </Container>
  )
}


export default About