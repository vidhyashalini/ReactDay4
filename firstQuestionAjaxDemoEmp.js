import axios from 'axios';
import { useState } from 'react';

function AjaxDemoUsers() {   

   const [usersArray, setUsersArray] = useState([]);

  function getDataButton_click() {

      let url = "https://reqres.in/api/users";
      axios.get(url).then( (resData) => 
      {
        console.log(resData.data.data);
        setUsersArray(resData.data.data);
      });
  }

  let resultArray = usersArray.map(item => 
    {
      return <tr>
          <td>{item.id}</td>
          <td>{item.email}</td>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td> <img src ={item.avatar} alt="Users avatar"/></td>
          
      </tr>;
    });


  return (
    <div style={{"padding":"5px"}}> 

      <h3>AJAX Programming in React JS using Axios Package</h3>
      <hr/>


      <input type="button" onClick={getDataButton_click} 
               value="Get Data" />

      <hr/>

      <table  border="2" cellSpacing="0" width="1000" height="400">
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Avatar</th>
          </tr>
          {resultArray} 
      </table>         

    </div>
  );
}

export default AjaxDemoUsers;