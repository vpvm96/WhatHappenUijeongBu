import React, { useEffect, useRef, useState, memo } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import styles from './editorBoard.module.css';
import QuillEditor from './quillEditor';

const EditorBoard = memo(({ api, user }) => {
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
      await api.updatePost({postId, description, htmlContent});
    }else {
      await api.createNewPost({description,htmlContent});
    }
  }
  useEffect(()=>{
    if(!postId){
      return;
    }
    const fetchData = async () => {
      const { htmlContent: prevHtml } = await api.fetchPostDetail(postId);
      setHtmlContent(prevHtml);
    };
    fetchData();
  },[postId, api])

  return (
    <div>
      <QuillEditor quillRef={quillRef} htmlContent={htmlContent} setHtmlContent={setHtmlContent} api={api} />
      <button className={styles.submit} onClick={handleSubmit}>Done</button>
    </div>
  )
})
export default EditorBoard