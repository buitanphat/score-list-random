import React, { memo } from 'react';

import Score from './Score';
import {
  ListItem,
  Row,
  NumberRanking,
  Name,
} from './StyledCompontents';

import {DataType} from "../mockData"

interface ScoreListProps {
  data: DataType[]
}

const ScoreList = (props: ScoreListProps) => (
  <ListItem>
    {props.data.map((item) => {
      return (
        <Row key={item.userID} ranking={item.ranking}>
          <NumberRanking key={Math.random().toString()} ranking={item.ranking}>{item.ranking}</NumberRanking>
          <Name key={(Math.random() + 1).toString()} ranking={item.ranking}>{item.displayName}</Name>
          <Score score={item.score} />
      </Row>
      )
    })}
  </ListItem>
);

export default memo(ScoreList);
