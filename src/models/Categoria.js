import Joi from 'joi';
import { Schema, model } from 'mongoose';

const CategoriaSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        }
    },

    { timeStamps: true },
);

// Criando uma model
const Categoria = model('Categoria', CategoriaSchema); 

const categoriaRules = Joi.object({
    name: Joi.string().required()
});

export { Categoria, categoriaRules };