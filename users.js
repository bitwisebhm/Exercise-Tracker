const router = require('express').Router();
let User = require('../models/user.model');

router.get('/', (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.post('/add', (req, res) => {
    const username = req.body.username;

    const newUser = new User(
        {
            username
        });

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then( exercises => res.json('user Deleted'))
      .catch(err => res.status(400).json(`Error: ${err}`))
});


module.exports = router;