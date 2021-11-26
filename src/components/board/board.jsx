import React from 'react';
import styles from './board.module.css';

const Board = () => {
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
              <th>구분</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일시</th>
              <th>조회수</th>
              <th>첨부</th>
            </tr>
          </thead>  
          <tbody>
            <tr>
              <td>1</td>
              <td>s</td>
              <td>d</td>
              <td>f</td>
              <td>g</td>
              <td>h</td>
              <td>h</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Board
