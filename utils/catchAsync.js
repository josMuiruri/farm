module.exports = (fnn) => {
  return (req, res, next) => {
    fnn(req, res, next).catch((err) => next(err));
  };
};
