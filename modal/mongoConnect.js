const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = "mongodb+srv://ragunanthan:6PTA9GpNzhAwvGnN@cluster0.og5gv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

function connectToDb() {
    client.connect().then(async res => {
        console.log("Database connected!");
      }).catch(err => {
        console.log({err});
      });
}
let db = client.db("ragu");
module.exports =  {db, connectToDb};