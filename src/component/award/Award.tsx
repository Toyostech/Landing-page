import React from 'react'
import SubHeaer from '../SubHeaer'
import { awards } from '../Data'

const Award = () => {
    return (
        <>
            <section className='award padding' style={{
                background: "#122947",
                color: "#fff",
                textAlign: "center"
            }}>
                <div className='container'>
                    <div style={{
                        display: "flex",
                        flexDirection: "column-reverse"
                    }}>
                        <SubHeaer title="Over 1,23000+ Happy User Being With Us Still They Love Our Services"
                            subtitle="Our Awards" />

                    </div>

                    <div className='content grid4 mtop'>
                        {awards.map((val, index) => {
                            return (
                                <div key={index}>
                                    <div style={{
                                        width: "100px",
                                        height: "100px",
                                        lineHeight: "100px",
                                        margin: "auto",
                                        marginTop: "50px",
                                        background: "rgba(225, 225, 225, 0.1 )",
                                        borderRadius: "4% 50%",


                                    }}>
                                        <img style={{
                                            fontSize: "32px",
                                            color: "#fff",
                                            width: "100px",
                                            height: "100px"
                                        }} src={val.icons} alt="" />
                                    </div>
                                    <h1 style={{
                                        color: "#fff",
                                        fontSize: "50px",
                                        fontWeight: "800"
                                    }}>{val.num}M</h1>
                                    <p style={{
                                        color: "gray"
                                    }}>{val.awardName}</p>

                                </div>
                            )
                        })}
                    </div>

                </div>

            </section>

        </>
    )
}

export default Award
