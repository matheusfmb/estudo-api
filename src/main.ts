// main.ts
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())


app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
