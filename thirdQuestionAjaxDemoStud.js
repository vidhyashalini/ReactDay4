
import axios from 'axios';
import { useState } from 'react';

function AjaxDemoStud() {   

   const [studsArray, setstudsArray] = useState([]);
   const [studname, setStudname] = useState("");
   const [studage, setStudage] = useState("");
   const [studgender, setStudgender] = useState("");



  function getDataButton_click() {

      let url = "http://localhost:3005/api/studs";
      axios.get(url).then( (resData) => 
      {       
        setstudsArray(resData.data);
      });
  }

  function addStudButton_click() {
    
    let studObj = {};
    studObj.Studname = studname;
    studObj.Studage = studage;
    studObj.Studgender = studgender;
    
    let url = "http://localhost:3005/api/studs";
    axios.post(url, studObj).then( (resData) => 
    {       
      alert(resData.data.status);
      getDataButton_click();
    });

   
    clearFields();
}

function clearFields()
{
    setStudname("");
    setStudage("");
    setStudgender(""); 
}

function deleteStud_click(dno) {

  let flag = window.confirm("Are you sure want to delete?");    
  if(  flag == false   )
  {
      return;
  }

  let url = "http://localhost:3005/api/studs" + dno;
  axios.delete(url).then( (resData) => 
  {       
    alert(resData.data.status);
    getDataButton_click();
  });
}


  let resultArray = studsArray.map(item => 
    {
      return <tr>
          <td>{item.Studname}</td>
          <td>{item.Studage}</td>
          <td>{item.Studgender}</td>
          <td>
          <a href="javascript:void(0);" 
                   onClick={() => deleteStud_click(item.Studname)}>
                    <img  src="images/delete.webp"  width="20"  />
                </a> 
          </td>
      </tr>;
    });


  return (
    <div style={ {"border":"2px solid blue", "padding":"10px", "padding-bottom":"15px", "backgroundColor" : "lightyellow"}}>

      <h3>MERN Stack Implementation</h3>
      <hr/>

            <input type="text" placeholder="Stud Name" value={studname} onChange={ (e) => setStudname(e.target.value)} />
            <input type="text" placeholder="Stud Age" value={studage} onChange={ (e) => setStudage(e.target.value)} />
            <input type="text" placeholder="Stud Gender" value={studgender} onChange={ (e) => setStudgender(e.target.value)} />
      <hr/>

      <input type="button" onClick={getDataButton_click} 
               value="Get Data" />
                           <input type="button" onClick={addStudButton_click} value="Add Stud" />

      <hr/>

      <table  border="2" cellSpacing="0" width="500">
          <tr>
            <th>Stud Name</th>
            <th>Stud Age</th>
            <th>Stud Gender</th>
            <th></th>
          </tr>
          {resultArray} 
      </table>         

    </div>
  );
}

export default AjaxDemoStud;