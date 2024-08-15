import mongoose from 'mongoose'

export const connectDB = async () => {
try{
    await mongoose.connect('mongodb+srv://adalusej:i0gMgwu0lvl1OnOl@cluster0.xatrs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
console.log("conectado");


}catch (error){

    console.log(error);
}




}