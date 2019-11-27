const {
    Car
} = require("../models")

/* get all car */
exports.getCar = async (req, res) => {
    try {
        const car = await Car.findAll();
        res.status(200).json({
            message: "Success Read Cars",
            car
        })
    } catch (error) {
        console.log(error)
    }
}



/* create all car */
exports.actionCreateCar = (req, res) => {
    const {
        no_plat,
        jenis_mobil
    } = req.body

    Car.create({
        no_plat,
        jenis_mobil
    }).then((car) => {
        res.status(200).json({
            message: "Success Create Mobile",
            car,
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Internal server error"
        });
    });
}