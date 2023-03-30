const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://adrian26050:qf6pOkhuPiARozOU@cluster0.nitvjdj.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function connectToDatabase() {
  try {
    // Connect to the MongoDB database
    await client.connect();
    console.log('Connected to MongoDB');
    // Return a reference to the client object
    return client;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { connectToDatabase };
