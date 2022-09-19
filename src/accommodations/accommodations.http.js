const accommodationControllers = require('./accommodations.controllers')

const getAll = (req, res) => {
    accommodationControllers.getAllAccommodations()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const getByID = (req, res) =>{
    const id = req.params.id;
    accommodationControllers.getAccommodationById(id)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const editAccmmod = (req, res) => {
    const accommodationId = req.params.id
    const data = req.body
    accommodationControllers.editAccommodation(accommodationId, data)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => res.status(400).json(err))
}



module.exports = {
    getAll,
    getByID,
    editAccmmod
}


