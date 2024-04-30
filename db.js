import mongoose from "mongoose";

export async function conectDB () {

    try {
        await mongoose.connect('mongodb+srv://jesusUser:Jesus1511@cluster0.aujlc8y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('conectado exitosamente a la base de datos')
    } catch (err) {
        console.log('error al conectar a la base de datos')
        console.log(err)
    }
}