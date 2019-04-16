const errorHandler = (error, req, res, next) => { /* eslint-disable-line */
  /* istanbul ignore next */
  const defaultCode = 500;
  return res.status(error.httpStatusCode || defaultCode).json({
    error: true,
    message: error.message,
  });
};

export default errorHandler;
