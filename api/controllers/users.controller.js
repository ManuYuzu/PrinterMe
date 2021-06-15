const { UserModel } = require('../models/users.model')

// var ObjectId = require('mongoose').Types.ObjectId;

exports.getAllUsers = (req, res) => {
  UserModel
    .find()
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}

exports.getUser = (req, res) => {
  UserModel
    .findById(req.params.userid)
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}

exports.createUser = (req, res) => {
  UserModel
    .create(req.body)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}

exports.userTimeline = (req, res) => {
  console.log(res.locals.user.follows)
  UserModel
    .find({ _id: { $in: res.locals.user.follows } })
    .then(users => {
      console.log(users)
    })
    .catch(err => {
      console.log(err)
    })
}

exports.followUser = (req, res) => {
  if (!res.locals.user.follow.includes(req.params.userid)) {
    res.locals.user.follow.remove(req.params.userid)
  }
  res.locals.user
    .save()
    .then(user => {
      UserModel
        .findById(req.params.userid)
        .then(followed => {
          if (!followed.follower.includes(user.id)) {
            followed.follower.push(user.id)
          } else {
            followed.follower.remove(user.id)
          }
          followed.save()
        })
      res.status(200).json(user)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}

exports.getAllSellers = (req, res) => {
  UserModel
    .find({ role: 'seller' })

    .then(sellers => {
      console.log(sellers)
      res.json(sellers)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}

exports.addUserPrinter = (req, res) => {
  res.locals.user.seller.printer.push(req.body.printerId)
  res.locals.user
    .save()
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}

exports.removeUserPrinter = (req, res) => {
  res.locals.user.seller.printer.remove(req.body.printerId)
  res.locals.user
    .save()
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}
