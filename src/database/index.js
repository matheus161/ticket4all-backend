import '../../bootstrap';
import mongoose from 'mongoose';

const mongoDB = mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useCreateIndex: true,
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('Conectado com o MongoDB');
});

db.on('error', (err) => {
  console.log(`Erro ao tentar conexão com o banco de dados: ${err.message}`);
});


export default mongoDB;