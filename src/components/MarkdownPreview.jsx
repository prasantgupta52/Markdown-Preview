import React, { useState, useEffect } from 'react'
import Markdown from 'markdown-to-jsx';
var hljs = require('highlight.js');
var hljsDefineSolidity = require('highlightjs-solidity');

const MarkdownPreview = (props) => {

  function highlightCode() {
    document.querySelectorAll('pre code').forEach((block) => {
      hljsDefineSolidity(hljs);
      hljs.highlightElement(block);
    });
  }

  useEffect(() => {
    highlightCode();
  }, [props.markdown]);

  return (
    <Markdown className="Markdown-Preview">{props.markdown}</Markdown>
  )
}

export default MarkdownPreview