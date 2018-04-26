export const round5 = (x) => {
  return (x % 5) >= 2.5 ?
    (parseInt(x / 5, 10) * 5) + 5 :
    parseInt(x / 5, 10) * 5;
};

export default round5;
