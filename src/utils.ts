import { DataType } from './mockData';
import { RANDOM_MAX, RANDOM_MIN, NUMERATOR, DENOMINATOR } from './constants';
const objectArraySort = function () {
  return function (obj1: DataType, obj2: DataType) {
    var value1 = obj1.score;
    var value2 = obj2.score;
    if (value1 < value2) return 1;
    else if (value1 > value2) return -1;
    else return 0;
  };
};

const searchRanking = (item: DataType, arr: DataType[]) => {
  let result = 0;
  arr.forEach((currentItem, index) => {
    if (currentItem.userID === item.userID) {
      result = index + 1;
    }
  });
  return result;
};

export const formatData = (arr: DataType[]) : DataType[] => {
  const newArr = [...arr].map((item) => {
    return {
      ...item,
      score: (item.score +=
        Math.floor(Math.random() * DENOMINATOR) < NUMERATOR
          ? Math.floor(Math.random() * RANDOM_MAX + RANDOM_MIN)
          : 0)
    };
  });

  newArr.sort(objectArraySort());

  return arr.map((item) => {
    return {
      ...item,
      ranking: searchRanking(item, newArr)
    };
  });
};
