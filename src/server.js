import app from './app';

app.listen(process.env.PORT, () => {
  console.log(`API executando na porta ${process.env.PORT}`);
});