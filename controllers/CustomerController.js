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
          user
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

/* get cutomer */
exports.getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findAll();
    res.status(200).json({
      message: "Succes read Customer",
      customer
    })
  } catch (error) {
    console.log(error)
  }
}

/* create controller */

exports.createCustomer = (req, res) => {
  /* exports mengabil data dari router */
  const {
    /* mendeklarasikan variabel yang ada di database */
    username,
    password,
    nama,
    no_telp
  } = req.body /* request data dari body pada postman */
  const hashPassword = bcrypt.hashSync(password, 10); /* encrypt password */
  console.log(hashPassword)
  Customer.create({
    /* menambahk data ke table */
    username,
    password: hashPassword,
    role: "penumpang",
    nama,
    no_telp
  }).then((customer) => {
    res.status(200).json({
      /* jika sukses maka kirim pesan 200 artinya ok */
      message: "Succes Cerate Customer",
      customer,
    });
  }).catch((err) => {
    console.log(err)
    res.status(500).json({
      /* jika salah atau eror maka 500 yaitu internal server eror */
      message: "Internal server error"
    });
  });

}