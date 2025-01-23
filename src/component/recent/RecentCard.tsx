"use client"
import React from 'react'
import { list } from '../Data';
import { useIsMobile } from '../UseMobile';

const RecentCard = () => {
    const mobile = useIsMobile()
    return (
        <>
            <div className='container  w-screen  px-16 mtop' style={{
                display: "grid",
                gridTemplateColumns: mobile ? "repeat(1, 1fr)" : "repeat(3, 1fr)",
                gridGap: "30px"
            }}>
                {list.map((val, index) => {
                    const { cover, category, location, price, type, propertyName } = val;
                    return (
                        <div className='box shadow ' key={index}>
                            <div className='img'>
                                <img className='img' src={cover} alt="" />

                            </div>
                            <div style={{
                            padding: "0px 0px 0px 10px"
                        }} >
                                <div className='category flex'>
                                    <span style={{
                                        background: category === "For Sale" ? "#25b5791a" : "#ff98001a",
                                        color: category === "For sale" ? "#25b579" : "#ff9800"
                                    }}>
                                        {category}

                                    </span>

                                </div>
                                <h4>{propertyName}</h4>
                                <p style={{
                                    color: "#72809d"
                                }}>{location}</p>
                            </div>
                            <div className=' flex' style={{
                               padding: "20px 10px 0px 10px"
                            }}>
                                <div>
                                    <button className='btn2'>${price}</button>
                                    <label htmlFor="">/sqft</label>
                                </div>
                                <span>{type}</span>


                            </div>

                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default RecentCard