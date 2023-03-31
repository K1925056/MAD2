 const express = require('express');
const { ObjectId } = require('mongodb');
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
const getFafouriteExercisesController =async(req, res)=>{
    try {
        const client = await connectToDatabase();
        // Do something with the MongoDB client object
        const db = client.db('sport_db');
        const collection = db.collection('FavExercise');
        const data = await collection.find().toArray();
        res.status(200).json({data});
         // Disconnect from the MongoDB database
         await client.close();
      } catch (error) {
        console.error(error);
        res.status(400).json({message:'Erorr',error});
      } finally {
       
      }
   
}
const deleteFavouriteExercisesController = async (req,res) =>{
    const {id} = req.query;
    console.log(id)
    try {
        const client = await connectToDatabase();
        // Do something with the MongoDB client object
        const db = client.db('sport_db');
        const collection = db.collection('FavExercise');
        const data = await collection.deleteOne({_id: new ObjectId(`${id}`)})
        res.status(200).json({data});
        console.log(data);
         // Disconnect from the MongoDB database
         await client.close();
      } catch (error) {
        console.error(error);
        res.status(400).json({message:'Erorr',error});
      } }

      const updateFavExercise = async (req, res) => {
        const {_id, bodyPart,equipment, gifUrl, name, target} = req.query.initial;
        console.log(bodyPart)
      
        try {
          const client = await connectToDatabase();
          const db = client.db('sport_db');
          const collection = db.collection('FavExercise');
          const newValues = { $set: {bodyPart,equipment, gifUrl, name, target}};
          const requestdata = await collection.updateOne(
            { _id:new ObjectId(_id) },
            newValues
          );
          console.log(requestdata);
          client.close();
          res.status(200).json({ message: '1 document updated' });
        } catch (error) {
          console.error(error);
          res.status(400).json({ message: 'Error', error });
        }
      };

app.put('/api/favExercices',(req,res)=>{updateFavExercise(req,res)})
app.get('/api/favExercices',(req,res)=>{getFafouriteExercisesController(req,res)})
app.delete('/api/favExercices',(req,res)=>{deleteFavouriteExercisesController(req,res)})
app.get('/api/postExercices',(req,res)=>{postExercisesController(req,res)})
app.get('/',(req,res)=>res.json({message: "Root route for FITAPP"}))

app.listen(PORT, console.log("Server started on port", PORT))
