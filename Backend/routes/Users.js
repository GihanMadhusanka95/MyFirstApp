const express = require ('express');

const Users = require('../models/Users');

const router = express.Router();


// Save Users

router.post('/users/save',(req,res)=>{

    let newUsers = new Users(req.body);

    newUsers.save((err)=>{

        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"User saved Successfully"
        });
    });
});

// get User

router.get('/users',(req,res)=>{
       Users.find().exec((err,Users) =>{
        if(err){
            return res.status(400).json({
              error:err
            });
        }
            
        return res.status(200).json({
            sucuss:true,
            existingUsers:Users
        });

       });
});

// update

router.put('/users/update/:id',(req,res)=>{

    Users.findByIdAndUpdate(
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

router.delete('/users/delete/:id',(req,res) =>{
    Users.findByIdAndRemove(req.params.id).exac((err,deleteUsers) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesfull",err
        });

        return res.json({
            message:"Delete Succesfull",deleteUsers
        });
    });
});


module.exports = router;