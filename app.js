// libraries
const chalk = require('chalk');
const config = require('config');
const mongoose = require('mongoose');

const app = require('express')();

app.use('/api/auth', require('./routes/auth.routes'));

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
