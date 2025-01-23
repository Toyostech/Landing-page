"use client"

import React from 'react'
import SubHeaer from '../SubHeaer'
import { team } from '../Data'
import { useIsMobile } from '../UseMobile'

const Team = () => {
    const mobile = useIsMobile()
    return (
        <>
            <section className='team background'>
                <div className='container'>
                    <SubHeaer title="Our Featured Agent" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat et vitae ducimus a excepturi doloribus reprehenderit
                     est quod, maxime nihil!"/>
                    <div className='content mtop' style={{
                        display: "grid",
                        gridTemplateColumns: mobile ? "repeat(1, 1fr)" : "repeat(3, 1fr)",
                        gridGap: "30px"
                    }}>
                        {team.map((val, index) => {
                            return (
                                <div className='box shadow' key={index} style={{
                                    padding: "10px"
                                }}>
                                    <button className='mtop3 btn3'>{val.list} Listing</button>
                                    <div className='detail' style={{
                                        textAlign: "center",
                                        marginTop: "30px"
                                    }}>
                                        <div className="" style={{
                                            width: "90px",
                                            height: "90px",
                                            margin: "auto",
                                            position: "relative"
                                        }}>
                                            <img style={{
                                                width: "90px",
                                                height: "90px",
                                                borderRadius: "50px"

                                            }} src={val.cover} alt="" />
                                        </div>
                                        <label htmlFor="">{val.address}</label>
                                        <h4>{val.name}</h4>
                                        {/* <ul>
                                            {val.icon.map((icon, index) => (
                                               <img src={} alt="" />

                                            ))}
                                        </ul> */}
                                        <div className='button flex'>
                                            <button>
                                                Message
                                            </button>
                                            <button>
                                                <img src= {val.iconbtn} style={{
                                                    color: "white",
                                                    background: "white"
                                                }} alt=""  />
                                              
                                            </button>

                                        </div>

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>


            </section>
        </>
    )
}

export default Team
