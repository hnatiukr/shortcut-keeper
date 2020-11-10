// libraries
const express = require('express');
const chalk = require('chalk');
const config = require('config');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

app.use(express.json({ extended: true }));

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/link', require('./routes/link.routes'));
app.use('/t', require('./routes/redirect.routes'));

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = config.get('port') || 5000;

async function start() {
  try {
    const mongoURI = config.get('mongoURI');
    const mongoParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    };

    await mongoose.connect(mongoURI, { ...mongoParams });
  } catch (error) {
    console.log('Servser start() error: ', error);
    process.exit(1);
  }
}

start();

app.listen(PORT, () => {
  const text = ` Server has benn started on port ${PORT} ... `;
  console.log(chalk.cyan.bold(text));
});
