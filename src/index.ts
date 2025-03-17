import express from 'express';
import logger from './utils/logger';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para logging de requisições
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.get('/health', (req, res) => res.send('OK'));
app.get('/version', (req, res) => res.json({ version: '1.0.0' }));

// Middleware para tratamento de erros
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  logger.error('Erro na aplicação', err);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => logger.info(`App running on port ${PORT}`));
}

export default app;