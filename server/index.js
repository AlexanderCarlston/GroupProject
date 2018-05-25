const app = require("./app");
const PORT = parseInt(process.env.PORT || 3000);

app.listen(PORT)
  .on('error',     console.error.bind(console))
  .on('listening', console.log.bind(console, 'Listening on ' + PORT));
