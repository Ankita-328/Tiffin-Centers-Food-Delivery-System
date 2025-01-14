import React, { useContext } from 'react'
import './ExploreMenu.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const ExploreMenu = ({category,setCategory}) => {
    const {menu_list} = useContext(StoreContext)
  return (
    <div>
        <div className="explore-menu" id='explore-menu'>
            <h1>Explore Tiffin Centres</h1>
            <p className='explore-menu'>Choose from diverse tiffin centres featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
            <div className="explore-menu-list">
                {menu_list.map((item,index)=>{
                    return (
                        <div onClick={()=>setCategory(prev=>prev===item.name?'All':item.name)} key={index} className='explore-menu-list-item'>
                            <img className={category===item.name?'active':''}  src={assets.menu_1} alt="" />
                            <p>{item.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu