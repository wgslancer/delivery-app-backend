const { server } = require('./app');
const mongoose = require('mongoose');
const runningServer = async () => {
  await mongoose.connect(
    'mongodb+srv://wgslancer:159510tlTL@cluster0.ltq4p.mongodb.net/delivery?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  );
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log(`connected with mongo atlas`);
    server;
  });
};

runningServer();
