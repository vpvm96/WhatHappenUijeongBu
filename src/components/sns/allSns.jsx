import React from 'react';
import Sns from './sns';

const AllSns = ({ snsService }) => {
  return (
    <Sns snsService={snsService} addable={true} />
  )
}

export default AllSns;
