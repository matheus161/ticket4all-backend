import { Router } from 'express';
import CategoriaController from './controllers/CategoriaController';
import { categoriaRules } from './models/Categoria';
import validate from './middlewares/validate';
import verifyId from './middlewares/verifyId';
import OrganizadorController from './controllers/OrganizadorController';
import { organizadorRules } from './models/Organizador';
import EventoController from './controllers/EventoController';
import { eventoRules } from './models/Evento';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';

const router = Router();

// Rotas da Documentação
router.use('/api', swaggerUi.serve);
router.get('/api', swaggerUi.setup(swaggerDocument));
routes.get('/', (req, res) => res.json({ message: 'Bem vindo ao ticket4all!' }));

// Rotas de Categoria
router.post('/api/categoria/', validate(categoriaRules), CategoriaController.store)
router.get('/api/categoria/', CategoriaController.index);
router.get('/api/categoria/:id', verifyId, CategoriaController.show);
router.put('/api/categoria/:id', verifyId, validate(categoriaRules), CategoriaController.update);
router.delete('/api/categoria/:id', verifyId, CategoriaController.remove);

// Rotas de Organizador
router.post('/api/organizador/', validate(organizadorRules), OrganizadorController.store);
router.get('/api/organizador/', OrganizadorController.index);

// Rotas de Evento
router.post('/api/evento/', validate(eventoRules), EventoController.store)
router.get('/api/evento/', EventoController.index);
router.get('/api/evento/:id', verifyId, EventoController.show);
router.put('/api/evento/:id', verifyId, validate(eventoRules), EventoController.update);
router.delete('/api/evento/:id', verifyId, EventoController.remove);

export default router;