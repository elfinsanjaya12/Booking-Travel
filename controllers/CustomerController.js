const {
  Customer
} = require("../models");

const bcrypt = require('bcryptjs');

exports.signin = (req, res) => {
  const {
    username,
    password
  } = req.body
  Customer.findOne({
    where: {
      username: username
    }
  }).then(user => {
    if (user) {
      const checkPassword = bcrypt.compareSync(password, user.password); // true
      if (checkPassword) {
        // const token = jwt.sign({
        //   user: {
        //     id: user.id,
        //     username: user.username
        //   }
        // }, 'secret');
        res.status(200).json({
          message: 'Success Signin',
          // data: { token, role: user.role }
        })
      } else {
        res.status(403).json({
          message: 'Invalid Signin',
        })
      }
    } else {
      res.status(403).json({
        message: 'Invalid Signin',
      })
    }
  })
}

exports.createCustomer = (req, res) => {
  const {
    username,
    password,
    role,
    nama,
    no_telp
  } = req.body
  const hashPassword = bcrypt.hashSync(password, 10);
  console.log(hashPassword)
  Customer.create({
    username,
    password: hashPassword,
    role,
    nama,
    no_telp
  }).then((customer) => {
    res.status(200).json({
      message: "Succes Cerate Customer",
      customer,
    });
  }).catch((err) => {
    console.log(err)
    res.status(500).json({
      message: "Internal server error"
    });
  });

}