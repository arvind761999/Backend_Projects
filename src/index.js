import mongoose from 'mongoose';
// import { DB_NAME } from './constants';



import dotenv from "dotenv"

import express from 'express';
import connectDB from './db/Dbconnection.js';

dotenv.config({
    path: './env'
})



connectDB()







//first approach Connected DB by using iffe function 
// ( async() => {
//     try{
//          await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);

//          app.on("error", (error) => {
//             console.log('ERROR: ', error);
//             throw error
//          })

//          app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//          })

//     }
//     catch(error){
//        console.error("ERROR" , error)
//        throw err
//     }
// })()