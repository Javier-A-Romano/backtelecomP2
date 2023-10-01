
import './database.js'
import express from 'express'
import Users from './models/Users.js'
import morgan from 'morgan'
import bcryptjs from 'bcryptjs'
import users from './models/Users.js'
import jwt from 'jsonwebtoken'
import { verifyToken ,verifyTokenUser} from './middlewares/authJwt.js'

const app = express()

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/',verifyTokenUser, async (req, res) => {
    const {  email} = req.body;
    const usertoken= await users.findOne({ email })
    console.log(email)
    res.send(usertoken.rol)

}
)
app.post('/api/users/register', async (req, res) => {
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
)
app.get('/api/users/login', async (req, res) => {
    const { user, email, password } = req.body;


    const userlo = await users.findOne({ email })
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
)
app.listen(3000)
console.log('server on port', 3000)