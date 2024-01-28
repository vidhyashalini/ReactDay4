const express = require("express");
const DeptModel = require('./models/dept-model');
const router = express.Router();

// Read All
router.get("/Depts", async function (req, res) {

    let result = await DeptModel.find({}, { "_id": 0 });

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
router.get("/Depts/:id", async function(req, res)
{
    var dno =  req.params.id;   	    
    let result  =  await DeptModel.findOne({ Deptno: dno}, {"_id":0});         
    console.log("[Read Single] - " + JSON.stringify(result));
    res.send(result);     
});


// Create 
router.post('/Depts',  async  function (req,res)
{ 
        var deptObj  = new  DeptModel({ 
                Deptno : parseInt(req.body.Deptno),	
                Dname  :  req.body.Dname,
                Loc   : req.body.Loc  });

        // Logic to insert new dept in database
        let newObj  =  await  deptObj.save(); 
		
		var result = {};
		result.status  = "Record inserted in Database";
		console.log("[Create] - Record inserted in Database");
		res.send(result);           
});


// Update
router.put('/Depts',  async function (req,res)
{ 
        var deptObj  = {};
        deptObj.Deptno = parseInt(req.body.Deptno);
        deptObj.Dname =  req.body.Dname;
        deptObj.Loc =  req.body.Loc; 

        // Logic to insert new dept in database
        let resResult  = await  DeptModel.findOneAndUpdate(  {Deptno:deptObj.Deptno},   {  $set : deptObj});
 
		var result = {};
		result.status  = "Record updated in Database";
		console.log("[Update] - Record updated in Database");
		res.send(result);	
});

// Delete
router.delete('/Depts/:id',async function (req,res)
{  
    var dno =  req.params.id;   
    let resResult  =  await  DeptModel.findOneAndDelete({ Deptno: dno}); 

	var result = {};
	result.status  = "Record deleted from Database";
	console.log("[Delete] - Record deleted from Database");
	res.send(result);
       
});



module.exports = router;
