"use client";
import React from 'react'
import { footer } from '../Data'
import { useIsMobile } from '../UseMobile'

const listss= ["About",
    "Blog",
    "Pricing",
    "Affliate",
    "Login",
    "Changing"]

const Footer = () => {
    const mobile = useIsMobile()
    return (
        <>
            <section style={{
                marginTop: "50px"
            }} className='footerContact'>
                <div className="container" >
                    <div className='send' style={{
                        display: "flex",
                        flexDirection: mobile ? "column" : "row",
                        gap: mobile ? 45 : 30,
                      
                        alignItems: "center"

                    }}>
                        <div className='text'>
                            <h1>Do You Have Questions ?</h1>
                            <p>We'll help you grow Your career and growth.</p>

                        </div>
                        <button className='btn5' style={{
                            borderRadius: "50px",
                            padding: "20px 40px",
                            color: "#27ae60",
                            fontSize: "20px",
                            fontWeight: 400,
                            border: "5px solid #27ae601f",
                            background: "#fff"
                        }}>
                            Contact Us Today
                        </button>

                    </div>
                </div>
            </section>
            <footer>
                <div className='container' style={{
                    display: "flex",
                    flexDirection: mobile ? "column" : "row",
                    gap: 30

                }}>
                    <div className='box'>
                        <div className='logo'>
                            <img src="./Lagos-logo.png" alt="" />
                            <h2>Do You Need Help With Anything?</h2>
                            <p>
                                Receive upates, hot deals, tutorial, disconts sent straight in your index every month
                            </p>
                            <div className='input flex'>
                                <input type="text" placeholder='Email Address' name="" id="" />
                                <button>Subscribe</button>
                            </div>

                        </div>

                    </div>

                   

                    {footer.map((val) => (
                        <div className='box'>
                            <h3 style={{
                                fontSize: "20px",
                                fontWeight: 500

                            }}>{val.title}</h3>
                           <ul>
                                {listss.map((list) => (
                                    <li key={list}>
                                        {list}

                                    </li>


                                ))}


                            </ul>
                        </div>
                    ))
                    }



                </div>
            </footer>

        </>
    )
}

export default Footer
