const express = require ('express');

const TrainDetails = require('../models/TrainDetails');

const router = express.Router();


// Save TrainDetails

router.post('/TrainDetails/save',(req,res)=>{

    let newTrainDetails = new TrainDetails(req.body);

    newTrainDetails.save((err)=>{

        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"TrainDetails saved Successfully"
        });
    });
});

// get TrainDetails

router.get('/TrainDetails',(req,res)=>{
    TrainDetails.find().exec((err,TrainDetails) =>{
        if(err){
            return res.status(400).json({
              error:err
            });
        }
            
        return res.status(200).json({
            sucuss:true,
            existingTrainDetails:TrainDetails
        });

       });
});

// update

router.put('/TrainDetails/update/:id',(req,res)=>{

    TrainDetails.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Update Succesfully"
            });
        }
    );
});


// delete Users

router.delete('/TrainDetails/delete/:id',(req,res) =>{
    TrainDetails.findByIdAndRemove(req.params.id).exec((err,deleteTrainDetails) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesfull",err
        });

        return res.json({
            message:"Delete Succesfull",deleteTrainDetails
        });
    });
});


module.exports = router;