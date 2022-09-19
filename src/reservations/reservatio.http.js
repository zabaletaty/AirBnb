const reservationControler = require(`./reservation.controlers`)

const getAll = (req, res) => {
    reservationControler.getAllReservation()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const postReservation = (req, res) => {
    const accommodationId = req.params.id
    const data = req.body
    const userID = req.user.id

    reservationControler.createReservation(data, userID, accommodationId)
        .then(response => {
            if(response){
                res.status(201).json(response)
            }else{
                res.status(400).json(err)
            }
        })
        .catch(err => res.status(400).json({message: `vacio`}))
    
}

module.exports = {
    postReservation,
    getAll
}