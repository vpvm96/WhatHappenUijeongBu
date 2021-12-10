import React, { memo, useState } from 'react';
import parseDate from '../../util/parseDate';
import EditSnsForm from './editSnsForm';
import styles from './snsCard.module.css'

const SnsCard = memo(
  ({ sns, owner, onDelete, onUpdate, onUsernameClick }) => {
    const { id, username, name, text, createdAt } = sns;
    const [editing, setEditing] = useState(false);
    const onClose = () => setEditing(false);

    return (
      <li className='tweet'>
        <section className='tweet-container'>
        {/* <section className={styles.tweet-container}> */}
          <div className='tweet-body'>
            <span className='tweet-name'>{name}</span>
            <span
              className='tweet-username'
              onClick={() => onUsernameClick(sns)}
            >
              @{username}
            </span>
            <span className='tweet-date'> · {parseDate(createdAt)}</span>
            <p>{text}</p>
            {editing && (
              <EditSnsForm
                sns={sns}
                onUpdate={onUpdate}
                onClose={onClose}
              />
            )}
          </div>
        </section>
        {owner && (
          <div className='tweet-action'>
            <button className='tweet-action-btn' onClick={() => onDelete(id)}>
              x
            </button>
            <button
              className='tweet-action-btn'
              onClick={() => setEditing(true)}
            >
              ✎
            </button>
          </div>
        )}
      </li>
    );
  }
);
export default SnsCard;
