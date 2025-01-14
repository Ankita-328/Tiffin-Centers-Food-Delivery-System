import React from 'react'
import './AddTiffin.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';

const AddTiffin = () => {
    const url = "http://localhost:4000"
    const [image,setImage] = useState();
    const[data,setData] = useState({
        name:"",
        address:"",
        phone:""
    })
    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data=>({...data,[name]:value}))
    }
    const onSubmitHandler = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("name",data.name)
        formData.append("address",data.address)
        formData.append("phone",Number(data.phone))

        const response = await axios.post(`${url}/api/tiffin/add-tiffin`,formData)
        if(response.data.success){
            setData({
                name:"",
                address:"",
                phone:""
            })
            toast.success(response.data.message)
        }
        else{
            toast.error(response.data.message)
            //console.log(error)
        }
    }
  return (
    <div className="add">
        <form onSubmit={onSubmitHandler} className="flex-col">
            <div className="add-product-name flex-col">
                <p>Tiffin Center name</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here'/>
            </div>
            <div className="add-product-description flex-col">
                <p>Address</p>
                <textarea onChange={onChangeHandler} value={data.address} name="address" rows="3" placeholder='Write here'></textarea>
            </div>
            <div className="add-phone flex-col">
                <p>Phone</p>
                <input onChange={onChangeHandler} value={data.phone}  type="Number" name='phone' placeholder='Enter here' />
            </div>
            
            <button type='submit' className='add-btn'>Add</button>
        </form>
    </div>
  )
}

export default AddTiffin