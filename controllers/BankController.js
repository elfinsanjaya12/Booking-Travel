const {
    Bank
} = require("../models")

/* get all data bank */
exports.getBank = async (req, res) => {
    try {
        const bank = await Bank.findAll();
        res.status(200).json({
            message: "Success Read Bank",
            bank
        })
    } catch (error) {
        console.log(error)
    }
}


/* create data bank */
exports.actionCreateBank = (req, res) => {
    const {
        no_rekening,
        nama_bank,
        nama_pemilik
    } = req.body

    Bank.create({
        no_rekening,
        nama_bank,
        nama_pemilik
    }).then((bank) => {
        res.status(200).json({
            message: "Success Create Bank",
            bank,
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Internal server error"
        });
    });
}

// updat data bank
exports.actionUpdateBank = (req, res) => {
    const { id } = req.params
    const {
        no_rekening,
        nama_bank,
        nama_pemilik
    } = req.body
    Bank.findOne({
        where: { id: id }
    }).then((bank) => {
        if (bank) {
            bank.update({
                no_rekening,
                nama_bank,
                nama_pemilik
            }).then((updataBank) => {
                res.status(200).json({
                    message: 'Success Update Bank',
                    data: updataBank
                })
            }).catch((err) => {
                res.status(500).json({
                    message: 'Something Went Wrong',
                })
            })
        } else {
            res.status(404).json({
                message: 'Data Not Found',
            })
        }
    }).catch((err) => {
        res.status(500).json({
            message: 'Something Went Wrong',
        })
    })

}

exports.actionDeteleBank = (req, res) => {
    const { id } = req.params
    Bank.findOne({
        where: {
            id: id
        }
    }).then((bank) => {
        bank.destroy().then(() => {
            res.status(200).json({
                message: 'Success Delete Bank',
                data: bank
            })
        }).catch((err) => {
            res.status(500).json({
                message: 'Something Went Wrong',
            })
        })
    }).catch((err) => {
        res.status(500).json({
            message: 'Something Went Wrong',
        })
    })
}