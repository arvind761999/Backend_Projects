import mongoose from 'mongoose';

import { DB_NAME } from '../constants.js';

const connectDB = async () => {
  try{
      const connectToDb = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
      console.log(`\n MongoDB connected !! DB HOST: ${connectToDb.connection.host}`);
  }
  catch(error){
     console.error("MONGODB connection error: ", error);
     process.exit(1);
  }
}

export default connectDB;