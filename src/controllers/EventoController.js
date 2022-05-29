import { Evento } from "../models/Evento";
import { Categoria } from "../models/Categoria";

async function store(req, res) {
    try {
        // Checando se já existe um Evento no banco com o titulo passado
        if (await Evento.findOne({ titulo: req.body.titulo }))
            return res.status(400).json({ message: 'Evento already exists' });
    
        // Checando se passou categorias validas
        if (req.body.categoria !== null) {
            for (let index = 0; index < req.body.categoria.length; index++) {
                const categoria = await Categoria.findById(req.body.categoria[index]);
                if (!categoria) {
                    return res.status(405).json({ message: 'Categoria not valid' });
                }
            }
        }

        const evento = await Evento.create(req.body);

        return res.status(201).json(evento);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error' });
    }
}

async function index(req, res) {
    try {
        const eventos = await Evento.find().populate('categoria');

        return res.status(200).json(eventos);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

async function show(req, res) {
    try {
        const evento = await Evento.findById(req.params.id).populate('categoria');

        if (!evento)
            return res.status(404).json({ message: 'Evento not found' });

        return res.status(200).json(evento);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}
async function update(req, res) {
    try {
        const evento = await Evento.findById(req.params.id);

        // Se passou um titulo diferente do atual ele
        // checa se já existe uma evento no banco
        if (req.body.titulo !== evento.titulo) {
            const eventoExists = await Evento.findOne({ titulo : req.body.titulo });
            if (eventoExists) {
                return res.status(400).json({ message: 'Evento already exists' });
            }
        }

        if (req.body.categoria !== null) {
            for (let index = 0; index < req.body.categoria.length; index++) {
                if (req.body.categoria[index] !== evento.categoria[index]) {
                    const categoria = await Categoria.findById(req.body.categoria[index]);
                    if (!categoria) {
                        return res.status(405).json({ message: 'Categoria not valid' });
                    }
                }
            }
        }

        const eventoUpdated = await Evento.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
        return res.status(200).json(eventoUpdated);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

async function remove(req, res) {
    try {
        const eventoDeleted = await Evento.findByIdAndRemove(req.params.id);

        if (!eventoDeleted)
            return res.status(404).json({ message: 'Categoria not found' });
        
        return res.status(200).json({ message: 'Categoria deleted with success'});
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export default {
    store, index, show, update, remove
}