const { Router } = require('express')
const Todo = require('../views/Todo')
const router = Router()

router.get('/', async (req, res) => {
  const todos = await Todo.find({})

  res.render('index', {
    title: 'Todos list',
    isIndex: true,
    todos
  })
})

router.get('/create', (req, res) => {
  res.render('create', {
    title: 'Create todo',
    isCreate: true
  })
})

router.post('/create', async (req, res) => {
  const todo = new Todo({
    title: req.body.title
  })

  await todo.save()
  res.redirect('/')
})
router.get('/:_id', async (req, res) =>{
  res.render('full', {
    title: 'full'
  })
});




module.exports = router