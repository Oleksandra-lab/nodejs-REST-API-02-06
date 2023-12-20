const { HttpError } = require("../helpers");

const isEmptyBody = (req, res, next) => {
  const fields = Object.keys(req.body);
  if (fields.length === 0) {
    if (req.method === "PUT") {
      next(HttpError(400, "missing fields"));
    } else if (req.method === "PATCH")
      next(HttpError(400, "missing field favorite"));
  }
  next();
};

module.exports = isEmptyBody;
