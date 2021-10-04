const mongoose = require("mongoose")

const atlas = "mongodb+srv://admin:X1lNc2m6OfiplHIm@cluster0.vro3r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


mongoose.connect(atlas, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log("Conectado Correctamente a la BD :)"))
    .catch(err => console.log(err))

module.exports = mongoose;