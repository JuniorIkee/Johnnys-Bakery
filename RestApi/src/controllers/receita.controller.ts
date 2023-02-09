
import express from 'express';
import ReceitaService from 'services/receita.service';

const router = express.Router();

const service:ReceitaService = new ReceitaService();

router.post('/gravar',async(req, res) => {
    const registro = req.body;   
    
    const retorno = await service.Gravar(registro);

    return res.json(retorno);
});

router.get('/carregar/:idEnc',async(req, res) => {
    const {idEnc} = req.params;   

    const retorno = await service.Carregar(idEnc);

    return res.json(retorno);
});

router.get('/listar', async(req, res) => {
    const retorno = await service.Listar();

    return res.json(retorno);
});

router.delete('/excluir/:idEnc', async (request, response) => {
    const { idEnc } = request.params;

    await service.Excluir(idEnc);

    return response.json(idEnc);
});

export default router