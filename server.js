const app = require("./src/app");

// define port, process.env.PORT for heroku
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
