import { Organizador } from "../models/Organizador";

async function store(req, res) {
    try {
        // Checando se já existe um Organizador no banco com o cnpj passado
        if (await Organizador.findOne({ cnpj: req.body.cnpj }))
            return res.status(400).json({ message: 'Organizador already exists' });

        // Checando se já existe um Organizador no banco com o email passado
        if (await Organizador.findOne({ email: req.body.email }))
            return res.status(400).json({ message: 'Organizador already exists' });
        
        const organizador = await Organizador.create(req.body);
        organizador.password = undefined;

        return res.status(201).json(organizador);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

async function index(req, res) {
    try {
        const organizadores = await Organizador.find({}, {password: 0});

        return res.status(200).json(organizadores);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export default {
    store, index
};