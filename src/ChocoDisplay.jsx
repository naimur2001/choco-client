import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import TableData from './TableData';

const ChocoDisplay = () => {

const [chocoDatas,setChocoDatas]=useState([]);

useEffect(()=>{
  fetch('http://localhost:5000/chocos')
  .then(res=> res.json())
  .then(data=> setChocoDatas(data))
},[])
  return (
    <div>
    
    <Link to='/addchoco'  >
      <button className='text-xl btn btn-outline border-2 border-orange-500' >+ Add Chocolate</button>
    </Link>

    <div className='bg-slate-100 my-5 p-3 rounded-2xl'>
    <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        
        <th>Image</th>
        <th>Name</th>
        <th>Country</th>
        <th>Category</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     

  
    {  chocoDatas?.map(choco=> <TableData key={choco._id} choco={choco} chocoDatas={chocoDatas}
    setChocoDatas={setChocoDatas} ></TableData> )}
      
    
    </tbody>

   
    
  </table>
</div>
  </div>
  
  
    </div>
  );
};

export default ChocoDisplay;