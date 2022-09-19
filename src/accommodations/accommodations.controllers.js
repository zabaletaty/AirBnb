const Accommodations = require("../models/accommodations.model");
const Places = require("../models/places.model");
const Users = require("../models/user.model");

const getAllAccommodations = async () => {
  const data = await Accommodations.findAll({
    include: [
        {
            model: Places,
        },
        {
          model: Users,
          as: 'user'
        },
    ],
    attributes: {
      exclude: ["createdAt", "updatedAt", "userId", "placeId", "hostId"],
    },
  });

  // const data = await Users.findAll({
  //     include: {
  //         model: Accommodations,
  //         include: {
  //             model: Places,
  //             attributes:{
  //                 exclude: ['createdAt', 'updatedAt']
  //             }
  //         }
  //     }
  // })
  return data;
};

const getAccommodationById = async (id) => {
  const data = await Accommodations.findOne({
    where: {
      id,
    },
    include: [{
      model: Places,
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    },{
      as: `user`,
      model: Users,
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    }
  ],
    attributes: {
      exclude: ["createdAt", "updatedAt", "userId", "placeId", "hostId"],
    },
});
  return data;
};

const editAccommodation = async (data, accommodationId) => {
  const {id, score, ...restOfProperties} = data

  const newData = await Accommodations.update(restOfProperties, {
    where:{
      id: accommodationId
    }
  }) 
  return newData
}

module.exports = {
  getAllAccommodations,
  getAccommodationById,
  editAccommodation
};
