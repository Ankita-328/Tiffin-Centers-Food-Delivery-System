import React from 'react'
import './List.css'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const List = () => {
  const [list,setList] = useState([])
  const url = "http://localhost:4000"
  
  const fetchList = async()=>{
    const response = await axios.get(`${url}/api/food/list`)
    if(response.data.success){
      //console.log(response.data)
      setList(response.data.data)
    }
    else{
      toast.error("error")
    }
  }
  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList()
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("error")
    }
  }
  useEffect(()=>{
    fetchList()
  },[])
  return (
    <div className='list add flex-col'>
      <p>All Food Items</p>
      <div className="list-table">
        <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
        </div>
        {
          list.map((item,index)=>{
            return(
              <div key={index} className="list-table-format">
                <img src={`${url}/images/`+item.image} alt="" />
                <p> {item.name}</p>
                <p>{item.category}</p>
                <p>${item.price}</p>
                <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default List