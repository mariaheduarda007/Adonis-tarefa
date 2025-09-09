import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})


// router.get('/courses', '#controllers/courses_controller.index')
// router.get('/courses/:id', '#controllers/courses_controller.show')
// router.post('/courses', '#controllers/courses_controller.store')
// router.put('/courses/:id', '#controllers/courses_controller.update')
// router.delete('/courses/:id', '#controllers/courses_controller.destroy')

router.resource('cursos', '#controllers/cursos_controller')
router.resource('disciplinas', '#controllers/disciplinas_controller')
router.resource('alunos', '#controllers/alunos_controller')
// Matrículas
router.get('matriculas', '#controllers/matriculas_controller.index')
router.post('matriculas', '#controllers/matriculas_controller.store')
router.delete('matriculas/:alunoId/:disciplinaId',
'#controllers/matriculas_controller.destroy')
