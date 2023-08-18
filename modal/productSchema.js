import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    id:{type:String,required:true},
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    filter:String,
    category:String,
    quantity:Number,
    description:String,
    discount:String,
    tagline:String
})

const Product  = mongoose.model('product', productSchema)

export default Product