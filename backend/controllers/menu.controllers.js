const Menu = require("../models/Menu");
const menuControllers = {};

menuControllers.showMenu = async (req, res) => {
  res.status(200).json({ message: "Este es el menu", user: req.decoded });
};

menuControllers.create = async (req, res) => {

  if(req.decoded.role === 1){
    const {name, price, description, type} = req.body
    const menu = new Menu({name, price, description, type})
    await menu.save()
  
    res.status(201).json({message: "un nuevo menu ha sido creado", menu, user: req.decoded}) 
  } else {
    res.status(401).json({message: "Tu no puedes crear un menu"})
  }
} 
module.exports = menuControllers;
