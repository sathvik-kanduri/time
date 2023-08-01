const mongoose=require('mongoose');
const timesheet=require('../models/timesheet');

const getTimesheets=async(req,res,next)=>{
    try{
    const id=req.params.id;
    const time=await timesheet.findById({userId:id});
    res.send(time);
    }
    catch(err)
    {
        res.status(404).send(err);
    }
}

const getallTimesheets=async(req,res,next)=>{
    try{
    const time=await timesheet.find();
    res.send(time);
    }
    catch(err)
    {
        res.status(404).send(err);
    }
}

const addTimesheets=async(req,res,next)=>{
    
    try{
       const userId=req.body.userId;
       const empName=req.body.empName;
       const feature= req.body.feature;
       const description=req.body.description;
       const productive=req.body.productive;
       const status=req.body.status;
       const screenshots=req.file.path
       const time=await timesheet.create({
        userId:userId,
        empName:empName,
        feature:feature,
        description:description,
        productive:productive,
        status:status,
        screenshots:screenshots
       })

       res.status(200).send(req.body);

    }

    catch(err){
        console.log("the error is ",err);
        res.status(400).json({error:err})
    }
}

const updatebyemployee=async(req,res,next)=>{

    try{
        const _id=req.params.id;
        console.log(_id);
        const updated=await timesheet.findByIdAndUpdate(_id,req.body);

        res.send(updated);
    }
    catch(err)
    {
        res.json({error:err})
    }
}



module.exports={getTimesheets,addTimesheets,getallTimesheets,updatebyemployee}