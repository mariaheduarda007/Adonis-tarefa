/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

// Rotas para CRUD
router.get('/courses', '#controllers/courses_controller.index')
router.get('/courses/:id', '#controllers/courses_controller.show')
router.post('/courses', '#controllers/courses_controller.store')
router.put('/courses/:id', '#controllers/courses_controller.update')
router.delete('/courses/:id', '#controllers/courses_controller.destroy')
// const CoursesController = () => import('#controllers/courses_controller')
// router.resource('courses', 'coursesController');
