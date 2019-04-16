const randomizer = (min, max) => {
  const digits = (max - min);
  const random = Math.floor(Math.random() * digits) + min;
  return random;
};

export default randomizer;
