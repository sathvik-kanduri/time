
const mongoose  = require('mongoose');

const timesheet= new mongoose.Schema({
     userId:{
       type:String,
       require:true
     },
     empName:{
       type:String,
       require:true
     },
     feature:{
        type:String,
        require:true
     },
     description:{
        type:String,
        require:true
     },
     productive:{
        type:Number,
        require:true
     },
     screenshots:{
        type:String,
        require:true
     },
     status:{
        type:String,
        require:true
     }
}

)

module.exports=mongoose.model("time",timesheet);