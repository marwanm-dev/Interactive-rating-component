const option = {
  hidden: {
    y: -25,
    opacity: 0,
  },
  shown: i => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.15,
    },
  }),
};

export default option;
