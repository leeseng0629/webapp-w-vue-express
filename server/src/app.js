const express = require('express');
// const bodyParser = require("body-parser");
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
app.use(express.json());
app.use(cors());

app.post('/api/v1/register', (req, res) => {
  res.send({
    msg: `Hello ${req.body.email}, you have been registered, Have fun. `,
  });
});

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
