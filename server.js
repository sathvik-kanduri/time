const express=require('express');
const mongoose=require('mongoose');
const timesheets=require('./models/timesheet.js')
const route=require('./routes/timesheets.js');
const cors=require('cors');
const app=express();

app.use('/uploads', express.static('uploads'))
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://sathvik:Sathvik%402000@cluster0.ovlrsyr.mongodb.net/time')
.then(()=>{
    console.log('the database is connected');
})
.catch((err)=>{
    console.log('the error is' , err); 
})

app.get('/home',(req,res)=>{
    res.send('welcome to Employee management app');
})

app.use('/',route)

app.listen(5000,()=>{
    console.log('the port is 5000');
});  