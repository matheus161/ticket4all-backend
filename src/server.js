import app from './app';

app.listen(process.env.PORT || 3000, () => {
  console.log(`API executando na porta ${process.env.PORT}`);
});