var express = require('express');
var router = express.Router();

// Require Item model in our routes module
var users = require('../models/usersModels');

// Defined store route
router.route('/add').post(function(req, res) {
    var user = new users(req.body);
    user.save()
        .then(item => {
        res.status(200).json({'item': 'Item added successfully'});
})
.catch(err => {
        res.status(400).send("unable to save to database");
});
});

router.route('/').get(function(req, res) {
    users.find(function(err, items) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(items);
        }
    });
});

router.route('/delete/:id').get(function (req, res) {
    users.findByIdAndRemove({_id: req.params.id}, function(err, item){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

router.route('/update/:id').post(function (req, res) {
    users.findById(req.params.id, function(err, item) {
        if (!item)
            return next(new Error('Could not load Document'));
        else {
            item.name = req.body.name;
            item.lastName = req.body.lastName;
            item.email = req.body.email;

            item.save().then(item => {
                res.json('Update complete');
        })
        .catch(err => {
                res.status(400).send("unable to update the database");
        });
        }
    });
});

module.exports = router;