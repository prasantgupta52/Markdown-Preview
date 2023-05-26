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

  const [showEdit, setShowEdit] = useState(true);
  const [showPreview, setShowPreview] = useState(false);

  const handleEditClick = () => {
    setShowEdit(true);
    setShowPreview(false);
  };

  const handlePreviewClick = () => {
    setShowEdit(false);
    setShowPreview(true);
  };

  return (
    <div className="App">
      <MarkdownNavabar markdown={markdown} setMarkdown={setMarkdown} handleEditClick={handleEditClick} handlePreviewClick={handlePreviewClick}/>
      <div className="Markdown-Box Mobile-Hide">
        <MarkdownInput markdown={markdown} setMarkdown={setMarkdown} />
        <MarkdownPreview markdown={markdown} setMarkdown={setMarkdown} />
      </div>
      <div className="Markdown-Box Desktop-Hide">
        {showEdit && (
        <MarkdownInput markdown={markdown} setMarkdown={setMarkdown} />
        )}
        {showPreview && (
        <MarkdownPreview markdown={markdown} setMarkdown={setMarkdown} />
        )}
      </div>
    </div>
  );
}

export default App;
