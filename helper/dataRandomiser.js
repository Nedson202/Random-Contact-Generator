const randomizer = (min, max) => {
  const digits = (max - min) + min;
  return Math.floor(Math.random() * digits);
};

export default randomizer;
