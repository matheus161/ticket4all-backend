import { Categoria } from "../models/Categoria";

async function store(req, res) {
    try {
        // Checando se já existe uma categoria no banco
        if (await Categoria.findOne({ name: req.body.name }))
            return res.status(400).json({ message: 'Categoria already exists' });
        
        const categoria = await Categoria.create(req.body);

        return res.status(201).json(categoria);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

async function index(req, res) {
    try {
        const categorias = await Categoria.find();

        return res.status(200).json(categorias);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

async function show(req, res) {
    try {
        const categoria = await Categoria.findById(req.params.id);

        if (!categoria)
            return res.status(404).json({ message: 'Categoria not found' });

        return res.status(200).json(categoria);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

async function update(req, res) {
    try {
        const categoriaUpdated = await Categoria.findById(req.params.id);

        // Se passou um nome diferente do atual ele
        // checa se já existe uma categoria no banco
        if (req.body.name !== categoriaUpdated.name) {
            const categoriaExists= await Categoria.findOne({ name : req.body.name });
            if (categoriaExists) {
                return res.status(400).json({ message: 'Categoria already exists' });
            }
        }
            
        categoriaUpdated.name = req.body.name || categoriaUpdated.name;

        await categoriaUpdated.save();
    
        return res.status(200).json(categoriaUpdated);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

async function remove(req, res) {
    try {
        const categoriaDeleted = await Categoria.findByIdAndRemove(req.params.id);

        if (!categoriaDeleted)
            return res.status(404).json({ message: 'Categoria not found' });
        
        return res.status(200).json({ message: 'Categoria deleted with success'});
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export default {
    store, index, show, update, remove
};