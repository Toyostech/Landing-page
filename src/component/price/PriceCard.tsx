import React from 'react'
import { price } from '../Data'


const PriceCard = () => {
  return (
    <>
      <div  style={{
        
      }}className='content flex mttop'>
        {price.map((item, index) => {
          return (
            <div style={{
              width: "31.5%",
              padding: "30px",
              borderRadius: "10px"
            }} className='box shadow' key={index}>
              <div className='topbtn' style={{
                
              }}>
                <button style={{
                  marginBottom: "20px"
                }}  className='btn3'>{item.best}</button>
              </div>
              <h3 style={{
                fontSize: "22px"
              }}>{item.plan}</h3>
              <h1 style={{
                fontSize: "60px"
              }}>
                <span style={{
                  fontSize: "30px",
                  fontWeight: 500
                }}>$</span>{item.price}
              </h1>
              <p>per user, per month</p>
              <ul style={{
                marginTop: "40px"
              }}>
                <div>
                  {item.list.map((val) => {
                    const { text, change, plan } = val
                    return (
                      <li className='flex' key={index}  style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        gap: 4,

                        marginBlock: "20px"
                      }}>
                        
                        <label className='labeled' htmlFor="" style={{
                          background: change === "color" ? "#dc35451d" : "#27ae601f",
                          color: change === "color" ? "#dc3848" : "27ae60"
                        }}>{plan}</label>
                        {text}

                        
                      </li>

                    )

                  })}
                </div>


              </ul>
              <button className='btn5' style={{
                background: item.plan === "Standard" ? "#27ae60" : "#27ae601f",
                color: item.plan === "Standard" ? "#fff" : "#27ae60",
              }} >
                start {item.plan}

              </button>
            </div>
          )

        })}
      </div >


    </>
  )
}

export default PriceCard
