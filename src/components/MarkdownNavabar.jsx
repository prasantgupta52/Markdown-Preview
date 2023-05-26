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
        <div className="Markdown-Copy" onClick={Copy}>{copy?(<>Copied &nbsp; <i class="fa fa-check"></i></>):(<>Copy &nbsp; <i class="fa fa-copy"></i></>)}</div>
        <div className="Markdown-Revert" onClick={Revert}>{revert?(<>Reverted &nbsp; <i class="fa fa-check"></i></>):(<>Revert &nbsp; <i class="fa fa-undo"></i></>)}</div>
        <div className="Markdown-Commit" onClick={Commit}>{commit?(<>Commited &nbsp; <i class="fa fa-check"></i></>):(<>Commit &nbsp; <i class="fa fa-save"></i></>)}</div>
        <div className="Markdown-Clear" onClick={Clear}>{clear?(<>Cleared &nbsp; <i class="fa fa-check"></i></>):(<>Clear &nbsp; <i class="fa fa-minus-square"></i></>)}</div>
      </div>
    </div>
    <div className="Markdown-Sub-Navbar Desktop-Hide">
      <div className="Edit-Button" onClick={props.handleEditClick}>Edit &nbsp; <i class="fa fa-pencil"></i></div>
      <div className="Preview-Button" onClick={props.handlePreviewClick}>Preview &nbsp; <i class="fa fa-play"></i></div>
    </div>
    </>
  )
}

export default MarkdownNavabar