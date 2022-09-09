const express = require ('express');
const Notice = require ('../models/Notice');
const router = express.Router();


// Save Users 

router.post('/Notice/save',(req,res)=>{

    let newNotice = new Notice(req.body);

    newNotice.save((err)=>{

        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Notice saved Successfully"
        });
    });
});

// get User

router.get('/Notice',(req,res)=>{
    Notice.find().exec((err,Notice) =>{
        if(err){
            return res.status(400).json({
              error:err
            });
        }
            
        return res.status(200).json({
            sucuss:true,
            existingNotice:Notice
        });

       });
});

// update

router.put('/Notice/update/:id',(req,res)=>{

    Notice.findByIdAndUpdate(
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

router.delete('/Notice/delete/:id',(req,res) =>{
    Notice.findByIdAndRemove(req.params.id).exec((err,deleteNotice) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesfull",err
        });

        return res.json({
            message:"Delete Succesfull",deleteNotice
        });
    });
});


module.exports = router;