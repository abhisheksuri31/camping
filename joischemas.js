const joi = require("joi");

module.exports.campgroundschema = joi.object({

    title: joi.string().required(),
    price: joi.number().required().min(0),
    description: joi.string().required(),
    // image: joi.string().required(),
    location: joi.string().required(),
    deleteimages: joi.array()

});

module.exports.reviewschema = joi.object({

    body: joi.string().required(),
    rating: joi.number().required().min(1).max(5)

});