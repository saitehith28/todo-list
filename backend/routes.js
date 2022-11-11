const router = require('express').Router();
const { Task } = require('./models');

const handleError = (e, res) => {
    return res.status(500).json({ error: e.message });
}

router.get('/', (req, res) => {
    Task
        .find({})
        .then(data => res.json(data))
        .catch(e => handleError(e, res));
})

router.post('/', (req, res) => {
    const task = req.body;
    const newTask = new Task(task);

    newTask
        .save()
        .then(data => res.json(data))
        .catch(e => handleError(e, res));
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body;

    Task
        .findByIdAndUpdate(id, updates, { new: true })
        .then(data => res.status(201).json(data))
        .catch(e => handleError(e, res));
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Task
        .findByIdAndDelete(id)
        .then(data => res.status(204).end())
        .catch(e => handleError(e, res));
})

module.exports = router;