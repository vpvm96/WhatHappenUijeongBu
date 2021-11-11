import React from 'react';
import styles from './board.module.css';

const Board = () => {
  return (
    // <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th> 
            <th>등록일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    // </div>
  )
}

export default Board
