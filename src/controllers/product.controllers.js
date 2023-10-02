//ID del producto, nombre,descripción, precio y que se muestre en pantalla.

import Products from "../models/Products.js";






export const productAdd =  async (req, res) => {
    const { id, nombre, descripcion, precio } = req.body;

    
    const products = Products({
        id: id,
        nombre: nombre,
        descripcion: descripcion,
        precio: precio
    })
    await products.save()
    res.send('saved')

}

export const productFind =  async (req, res) => {
    const id = req.params['id1'];

    const productoEncontrado = await Products.findOne({id})
    
    
    res.send(productoEncontrado)

}

export const productDelete =  async (req, res) => {
    const id = req.params['id1'];

     const producto1 = await Products.findOneAndDelete({ id })
       
    console.log(producto1)
    
    res.send("borrado")

}
export const productAll =  async (req, res) => {
    

    const Todos = await Products.find()
    
    
    res.send(Todos)

}

