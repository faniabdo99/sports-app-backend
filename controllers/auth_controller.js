import express from 'express'
import db from '../models/index.js'
import { standardResponse } from '../includes/responses.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const router = express.Router();
/**
 * Return JWT for authentication
 * POST /auth/
 **/
router.post('/login', (req, res) => {
    // Fetch the user
    db.User.findOne({ where: { email: req.body.email} }).then(user => {
        if (!user) {
            return res.send(standardResponse(false, 'There is no user with such email!'))
        }
        // Authenticate the user
        bcrypt.compare(req.body.password, user.password)
               .then(response => {
                    if(response) {
                        // The user has been authenticated
                        // Generate a token
                        jwt.sign({ user: user}, "THE_SECRET_KEY", (error, token) => {
                            res.json({
                                success: true,
                                ...user.dataValues,
                                token: token
                            })
                        })
                    }else{
                        return res.send(standardResponse(false, 'The email or password are incorrect'))
                    }
               })
               .catch(error => {
                    res.send(error.message)
               }) 
        // Send response
    }).catch(error => {
        console.log(error)
    })
    
})

export default router;