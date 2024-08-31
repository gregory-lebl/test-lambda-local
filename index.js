exports.handler = function (event, context, callback) {
  console.log("event", event);
  console.log("context", context);

  const response = {
    statusCode: 200,
    event: JSON.stringify(event),
    context: JSON.stringify(context),
  };

  return callback(null, JSON.stringify(response));
};
