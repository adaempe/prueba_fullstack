import Poke from "../models/poke.model.js";

export const getPoke = async (req, res) => {
  try {
    const pokes = await Poke.find({ user : req.user.id }).populate("user");
    res.json(pokes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPoke = async (req, res) => {
  try {
    const { atributo, date } = req.body;
    const newPoke = new Poke({
      atributo,
      date,
      user: req.user.id,
    });
    await newPoke.save();
    res.json(newPoke);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};