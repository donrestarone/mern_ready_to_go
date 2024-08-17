
const User = require('../models/user');
// Create a new user
exports.createUser = async (req, res) => {
 const { name, email, passwordHash } = req.body;
 try {
   const user = new User({ name, email, passwordHash });
   const savedUser = await user.save();
   res.status(201).json(savedUser);
 } catch (error) {
   res.status(500).json({ error: 'An error occurred while creating the user' });
 }
};

// Get all Users
exports.getAllUsers = async (req, res) => {
 try {
   const user = await User.find();
   res.json(user);
 } catch (error) {
   res.status(500).json({ error: 'An error occurred while fetching users' });
 }
};

// Get a specific user by ID
exports.getUser = async (req, res) => {
 const userId = req.params.id;
 try {
   const user = await User.findById(userId);
     if (!user) {
       return res.status(404).json({ error: 'user not found' });
       }
       res.json(user);
 } catch (error) {
   res.status(500).json({ error: 'An error occurred while fetching the user' });
 }
};