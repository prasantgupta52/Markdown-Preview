import './App.css';
import React , { useState } from 'react'
import MarkdownInput from './components/MarkdownInput';
import MarkdownPreview from './components/MarkdownPreview';
import MarkdownNavabar from './components/MarkdownNavabar';

function App() {

  var keyExists = localStorage.getItem('markdown') !== null;
  var localmarkdown;
  if (keyExists) {
    localmarkdown = localStorage.getItem('markdown');
  } else {
    localmarkdown = "";
  }

  const [markdown, setMarkdown] = useState(localmarkdown);

  return (
    <div className="App">
      <MarkdownNavabar markdown={markdown} setMarkdown={setMarkdown} />
      <div className="Markdown-Box">
        <MarkdownInput markdown={markdown} setMarkdown={setMarkdown} />
        <MarkdownPreview markdown={markdown} setMarkdown={setMarkdown} />
      </div>
    </div>
  );
}

export default App;
