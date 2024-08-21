// import Todo from "../models/TodoModel.js";
import User from "../models/userModels.js";
export const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export const getUserById = async (req, res) => {
//   try {
//     const todo = await Todo.findById(req.params.id);
//     res.json(todo);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

export const addUser = async (req, res) => {
  const token = req.headers.auth;
  // const user = await User.findOne({ token: token });
  const params = { ...req.body };
  const user = new User(params);
  try {
    const insertedUser = await user.save();
    console.log(insertedUser);
    res.json(insertedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// export const updateUser = async (req, res) => {
//   try {
//     const updateTodo = await Todo.updateOne(
//       { _id: req.params.id },
//       { $set: req.body }
//     );
//     res.status(200).json(updateTodo);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const deleteUser = async (req, res) => {
//   try {
//     const deleteTodo = await Todo.deleteOne({ _id: req.params.id });
//     res.status(200).json(deleteTodo);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
