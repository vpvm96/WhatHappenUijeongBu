import React, { useEffect, useRef, useState, memo } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import styles from './editorBoard.module.css';
import QuillEditor from './quillEditor';

const EditorBoard = memo(({ boardService, user }) => {
  const history = useHistory();
  const [htmlContent, setHtmlContent] = useState("");
  const { id: postId } = useParams();
  const quillRef = useRef();
  
  const handleSubmit = async () => {
    const description = quillRef.current.getEditor().getText();
    if (description.trim()==="") {
      alert("내용을 입력해주세요.")
      return;
    }
    if (postId) {
      await boardService.updatePost({postId, description, htmlContent});
    } else {  
      const data = await boardService.createBoard("My First Free Board", description);
    }
  }
  useEffect(()=>{
    if(!postId) {
      return;
    }
    const fetchData = async () => {
      const { htmlContent: prevHtml } = await boardService.fetchPostDetail(postId);
      setHtmlContent(prevHtml);
    };
    fetchData();
  },[postId, boardService])

  return (
    <div>
      <QuillEditor quillRef={quillRef} htmlContent={htmlContent} setHtmlContent={setHtmlContent} boardService={boardService} />
      <button className={styles.submit} onClick={handleSubmit}>Done</button>
    </div>
  )
})
export default EditorBoard