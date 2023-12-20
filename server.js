const { connect } = require("mongoose");
const app = require("./app");
const { DB_HOST, PORT } = process.env;

connect(DB_HOST)
  .then(() => {
    app.listen(PORT, function () {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((err) =>
    console.log(`Server not running. Error message: ${err.message}`)
  );
