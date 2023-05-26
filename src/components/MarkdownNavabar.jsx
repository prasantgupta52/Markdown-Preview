import React, { useState } from 'react'

const MarkdownNavabar = (props) => {

  const [copy, setCopy] = useState(false);
  const [revert, setRevert] = useState(false);
  const [commit, setCommit] = useState(false);
  const [clear, setClear] = useState(false);

  const Copy = () => {
    navigator.clipboard.writeText(props.markdown)
      .then(() => {
        console.log('Value copied to clipboard');
        setCopy(true);
        setTimeout(() => {
          setCopy(false);
        }, 1000);
      })
      .catch((error) => {
        console.error('Failed to copy value to clipboard:', error);
      });
  }

  const Revert = () => {
    var keyExists = localStorage.getItem('previous-markdown') !== null;
    if (keyExists) {
      props.setMarkdown(localStorage.getItem("previous-markdown"));
      setRevert(true);
      setTimeout(() => {
        setRevert(false);
      }, 1000);
    } else {
      alert("No Commits Revert Not Possible");
    }
  }

  const Commit = () => {
    localStorage.setItem("previous-markdown",props.markdown);
    setCommit(true);
    setTimeout(() => {
      setCommit(false);
    }, 1000);
  }

  const Clear = () => {
    localStorage.removeItem("markdown");
    props.setMarkdown("");
    setClear(true);
    setTimeout(() => {
      setClear(false);
    }, 1000);
  }

  return (
    <>
    <div className='Markdown-Navbar'>
      <div className="Markdown-Header">Markdown-Preview</div>
      <div className="Markdown-Operators">
        <div className="Markdown-Copy" onClick={Copy}>{copy?(<>Copied &#x2713;</>):(<>Copy</>)}</div>
        <div className="Markdown-Revert" onClick={Revert}>{revert?(<>Reverted &#x2713;</>):(<>Revert</>)}</div>
        <div className="Markdown-Commit" onClick={Commit}>{commit?(<>Commited &#x2713;</>):(<>Commit</>)}</div>
        <div className="Markdown-Clear" onClick={Clear}>{clear?(<>Cleared &#x2713;</>):(<>Clear</>)}</div>
      </div>
    </div>
    <div className="Markdown-Sub-Navbar Desktop-Hide">
      <div className="Edit-Button" onClick={props.handleEditClick}>Edit</div>
      <div className="Preview-Button" onClick={props.handlePreviewClick}>Preview</div>
    </div>
    </>
  )
}

export default MarkdownNavabar