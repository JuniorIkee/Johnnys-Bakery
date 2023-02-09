import { Router } from 'express';
import receitaRouter from './receita.controller';
import ingredienteRouter from './ingrediente.controller';
import fornecedorRouter from './fornecedor.controller';
import marcaRouter from './marca.controller';

const routes = Router();

routes.use('/receita', receitaRouter);
routes.use('/ingrediente', ingredienteRouter);
routes.use('/fornecedor', fornecedorRouter);
routes.use('/marca', marcaRouter);

routes.get('/teste', async (_, response) => {
  const data = {
    projeto: process.env.NOMEAPP,
    data: new Date(),
  };

  return response.json(data);
});

module.exports = routes;
export default routes;
