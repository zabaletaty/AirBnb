const router = require(`express`).Router()
const reservationServices = require(`./reservatio.http`)
router.route(`/`)
    .get(reservationServices.getAll)

module.exports = {
    router
}