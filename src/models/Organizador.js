import Joi from 'joi';
import { Schema, model } from 'mongoose';

const OrganizadorSchema = new Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        cnpj: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
);

// Criando uma model
const Organizador = model('Organizador', OrganizadorSchema); 

const organizadorRules = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(40).required(),
    cnpj: Joi.string().required(),
    name: Joi.string().required()
});

export { Organizador, organizadorRules };