import mongoose from "mongoose";

const  cardSchema = mongoose.Schema({
    name:String,
    imgUrl:String
})

export default mongoose.model('cards',cardSchema);

//my method
// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

// const  cardSchema = new Schema({
//     name:String,
//     imgUrl:String
// })