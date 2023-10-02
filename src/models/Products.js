//ID del producto, nombre,descripción, precio y que se muestre en pantalla.

import {Schema,model} from 'mongoose'

const productsSchema = new Schema({
    id:{
        type: Number,
        require: true,
        unique:true,
        trim:true,
    },
    nombre:{
        type:String,
        require:true,
    },
    descripción:{
        type:String,
        require:true,
    },
    precio:{

        type:Number,
        require:true,
    }
    
 
    }
    
);

export default model('Products', productsSchema)