const mongoose = require('mongoose');
const configuration = require('./appsettings.json');

mongoose.connect(
  configuration.ConnectionString.Promotions, 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(c => c.connection.db.listCollections().toArray((err, names) =>{
    if(err)
      console.log(err)
    else
      console.log(names)
  }))
  .catch(e => console.error(`${e}\n app is not longer running...`))
  
  const dbConnection = mongoose.connection;

module.exports = dbConnection;