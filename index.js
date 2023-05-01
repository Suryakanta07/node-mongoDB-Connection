const express = require ("express");
const app = express(); 
const mongoose = require ("mongoose");
const UserModel = require ("./models/user.model");

const mongoDB = "mongodb://localhost:27017/check";


//connect from node to mongoDB through mongoose Server
mongoose.connect('mongodb://localhost/check', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });


//   UserModel({
//     name:"Suryakanta Behera",
//     email:"sbehera807@gmail.com",
//     mobile:9776599469
//   }).save((err,db)=>{
//       if(err){
//         console.error(err.message)
//       }else{
//         console.log(`User data saved successfully ${db}`);
//       }
//   })

//data fetch in the terminal and also you can fetch it any IDE of mongoDB
 UserModel({
    name:"Suryakanta Behera",
     email:"sbehera807@gmail.com",
     mobile:9776599469},{
      name:"Praj",
      email:"raj@gamil.com",
      mobile:9998765430
     }
     ).save()
  .then(db => {
    console.log(`User data saved successfully ${db}`);
  })
  .catch(err => {
    console.error(err);
  }); 

  
  //Find the proper data using find method
  UserModel.findOne({name: "Suryakanta Behera"}).then(db => {
      console.log(`Find Data ${db}`);
    }).catch(err =>{
      console.log(err);
    })


//node js successfully connected to server
app.listen(3000, () =>{
    console.log("on Port 3000...")
})