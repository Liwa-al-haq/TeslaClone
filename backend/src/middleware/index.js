// const Admin=require('../config/firebase-config')

// class Middleware {
//     async decodeToken(res, req, next) {
//         const token = req.headers.authorization.split(' ')[1];

//         try {
//             const decodeValue = await admin.auth().verifyIdToken(token);

//             if (decodeValue) {
//                 return next();
//             }
//             else res.json({ message: "Unauthorized" })
        
//         } catch (err) {
//             return res.json({ message: 'Internal Error' })
//         }
//     }
// }

// module.exports=new Middleware()