import React, { useState, useEffect } from 'react';
import styles from './board.module.css';

const Board = ({ boardService }) => {
  const [items, setItems] = useState([]);
  // useEffect(() => {
  //   boardService.getBoards().then(item => setItems(item.data));
  // }, []);
  const onClickHandler = () => {
    boardService.getBoards().then(item => setItems(item.data));
    console.log(items);
  }
  return (
    <div className={styles.container}>
      <div style={{padding: "0 12px"}}>
        <table className={styles.board_list}>
          <colgroup>
              <col width="5%" />
              <col width="*" /> 
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
              <td>{items[0].id}</td>
              <td>{items[0].title}</td>
              <td>Test</td>
              <td>{items[0].createdAt}</td>
              <td>g</td>
              <td>h</td>
              <td>h</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={onClickHandler}>데이터 확인</button>
    </div>
  )
}

export default Board;