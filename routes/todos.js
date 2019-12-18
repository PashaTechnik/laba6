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
  const Full = await Todo.findById(req.params._id);
  res.render('full', {
    title: 'full',
    Full
  })
});


router.post('/:_id', async (req, res) => {

  result = await Todo.deleteOne({ _id:req.params._id });
  res.redirect('/')

  console.log(`document ${req.params._id} was deleted.`);
})


module.exports = router