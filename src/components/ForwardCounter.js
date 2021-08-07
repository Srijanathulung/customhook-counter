import { useState, useEffect } from 'react';
import useCounter from '../hooks/user-counter';

import Card from './Card';

const ForwardCounter = () => {
  // 'useCounter' custom hook is called and assign to the const counter
  const counter = useCounter();
 
  return <Card>{counter}</Card>;
};

export default ForwardCounter;