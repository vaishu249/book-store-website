import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
const app = express();
dotenv.config();
const PORT=process.env.PORT || 4000;
const URL=process.env.MongoDBURL;
try{
  mongoose.connect(URL,{
    useNewUrlParser:true,
    userUnifiedTopology:true
  });
  console.log("Connected to mongodb")
}catch(error){
    console.log("Error : ",error)
}
app.get('/', (req, res) => {
  res.send('vaishnavi')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});
