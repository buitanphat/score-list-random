import styled from 'styled-components';
import { RANKING_COLOR } from '../constants';

interface ItemBoxProps {
  key: string,
  ranking: number,
}

interface ItemRankingProps {
  key: string,
  ranking: number,
}

interface ItemPictureProps {
  picture?: "",
}

export const ListItem = styled.div`
  background-color: #f7f5f6;
  position: absolute;
  width: 90%;
  height: 500px;
  border-radius: 10px;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
`;

export const Row = styled.div<ItemBoxProps>`
  width: 90%;
  height: 50px;
  position: absolute;
  top: ${(props) => 50 * (props.ranking - 1)}px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  transition: all 0.6s;
  border-bottom: 1px solid #bebea3d3;
`;

export const NumberRanking = styled.div<ItemRankingProps>`
  width: 22px;
  text-align: center;
  border-radius: 50%;
  height: 22px;
  line-height: 22px;
  margin-right: 8px;
  color: #fff;
  font-size: ${(props) => props.ranking > 3 ? 14 : 20}px;
  background-color:  ${(props) => RANKING_COLOR[props.ranking - 1] || '#8eb9f5'};
  font-weight: ${(props) => {
    if (props.ranking === 1) return 700
    if (props.ranking === 2) return 600
    if (props.ranking === 3) return 500
    return 400}};
`;


export const Name = styled.div<ItemRankingProps>`
  color: #363336;
  margin-left: 8px;
  font-size: ${(props) => {
    if (props.ranking === 1) return 20
    if (props.ranking === 2) return 18
    if (props.ranking === 3) return 16
    return 14}}px;

  font-weight: ${(props) => {
    if (props.ranking === 1) return 700
    if (props.ranking === 2) return 600
    if (props.ranking === 3) return 500
    return 400}};

`;

export const ItemPicture = styled.div<ItemPictureProps>`
  background-color:   #e5e5e5;
  background-size: 100%;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(255, 255, 255);
  border-image: initial;
`;

export const ItemScore = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  text-align: right;
  color: #e46a86;
  
`;
