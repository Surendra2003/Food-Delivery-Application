import mongoose from "mongoose";


// export const connectDB = async () =>{
//     await mongoose.connect('mongodb+srv://KOYALAKUNTLA:7032810622@cluster0.rc29euw.mongodb.net/FoodDeliveryApp').then(()=>console.log("Database connected..!"));
// }


// import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("DB Connection failed:", err);
    process.exit(1);
  }
};
