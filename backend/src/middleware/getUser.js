
const express = require('express');
const User = require('../../models/user');

const getUser = async function (req, res, next) {
    console.log("Email from params:", req.params.email);

    try {
        const user = await User.findOne({ email: req.params.email });

        if (!user) {
            console.log("User not found");
            return res.status(404).json({ message: 'Cannot find user' });
        }

        console.log("Found user:", user);
        res.user = user;
        next();
    } catch (err) {
        console.error("Error:", err);
        return res.status(500).json({ message: err.message });
    }
};


module.exports = getUser;
