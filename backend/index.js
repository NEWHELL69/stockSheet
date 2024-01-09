const config = require('./utils/config');
const app = require('./app');

app.listen(config.PORT, () => {
    console.log(`Example app listening on port ${config.PORT}!`)
});