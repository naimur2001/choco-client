import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from "sweetalert2";
const Update = () => {
  const choco=useLoaderData();
  const {name,url,country,_id}=choco;
  const [category,setCategory]=useState("Premium")
  const updatechoco=(event)=>{
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const country=form.country.value;
    const url=form.url.value;
    const cate=category;
    // console.log(name,country,url,cate);
     const updating={
      name,cate,url,country
     }
    console.log(updating);
  
    fetch(`http://localhost:5000/chocos/${_id}`,{
  method: "PUT",
  headers: {
    'content-type' : 'application/json'
  },
  body: JSON.stringify(updating)
    })
    .then(res=> res.json())
    .then(data=>{
      if (data.modifiedCount>0) {       
        Swal.fire({
          title: 'Success!',
          text: 'Coffee Updated Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
          })
      }
    } )
    
  
  }

  return (
    <div className='bg-slate-200 my-5 p-3 rounded-2xl'>
    <div className='flex flex-col justify-center '>
      <h1 className='text-center font-semibold text-4xl text-orange-500'>Chocolates</h1>
      <p className='text-center text-xl font-medium '>Use the below form to update a product</p>
    </div>
    <Link to='/'  >
    <button className='text-xl btn btn-outline border-2 border-orange-500' >Collection</button>
  </Link>
  <div>
    <form onSubmit={updatechoco} >

    <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" name='name' placeholder="Name" defaultValue={name} className="input input-bordered" />
      </div>
    <div className="form-control">
        <label className="label">
          <span className="label-text">Country</span>
        </label>
        <input type="text" name='country' placeholder="Country" defaultValue={country} className="input input-bordered" />
      </div>
    <div className="form-control">
        <label className="label">
          <span className="label-text">Photo</span>
        </label>
        <input type="text" name='url' placeholder="Photo-url" defaultValue={url} className="input input-bordered" />
      </div>
   <div className='mt-1'>
   <label className="label">
          <span className="label-text">Category</span>
        </label>
   <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='w-full outline-none py-2 px-3 rounded-lg text-base border-2 border-orange-300'
          >
            <option  value='Premium'>Premium</option>
            <option value='Regular'>Regular</option>
            <option value='Low Calorie'>Low Calorie</option>
          </select>
   </div>
   <div className="form-control mt-3">
        
        <input type="submit" value={"Add"} className='btn btn-warning' />
      </div>
    </form>
   
  </div>
  </div>
  );
};

export default Update;