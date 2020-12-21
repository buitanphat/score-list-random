import React, { useState, useEffect } from 'react';

import { ItemScore } from './StyledCompontents';
import {
  SCORE_INTERVAL,
  SCORE_INTERVAL_NUMBER,
  SCORE_DIVISOR
} from '../constants';

interface ScoreProps  {
  score: number,
}

const Score = (props: ScoreProps) => {
  const [num, setNum] = useState(props.score);
  useEffect(() => {
    let i = SCORE_INTERVAL_NUMBER;
    const interval = setInterval(() => {
      i -= 1;
      setNum((n) => Math.floor(n + (props.score - n) / SCORE_DIVISOR));
      if (i <= 0) {
        setNum(props.score);
        clearInterval(interval);
      }
    }, SCORE_INTERVAL);
    return function cleanup() {
      clearInterval(interval);
    };
  }, [props.score]);
  return <ItemScore>{num}pt</ItemScore>;
};

export default Score;
