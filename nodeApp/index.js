var app = require("./app");

// Listen to port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log("App listening on port 3000!");
});