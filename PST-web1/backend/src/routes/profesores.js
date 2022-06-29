const {Router}=require('express');
const router1 = Router();


const {getProfesoresTeoria,getProfesoresPractica, postProfesoresTeoria, putProfesoresPractica, deleteProfesoresPractica, postProfesoresPractica, putProfesoresTeoria, deleteProfesoresTeoria} = require('../controllers/profesoresControl.js');
router1.route('/teoria').get(getProfesoresTeoria).post(postProfesoresTeoria).put(putProfesoresTeoria).delete(deleteProfesoresTeoria);
router1.route('/practica').get(getProfesoresPractica).post(postProfesoresPractica).put(putProfesoresPractica).delete(deleteProfesoresPractica);

module.exports = router1

