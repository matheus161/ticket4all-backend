import Joi from 'joi';
import mongoose, { Schema, model } from 'mongoose';

const EventoSchema = new Schema(
    {
        titulo: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
        },
        datas: [{
            type: String
        }],
        organizador: {
            type: String,
            required: true
        },
        categoria: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Categoria'
        }],
        preco: {
            type: String,
            required: true
        },
    },

    { timeStamps: true },
);

// Criando uma model
const Evento = model('Evento', EventoSchema);

// Fazendo a verificação dos atributos direto na rota
const eventoRules = Joi.object({
    titulo: Joi.string().required(),
    descricao: Joi.string(),
    datas: Joi.array(),
    organizador: Joi.string().required(),
    categoria: Joi.array(),
    preco: Joi.string().required(),
});

export { Evento, eventoRules };
