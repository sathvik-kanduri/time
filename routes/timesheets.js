const express=require('express');
const {getTimesheets,addTimesheets,getallTimesheets,updatebyemployee}=require('../controllers/timesheets.js');

const app=express();
const route=express.Router()
const multer=require('multer');
const upload = multer({ dest: 'uploads/' })

route.get('/timesheet/:id',getTimesheets);

route.get('/timesheet',getallTimesheets)

route.post('/timesheet',upload.single('image'),addTimesheets);

route.patch('/timesheet/employee/:id',updatebyemployee);

module.exports=route;