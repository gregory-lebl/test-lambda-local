exports.handler = function (event, context, callback) {
  const response = {
    statusCode: 200,
    event: JSON.stringify(event),
    context: JSON.stringify(context),
  };

  return callback(null, JSON.stringify(response));
};
