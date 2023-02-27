import React,{useEffect,useState} from 'react'
import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { XGrid } from '@material-ui/x-grid';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { Link } from "react-router-dom";
import axios from "axios";


export default function UserList() {
  const [data, setData] = useState([]);


useEffect(() =>{
  const postData = async()=>{
     const {data} = await axios.get('https://robotixnitrr.herokuapp.com/api/recruitment/retrieve/');
     console.log(data,"hello");
     setData(data);
   
    //  localStorage.getItem('users') === undefined ? setData(data) : setData(localStorage.getItem('users'));
  }
  
  postData();
  
},[])

  


  
  const columns = [
   
    {
      field: "user",
      headerName: "Student",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <AccountCircleIcon style={{margin : "5px"}} />
            {params.row.Name}
          </div>
        );
      },
    },
    { field: "Email ID", headerName: "Email", width: 200 },
    { field: "Year", headerName: "Year", width: 150 },
    { field: "Branch", headerName: "Branch", width: 150 },
    {
      field: "score",
      headerName: "Score",
      width: 150,
    },
  
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">More Info</button>
            </Link>
           
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}