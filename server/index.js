 const express = require('express');
 var {connectToDatabase} = require( './db_connection' );
const app = express()
const PORT = 3000 || process.env.PORT

const postExercisesController= async (req,res)=>{
    const body = req.query;
    try {
        const client = await connectToDatabase();
        // Do something with the MongoDB client object
        const db = client.db('sport_db');
        const collection = db.collection('FavExercise');
        const data = await collection.insertOne(body);
        console.log('Data:', data);
         // Disconnect from the MongoDB database
         await client.close();
      } catch (error) {
        console.error(error);
      } finally {
       
      }
    res.status(200).json({message:'success'});
}


app.get('/api/postExercices',(req,res)=>{postExercisesController(req,res)})
app.get('/',(req,res)=>res.json({message: "Root route for FITAPP"}))
app.listen(PORT, console.log("Server started on port", PORT))


