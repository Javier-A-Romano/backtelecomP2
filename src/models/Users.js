//Los campos necesarios incluyen username, email, y password.

import {Schema,model} from 'mongoose'

const usersSchema = new Schema({
    user:{
        type: String,
        require: true,
        unique:true,
        trim:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    rol:{

        type:String,
        require:true,
    }
    
 
    }
    
);

export default model('Users', usersSchema)