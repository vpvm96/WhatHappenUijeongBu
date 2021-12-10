import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import styles from './board.module.css';

const Board = ({ boardService }) => {
  const history = useHistory();
  const [items, setItems] = useState([]);

  useEffect(()=>{
    // boardService.getBoards()
    // .then((items) => setItems(...items.data))
    // .catch((error) => console.log(error));
    boardService.getBoards()
      .then((items) => setItems(items, ...items.data))
      .catch(e => console.log(e));
  }, []);

  const onClickHandler = () => {
    history.push('/editorBoard')
  }
  console.log(items.data[0]);
  return (
    <div className={styles.container}>
      <div style={{padding: "0 12px"}}>
        <table className={styles.board_list}>
          <colgroup>
              <col width="5%" />
              <col width="50%" />
              <col width="*" />
              <col width="*" />
              <col width="*" />
              <col width="*" />
          </colgroup>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일시</th>
              <th>조회수</th>
              <th>첨부</th>
            </tr>
          </thead>  
          <tbody>
            <tr>
              <td>{items.data[0].id}</td>
              <td>{items.data[0].title}</td>
              <td>{items.data[0].content}</td>
              <td>{items.data[0].createdAt}</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
        <button 
          className={styles.postButton}
          onClick={onClickHandler}
          >글작성
        </button>
      </div>
    </div>
  )
}

export default Board;