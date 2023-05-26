import React , { useEffect } from 'react'

const MarkdownInput = (props) => {

  useEffect(() => {
    localStorage.setItem('markdown', props.markdown);
  }, [props.markdown])
  
  return (
    <textarea placeholder='Enter Your Markdown Code Here...' name="mardown-input" id="Markdown-Input-Box" className="Markdown-Input-Box" value={props.markdown} onChange={(e) => { props.setMarkdown(e.target.value) }}></textarea>
  )
}

export default MarkdownInput