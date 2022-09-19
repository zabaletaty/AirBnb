const router = require('express').Router()
const passport = require(`passport`)

const accommodationServices = require('./accommodations.http')
const reservationServices = require('../reservations/reservatio.http')

require(`../middleware/auth.middleware`)(passport)

router.route('/')
    .get(accommodationServices.getAll)

router.route('/:id')
    .get(accommodationServices.getByID)

router.route('/:id/make-reservation')
    .post(passport.authenticate('jwt', {session: false}), reservationServices.postReservation)
    //.post(reservationServices.postReservation)
    

module.exports= {
    router
}
