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