import React, { memo, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../../context/authContext';
import Banner from './banner';
import NewSnsForm from './newSnsForm';
import SnsCard from './snsCard';
import styles from './sns.module.css';

const Sns = memo(({ snsService, username, addable }) => {
  const [sns, setSns] = useState([]);
  const [error, setError] = useState('');
  const history = useHistory();
  const { user } = useAuth();

  useEffect(() => {
    snsService
      .getAllSns(username)
      .then((sns) => setSns([...sns]))
      .catch(onError);

    const stopSync = snsService.onSync((sns) => onCreated(sns));
    return () => stopSync();
  }, [snsService, username, user]);

  const onCreated = (sns) => {
    setSns((sns) => [sns, ...sns]);
  };

  const onDelete = (snsId) =>
  snsService
      .deleteSns(snsId)
      .then(() =>
      setSns((sns) => sns.filter((sns) => sns.id !== snsId))
      )
      .catch((error) => setError(error.toString()));

  const onUpdate = (snsId, text) =>
    snsService
      .updateSns(snsId, text)
      .then((updated) =>
      setSns((sns) =>
        sns.map((item) => (item.id === updated.id ? updated : item))
        )
      )
      .catch((error) => error.toString());

  const onUsernameClick = (sns) => history.push(`/${sns.username}`);

  const onError = (error) => {
    setError(error.toString());
    setTimeout(() => {
      setError('');
    }, 3000);
  };

  return (
    <>
      {addable && (
        <NewSnsForm snsService={snsService} onError={onError} />
      )}
      {error && <Banner text={error} isAlert={true} transient={true} />}
      {sns.length === 0 && <p className='tweets-empty'>No Sns Yet</p>}
      <ul className='tweets'>
        {sns.map((sns) => (
          <SnsCard
            key={sns.id}
            sns={sns}
            owner={sns.username === user.username}
            onDelete={onDelete}
            onUpdate={onUpdate}
            onUsernameClick={onUsernameClick}
          />
        ))}
      </ul>
    </>
  );
});

export default Sns;