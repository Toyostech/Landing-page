"use client"
import React from 'react'
import { featuredata } from '../Data'
import { useIsMobile } from '../UseMobile'


const FeatureCard = () => {
  const mobile = useIsMobile()
  return (
    <>
      <div className='content mtop' style={{
        display: "grid",
        gridTemplateColumns: mobile ? "repeat(1, 1fr)" : "repeat(5, 1fr)",
        gridGap: "30px"
        
      
      
      }}>
        {featuredata.map((items, index) => (
          <div className='box'style={{
            padding: "30px",
            boxShadow: "0 0 20px 0 rgb(112 121 138 /18%)",
            textAlign: "center",
            cursor: "pointer"
          }} key={index}>
            <img style={{
              width: "65px",
              height: "65px",
              
            }}  src={items.image} alt="" />
            <h4>{items.headerName}</h4>
            <label>{items.total}</label>


          </div>
        ))}
       
      </div>
    </>
  )
}

export default FeatureCard
