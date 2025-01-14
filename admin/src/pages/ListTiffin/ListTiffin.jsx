import React from 'react'
import './ListTiffin.css'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const ListTiffin = () => {
    const [list,setList] = useState([])
    const url = "http://localhost:4000"
    
    const fetchList = async()=>{
      const response = await axios.get(`${url}/api/tiffin/list-tiffin`)
      if(response.data.success){
        //console.log(response.data)
        setList(response.data.data)
      }
      else{
        toast.error("error")
      }
    }
    const removeTiffin = async (tiffinId) => {
      const response = await axios.post(`${url}/api/tiffin/remove-tiffin`,{id:tiffinId})
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
        <p>All Tiffin Center</p>
        <div className="list-table">
          <div className="list-table-format title">
              <b>Name</b>
              <b>Address</b>
              <b>Phone</b>
              <b>Action</b>
          </div>
          {
            list.map((item,index)=>{
              return(
                <div key={index} className="list-table-format">
                  <p> {item.name}</p>
                  <p>{item.address}</p>
                  <p>{item.phone}</p>
                  <p onClick={()=>removeTiffin(item._id)} className='cursor'>X</p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

export default ListTiffin