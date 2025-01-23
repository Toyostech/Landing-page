"use client"
import Image from 'next/image'
import React from 'react'
import { nav } from '../Data'
import Link from 'next/link'
import HeroSection from '../HeroSecion/HeroSection'
import { useIsMobile } from '../UseMobile'
const Header = () => {
    const mobile = useIsMobile()
    return (
        <div style={{
            zIndex: 50,
            background: "#7dd3fc",
            padding:mobile? "1rem 2rem 0rem 2rem" :"1.5rem 4rem 0rem 4rem"
        }}>

            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"


            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.5rem"
                }}>
                    <img src="/./Lagos-logo.png" style={{
                        width: mobile ? "50px": "100px",
                        
                        height: mobile ? "50px" :"100px",
                        objectFit: "cover"
                    }}
                        alt='logo'
                        width={100}
                        height={100}


                    />
                    <p className="text-headingColor text-xl font-bold">City</p>

                </div>
                <ul className=" items-center gap-8 " style={{
                    display: mobile ? "none" : "flex",
                    justifyContent: "space-between",
                    gap: 10
                }}>
                    {nav.map((link) => (
                        <Link href={link.path} key={link.path} style={{
                            fontSize: "1rem",
                            fontWeight: 500,
                            lineHeight: "1.5rem",
                            color: "#fff",
                            transitionDuration: "100ms",
                            cursor: "pointer",
                            transition: "ease-in-out",
                            listStyle: "none"


                        }}>{link.title}</Link>


                    ))}

                </ul>

                <div style={{
                    display: mobile ? "flex" : "none",
                    flexDirection: "row",
                    gap: 10

                }}>
                    <div>
                        <ul  style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 10,
                            fontStyle: "bold"

                        }}>
                            {nav.map((link) => (
                                <Link href={link.path} key={link.path} style={{
                                    fontStyle: "bold"
                                }}>{link.title}</Link>


                            ))}
                        </ul>

                    </div>

                </div>

            </div>



        </div>
    )
}
export default Header
