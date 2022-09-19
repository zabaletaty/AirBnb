const uuid  = require("uuid");
const Accommodations = require("../models/accommodations.model");
const Reservation = require(`../models/reservations.model`);
const Users = require("../models/user.model");

const getAllReservation = async () => {
    const data = await Reservation.findAll({
        include:[
            {
                model: Users
            },
            {
                model: Accommodations
            }
        ],
    });
    
      return data;
}

const createReservation = async (data, userId, accommodationId) => {
    const {isFinished, isCanceled, ...restOfData} = data
    const  newReservation = await Reservation.create({
        ...restOfData,
        id: uuid.v4(),
        accommodationId: accommodationId,
        userId: userId
    })

    return newReservation
}

const updateReservation = async (data, reservationId) => {
    const {id, ...restOfData } = data
    const response = await Reservation.update(restOfData,{
        where:{
            id: reservationId
        }
    })
    return response
}

module.exports = {
    getAllReservation,
    createReservation
}