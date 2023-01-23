const express = require('express');


// const {getConnection} = require('../middleware/dbconfig.js');
const {

    getReviews,
    medicalRating,
    doctorRating,
    createReview
} = require("../controller/reviewController.js")




// const db =getConnection();


const reviewRouter = express.Router();




reviewRouter.get('/:id',getReviews);


reviewRouter.get("/medicalrating/:id",medicalRating)

reviewRouter.get("/doctorrating/:id",doctorRating)



reviewRouter.post('/',createReview);



module.exports = {reviewRouter};