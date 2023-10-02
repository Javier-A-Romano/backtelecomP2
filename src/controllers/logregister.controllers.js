
import Users from '../models/Users.js'

import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'


export const loginUser =  async (req, res) => {
    const { user, email, password } = req.body;


    const userlo = await Users.findOne({ email })
    let compare = await bcryptjs.compare(password, userlo.password)
    console.log(compare + "PIPAAA")
    if (compare) {
        if (userlo.rol == "admin") {
            let token = jwt.sign({
                usuario: user,
            }, 'educacionittelecomadmin', {
                expiresIn: '48h'
            })

            console.log(token)
            res.send(token)
        }
        else {
            {
                let token = jwt.sign({
                    usuario: user,
                }, 'educacionittelecomuser', {
                    expiresIn: '48h'
                })
                console.log(token)
                res.send(token)
            }
        }

        
    } else {
        res.send("no log")
    }


}


export const registerUser =  async (req, res) => {
    const { user, email, password, rol } = req.body;

    let passwordEnc = await bcryptjs.hash(password, 8)
    const users = Users({
        user: user,
        email: email,
        password: passwordEnc,
        rol: rol
    })
    await users.save()
    res.send('saved')

}