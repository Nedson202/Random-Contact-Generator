import { randomizer } from './index';

const getPhoneNumber = (min, max) => {
  const phoneNumber = randomizer(min, max);
  const modifiedPhoneNumber = `0${phoneNumber}`;
  return modifiedPhoneNumber;
};

export default getPhoneNumber;
