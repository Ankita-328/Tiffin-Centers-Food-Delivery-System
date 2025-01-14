import React, { useContext } from 'react'
import './TiffinCentre.css'
import { StoreContext } from '../../context/StoreContext'

const TiffinCentre = () => {
    const { tiffin_list } = useContext(StoreContext)
    return (
        <div>
            <div className="table" id='tiffin-centres'>
                <h2>List of Tiffin Centers</h2>
                <div className="table-items">
                    <div className="table-items-title">
                        <p>Name</p>
                        <p>Address</p>
                        <p>Phone</p>
                    </div>
                    <br />
                    <hr />
                    {tiffin_list.map((item, index) => {
                            return (
                                <div>
                                    <div className='cart-items-item'>
                                        <p>{item.name}</p>
                                        <p>{item.address}</p>
                                        <p>{item.phone}</p>
                                    </div>
                                    <hr />
                                </div>
                            )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TiffinCentre