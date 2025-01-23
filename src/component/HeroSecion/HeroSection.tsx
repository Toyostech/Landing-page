import { url } from 'inspector'
import React from 'react'
import SubHeaer from '../SubHeaer'

const HeroSection = () => {
    return (
        <>
            <section className=" w-screen  px-16 " style={{
                backgroundImage: "url(/./herobg2.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "90vh",
                width: "100%"

            }}>

                

                <div className="pt-52 container">
                    <SubHeaer title="Search For Next Home" subtitle="Find new & featured property location in your local city" />

                    <form style={{
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: "center",
                        background: "white",
                        padding: 25,
                        borderRadius: 10
                    }}>

                        <div style={{



                        }}>
                            <span style={{
                                fontSize: "14px",
                                color: "gray"
                            }}>City/Street</span>
                            <input type="text" style={{
                                padding: "10px",
                                width: "100%",
                                border: "1px solid rgba(128, 128, 128, 0.2)",
                                marginTop: "5px",
                                borderRadius: "5px"
                            }} placeholder='Location' />
                        </div>
                        <div>
                            <span style={{
                                fontSize: "14px",
                                color: "gray"
                            }}>Property Type</span>
                            <input style={{
                                padding: "10px",
                                width: "100%",
                                border: "1px solid rgba(128, 128, 128, 0.2)",
                                marginTop: "5px",
                                borderRadius: "5px"
                            }} type="text" placeholder=' Property Type' />
                        </div>
                        <div>
                            <span style={{
                                fontSize: "14px",
                                color: "gray"
                            }}> Price Range</span>
                            <input style={{
                                padding: "10px",
                                width: "100%",
                                border: "1px solid rgba(128, 128, 128, 0.2)",
                                marginTop: "5px",
                                borderRadius: "5px"
                            }} type="text" placeholder='   Price Range' />
                        </div>
                        <div style={{
                            padding: "15px",
                            borderLeft: "1px solid rgba(128, 128, 128, 0.2) ",

                        }}>
                            <h4 style={{ fontWeight: 500 }}>Advance Filter</h4>
                        </div>
                        <button style={{
                            background: "green",
                            padding: "10px 15px",
                            borderRadius: "10px",
                            color: "white"
                        }}>Sarech</button>

                    </form>
                </div>


            </section>


        </>
    )
}

export default HeroSection