const User = require("../models/User");
const usersControllers = {};

const jwt = require("jsonwebtoken");

usersControllers.sayHi = async (req, res) => {
  console.log(req.decoded)
  res.status(200).json({ message: "hola" });
};

usersControllers.signup = async (req, res) => {
  console.log(req.body)
  const { email, password, role } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: "Usuario ya existe!" });
  } else {
    console.log(role)
    const newUser = new User({ email, password, role });
    await newUser.save();

    //const token = jwt.sign({_id: newUser._id, email: newUser.email}, "pato")

    res.status(201).json({ message: "Usuario creado", newUser });
  }
};

usersControllers.signin = async (req, res) => {
  //escribimos en el formulario
  const { email, password } = req.body;

  //lo que me devuelve la base de datos
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: "Usuario no existe" });
  }

  if (user.password !== password) {
    return res.status(401).json({ message: "La contraseña es incorrecta!" });
  }

  const token = jwt.sign({ _id: user._id, email: user.email, role: user.role }, "pato");

  res.status(200).json({ message: "Tu estas logueado correctamente", token });
};

module.exports = usersControllers;

/*

usersControllers.signup = async (req, res) => {
  const { email, password } = req.body;

  const newUser = new User({ email, password });

  await newUser.save();

  const token = jwt.sign({ _id: newUser._id, email: newUser.email }, "pato");

  res.status(201).json({ message: "User has been created", token });
};

usersControllers.signin = async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({email});

    if(!user) return res.status(401).json({ message: "The email not exists" });//correo no encontrado
    if(user.password !== password) return res.status(401).json({ message: "Wrong password" })

    const token = jwt.sign({ _id: user._id, email: user.email }, "pato");

    res.status(200).json({message: "you are logged in", token})
  };

*/
