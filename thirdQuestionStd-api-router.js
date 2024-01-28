const express = require("express");
const StudentModel = require('./models/studModel');
const router = express.Router();

// Read All
router.get("/studs", async function (req, res) {

    let result = await StudentModel.find({}, { "_id": 0 });

    try {
        console.log("[Read All] - No. of  items get from database : " + result.length);
        res.send(result);
    }
    catch (error) {
        // sending error details to client
        res.status(500).send(error);    
    }
});

// Read Single
router.get("/studs/:id", async function(req, res)
{
    var dno =  req.params.id;   	    
    let result  =  await StudentModelModel.findOne({ StudId: dno}, {"_id":0});         
    console.log("[Read Single] - " + JSON.stringify(result));
    res.send(result);     
});


// Create 
router.post('/studs',  async  function (req,res)
{ 
        var studObj  = new  StudentModel({ 
                StudId : parseInt(req.body.Studid),	
                Studname  :  req.body.Studnamename,
                Studage  : req.body.Studage,
                Studgender : req.body.Studgender  });

        // Logic to insert new dept in database
        let newObj  =  await  studObjObj.save(); 
		
		var result = {};
		result.status  = "Record inserted in Database";
		console.log("[Create] - Record inserted in Database");
		res.send(result);           
});


// Update
router.put('/studs',  async function (req,res)
{ 
    var studObj  = {};
        StudId = parseInt(req.body.Studid);
        Studname  = req.body.Studnamename;
        Studage  = req.body.Studage;
        Studgender = req.body.Studgender;
        // Logic to insert new dept in database
        let resResult  = await  StudentModel.findOneAndUpdate(  {StudId:studObj.StudId},   {  $set : studObj});
 
		var result = {};
		result.status  = "Record updated in Database";
		console.log("[Update] - Record updated in Database");
		res.send(result);	
});

// Delete
router.delete('/studs/:id',async function (req,res)
{  
    var dno =  req.params.id;   
    let resResult  =  await  StudentModel.findOneAndDelete({ StudId: dno}); 

	var result = {};
	result.status  = "Record deleted from Database";
	console.log("[Delete] - Record deleted from Database");
	res.send(result);
       
});



module.exports = router;
