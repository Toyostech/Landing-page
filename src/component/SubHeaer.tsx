"use client"
import React from 'react'
import { useIsMobile } from './UseMobile'

const SubHeaer = ({ title, subtitle }: any) => {
    const mobile = useIsMobile()
    return (
        <>
            <div style={{
                textAlign: 'center',
                width: "60%",
                margin: "auto"
            }}>
                <h1 className="text-gray-950" style={{
                    color: "#27ae60",
                    fontWeight: 600,
                    textDecoration: "capitalization",
                    fontSize: mobile ? "30px" :"40px"
                }}>{title}</h1>
                <p className="text-red-700" style={{
                    
                    fontSize: "15px",
                    paddingBottom: "20px"

                }}>{subtitle}</p>

            </div>
        </>
    )
}

export default SubHeaer