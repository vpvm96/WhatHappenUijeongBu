import React, { useMemo, useCallback, memo } from 'react'
import styles from './quillEditor.module.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillEditor = memo(({ quillRef, boardService, htmlContent, setHtmlContent })=>{
  const imageHandler = useCallback(()=>{
    const formData = new FormData();

    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.setAttribute('name', 'image');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      formData.append('image', file);

      const res = await boardService.uploadImage(formData);
      if (!res.success) {
        alert('이미지 업로드에 실패하였습니다.');
      }
      const url = res.payload.url;
      const quill = quillRef.current.getEditor();
      const range = quill.getSelection()?.index;
      if (typeof (range) !== 'number') return;

      quill.getSelection(range, 1);
      quill.clipboard.dangerouslyPasteHTML(
        range,
        `<img sre=${url} alt="img" />`);
    }
  }, [boardService, quillRef]);

  const modules = useMemo(
    () => ({
      toolbar: {
          container: [
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ size: ["small", false, "large", "huge"] }, { color: [] }],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
                { align: [] },
            ],
            ["image", "video"],
          ],
          handlers: {
              image: imageHandler,
          },
      },
  }), [imageHandler]);
  return (
    <>
      <ReactQuill
        ref={quillRef}
        value={htmlContent}
        onChange={setHtmlContent}
        modules={modules}
        theme="snow"
        className={styles.quillEditor}
      />
    </>
  )
  })

export default QuillEditor