import React from 'react'
import { useParams } from 'react-router';
import styles from './mySns.module.css';
import Sns from './sns';

const MySns = ({ snsService }) => {
  const { username } = useParams();
  return (
    <Sns snsService={snsService} username={username} addable={false} />
  )
}

export default MySns;