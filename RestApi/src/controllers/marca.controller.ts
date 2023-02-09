
import express from 'express';
import MarcaService from 'services/marca.service';

const router = express.Router();

const service: MarcaService = new MarcaService();

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

router.get('/listar/:nome?', async(req, res) => {
    const {nome} = req.params;

    const retorno = await service.Listar(nome || "");

    return res.json(retorno);
});


router.get('/listar-resumo/:nome?', async(req, res) => {
    const {nome} = req.params;

    const retorno = await service.Listar(nome || "");

    return res.json(retorno);
});

router.delete('/excluir/:idEnc', async (request, response) => {
    const { idEnc } = request.params;

    await service.Excluir(idEnc);

    return response.json(idEnc);
});

export default router