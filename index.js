const express = require('express');
const app = express();

const dotenv = require('dotenv'); dotenv.config();
app.use(express.json());

require('mongoose')
    .connect(
        process.env.DB_CONNECTION,
        { useUnifiedTopology: true, useNewUrlParser: true },
        (err) => {
            if (err)
                console.error(res);
            else
                console.log('DB connected');
        }
    );

app.use(require('./routes'));

app.listen(3000, () => {
    console.log('Server Up and running');
})