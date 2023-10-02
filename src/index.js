
import './database.js'
import express from 'express'

import morgan from 'morgan'

import users from './models/Users.js'


import { verifyToken ,verifyTokenUser} from './middlewares/authJwt.js'
import {loginUser , registerUser } from './controllers/logregister.controllers.js'
import { productAdd ,productFind , productDelete , productAll } from './controllers/product.controllers.js'

const app = express()

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/',verifyTokenUser,async (req, res) => {
    const {  email} = req.body;
    const usertoken= await users.findOne({ email })
    console.log(email)
    res.send(usertoken.rol)

}
)
app.post('/api/users/register',registerUser
)
app.get('/api/users/login',loginUser
)

app.post('/api/product',productAdd
)
app.get('/api/product/:id1',productFind
)

app.delete('/api/product/delete/:id1',productDelete
)
app.get('/api/product',productAll
)

app.listen(3000)
console.log('server on port', 3000)