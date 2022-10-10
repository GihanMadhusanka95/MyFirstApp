const express = require ('express');
const Employee = require('../models/Employee');
const router = express.Router();


// Save Employee 

router.post('/Employee/save',(req,res)=>{

    let newEmployee = new Employee(req.body);


// get Employee

router.get('/Employee',(req,res)=>{
    Employee.find().exec((err,Employee) =>{
        if(err){
            return res.status(400).json({
              error:err
            });
        }
            
        return res.status(200).json({
            sucuss:true,
            existingEmployee:Employee
        });

       });
});

// update

router.put('/Employee/update/:id',(req,res)=>{

    Employee.findByIdAndUpdate(
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


// delete Employeeeeeeee

router.delete('/Employee/delete/:id',(req,res) =>{
    Employee.findByIdAndRemove(req.params.id).exec((err,deleteEmployee) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesfull",err
        });

        return res.json({
            message:"Delete Succesfull",deleteEmployee
        });
    });
});



router.delete('/Employee/delete/:id',(req,res) =>{
    Employee.findByIdAndRemove(req.params.id).exec((err,deleteEmployee) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesfull",err
        });

        return res.json({
            message:"Delete Succesfull",deleteEmployee
        });
    });
});

router.delete('/Employee/delete/:id',(req,res) =>{
    Employee.findByIdAndRemove(req.params.id).exec((err,deleteEmployee) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesfull",err
        });

        return res.json({
            message:"Delete Succesfull",deleteEmployee
        });
    });
});

router.delete('/Employee/delete/:id',(req,res) =>{
    Employee.findByIdAndRemove(req.params.id).exec((err,deleteEmployee) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesfull",err
        });

        return res.json({
            message:"Delete Succesfull",deleteEmployee
        });
    });
});

router.put('/Employee/update/:id',(req,res)=>{

    Employee.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});