import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const AddChoco = () => {
const [category,setCategory]=useState("Premium")
// console.log(category);

const addData=(event)=>{
  event.preventDefault();
  const form=event.target;
  const name=form.name.value;
  const country=form.country.value;
  const url=form.url.value;
  const cate=category;
  // console.log(name,country,url,cate);
   const adding={
    name:name,
    url:url,
    country:country,
    category:cate,
   }
  console.log(adding);

  fetch("http://localhost:5000/chocos",{
method: "POST",
headers: {
  'content-type' : 'application/json'
},
body: JSON.stringify(adding)
  })
  .then(res=> res.json())
  .then(data=>{
    if (data.insertedId) {
      
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Added',
        background:'red',
        color:'black',
        showConfirmButton: false,
        timer: 1500
      })
    }
  } )
  

}




  return (
    <div className='bg-slate-200 my-5 p-3 rounded-2xl'>
      <div className='flex flex-col justify-center '>
        <h1 className='text-center font-semibold text-4xl text-orange-500'>New Chocolates</h1>
        <p className='text-center text-xl font-medium '>Use the below form to create a new product</p>
      </div>
      <Link to='/'  >
      <button className='text-xl btn btn-outline border-2 border-orange-500' >Collection</button>
    </Link>
    <div>
      <form onSubmit={addData} >

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Country</span>
          </label>
          <input type="text" name='country' placeholder="Country" className="input input-bordered" />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name='url' placeholder="Photo-url" className="input input-bordered" />
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

export default AddChoco;