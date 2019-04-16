import { decendingOrder } from '../utils';

const sortPhoneNumbers = (numbers, order) => {
  const sortData = (indexA, indexB) => {
    if (indexA > indexB) {
      return order === decendingOrder ? -1 : 1;
    } else if (indexB > indexA) {
      return order === decendingOrder ? 1 : -1;
    }
    return 0;
  };

  const sortedData = numbers.sort(sortData);
  return sortedData;
};

export default sortPhoneNumbers;
