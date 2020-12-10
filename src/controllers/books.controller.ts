
import {Request,Response} from "express";
import mongoose from "mongoose";

 const Books = require('../models/books.models');


    mongoose.connect(`mongodb+srv://Alexander88-stack:${process.env.BATLASPASS}@cluster0.g0ded.mongodb.net/biblioteca?retryWrites=true&w=majority`, 
        {useNewUrlParser:true, useUnifiedTopology: true});

class BooksController {
    public async index(req:Request,res:Response) {
    try {
        const allBooks = await Books.find(req.params.id, {raw: true});
        res.send(allBooks)
    }catch(error) {
        res.json(error)
    }

    }
    public async create(req:Request,res:Response) {
        try {

            const request = req.body;
            const newBooks = await Books.create(request);
            
            res.json(newBooks);
        }catch(error) {
            res.json(error)
        }
    
        }

        public async delete(req:Request,res:Response) {
            try {

                 const bookToDelete = req.body.id;
                 const response = await Books.destroy({ id: bookToDelete.id});

                 res.send(`Vaya este libro ${response} ha sido borrado`);
                    
                 
                
            }catch(error) {
                res.json(error)
            }
        
            }
        
            public async update(req:Request,res:Response) {
                try {
                 const books= await Books.update({
                     description: req.body.description,
                     author: req.body.author
                 },
                 {
                    where: {
                        id: req.params.id
                    } 
                 });
                     res.json(books)
                }catch(error) {
                    res.json(error)
                }
            
                }
            


};



export const booksController = new BooksController();