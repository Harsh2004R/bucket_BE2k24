const express = require('express');
const router = express.Router();
const { UserModel } = require("../models/user.model.js")

router.use(express.json())
// Get user bucket list
const getUserBucket = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user.bucket);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Add item to bucket list
const addItemToBucket = async (req, res) => {
    const { text, dateAdded, timeAdded, targetDate } = req.body;
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.bucket.push({ text, dateAdded, timeAdded, targetDate });
        await user.save();
        res.json(user.bucket);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Remove item from bucket list
const removeItemFromBucket = async (req, res) => {
    const { text } = req.body;
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.bucket = user.bucket.filter(item => item.text !== text);
        await user.save();
        res.json(user.bucket);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Update bucket list
const updateBucket = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.bucket = req.body.bucket;
        await user.save();
        res.json(user.bucket);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};




router.get('/:id', getUserBucket);
router.post('/:id/add', addItemToBucket);
router.put('/:id/update', updateBucket);
router.delete('/:id/remove', removeItemFromBucket);





module.exports = {router};