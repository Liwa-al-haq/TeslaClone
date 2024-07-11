// const express = require('express')
// const router = express.Router()
// const User = require('../../models/user')
// const getUser = require("../middleware/getUser");
// //middleware


// //Getting all

// router.get('/', async (req, res) =>{
//     try {
//         console.log(req.headers)
//         const users = await User.find()
//         res.send(users)
//     } catch (err) {
//         res.status(500).json({message:err.message})
//     }
// })
// // Getting one
// // router.get('/:id',getUser,(req, res) =>{
// //     res.send(res.user.firstName)
// // })
// // Creating one
// router.post('/', async(req, res) => {
//     const user=new User({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     carStatus: req.body.carStatus,
//     email:req.body.email
    
//     })
//     try {
//         const newUser = await user.save()
//         res.status(201).json(newUser)
//     } catch (err) {
//         res.status(400).json({message:err.message})
//     }
// })
// // Updating one
// router.get("/update/order/:email", getUser, (req, res) => {
//     res.json(res.user.orders);
// });

// router.put("/update/order/:email", async (req, res) => {
//     try {
//         const { email } = req.params;
//         const order = req.body.order; // Make sure you have the order data in the request body

//         const updatedUser = await User.findOneAndUpdate(
//             { email: email },
//             { $push: { orders: order } },
//             { new: true } // Return the updated user document
//         );

//         if (!updatedUser) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         res.json(updatedUser.orders);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: err.message });
//     }
// });
// // Deleting one
// router.delete('/:id',getUser,async (req, res) => {
    
//     try {
//         await res.user.remove()
//         res.json({message:'User Removed'})
//     }
//     catch (err) {
//         res.status(500).json({message:err.message})
//     }
// })



// module.exports = router
const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const getUser = require('../middleware/getUser');
const { Op } = require('sequelize'); // Import Sequelize operators

// Import the sequelize instance
const sequelize = require('../../config/sequelize-config');

// Getting all
router.get('/', async (req, res) => {
    try {
        console.log(req.headers);
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Creating one
router.post('/', async (req, res) => {
    const { firstName, lastName, carStatus, email } = req.body;

    try {
        const newUser = await User.create({
            firstName,
            lastName,
            carStatus,
            email,
        });
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Updating one
router.get('/update/order/:email', getUser, (req, res) => {
    res.json(res.user.orders);
});

router.put('/update/order/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const order = req.body.order;

        const updatedUser = await User.findOne({ where: { email } });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        const updatedOrders = updatedUser.orders || [];
        updatedOrders.push({
            status: order.status,
            model: order.model,
            paint: order.paint,
            en_auto: order.en_auto,
        });

        const [updatedRowCount, [updatedRow]] = await User.update(
            {
                orders: updatedOrders,
            },
            {
                where: { email },
                returning: true,
            }
        );

        res.json(updatedRow.orders);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});


// Deleting one
router.delete('/:id', getUser, async (req, res) => {
    try {
        await res.user.destroy();
        res.json({ message: 'User Removed' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
