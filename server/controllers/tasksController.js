const Task = require('mongoose').model('Task');

class TaskController {
    getAll(req, res){
      Task.find({})
            .then(tasks => res.json(tasks))
            .catch(err => res.json(err));
    }
    getOne(req, res){
      Task.findOne({_id: req.params._id})
            .then(task => res.json(task))
            .catch(err => res.json(err));
    }
    create(req, res){
        let m = new Task(req.body);
        m.save()
            .then(() => res.json({status: "ok"}))
            .catch(err => res.json(err));
    }
    update(req, res){
      Task.findOneAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
            .then(() => res.json({status: "ok"}))
            .catch(err => res.json(err));
    }
    remove(req, res){
      Task.findOneAndDelete({_id: req.params._id})
            .then(() => res.json({status: "ok"}))
            .catch(err => res.json(err));
    }
}

module.exports = new TaskController();