function renderUser(res, user) {
  res.json({
    status: 'success',
    data: user
  });
}

function renderError(res, statusCode, message) {
  res.status(statusCode).json({
    status: 'error',
    message
  });
}

module.exports = { renderUser, renderError }; 