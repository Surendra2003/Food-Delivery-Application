import mongoose from "mongoose";


// export const connectDB = async () =>{
//     await mongoose.connect('mongodb+srv://KOYALAKUNTLA:7032810622@cluster0.rc29euw.mongodb.net/FoodDeliveryApp').then(()=>console.log("Database connected..!"));
// }


await mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected..!"))
  .catch((err) => console.error("DB Connection failed:", err));
