const mongoose = require("mongoose")

const atlas = "mongodb+srv://striker:compaq*@clusterstriker.ysjmi.mongodb.net/miProyecto?retryWrites=true&w=majority"
//const local = "mongodb://user:pass@localhost:27017/empresaDB"
const local = "mongodb://localhost:27017/miProyecto"

mongoose.connect(local, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log("Conectado Correctamente a la BD :)"))
    .catch(err => console.log(err))

module.exports = mongoose;