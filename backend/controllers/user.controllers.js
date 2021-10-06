const User = require("../models/User");
const usersControllers = {};

const jwt = require("jsonwebtoken");

usersControllers.sayHi = async (req, res) => {
  console.log(req.decoded)
  res.status(200).json({ message: "hola" });
};

usersControllers.signup = async (req, res) => {
  console.log(req.body);
  const { names, lastnames, email, identificacion, NumDocumento,birthdate,expeditiondate,categoria,picture } = req.body;
  console.log(names, lastnames, email, identificacion, NumDocumento,birthdate,expeditiondate,categoria,picture);
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: "Usuario ya existe!" });
  } else {
    console.log("Bienvenido "+ names+" "+lastnames)
    const newUser = new User({ names, lastnames, email, identificacion, NumDocumento,birthdate,expeditiondate,categoria,picture });
    await newUser.save();
    res.status(201).json({ message: "Usuario creado", newUser });
  }
};

usersControllers.signin = async (req, res) => {
  //escribimos en el formulario
  const { email, NumDocumento } = req.body;

  //lo que me devuelve la base de datos
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: "Usuario no existe" });
  }

  if (user.NumDocumento !== NumDocumento) {
    return res.status(401).json({ message: "La contraseña es incorrecta!" });
  }
  const token = jwt.sign({ _id: user._id, names: user.names, lastnames: user.lastnames, email: user.email, identificacion: user.identificacion, NumDocumento: user.NumDocumento, birthdate: user.birthdate, expeditiondate: user.expeditiondate, categoria: user.categoria, picture: user.picture }, "pato");
  res.status(200).json({ message: "Tu estas logueado correctamente", token});
};



module.exports = usersControllers;