const mongoose= require("mongoose");
const mongoURL="mongodb+srv://vinni:vinni246@cluster0.7iuc6op.mongodb.net/";

const connectToMongo=async ()=>{
    await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            socketTimeoutMS: 30000,
    })
    console.log("connected ");   
}

module.exports=connectToMongo