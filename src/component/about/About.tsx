import React from 'react'
import Back from './Back'
import iimg from '../../../public/1.jpg'
import SubHeaer from '../SubHeaer'
import Image from 'next/image'



const About = () => {
    return (
        <>
            <section className='about' style={{
                marginBottom: "80px"
            }}>
                <div className='' style={{
                    backgroundImage: "url(/./abb.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "80vh",
                    width: "100%",
                    
                }}>
                    <Back name="About Us" title="About Us - Who We Are?" />

                </div>

                <div className='container flex mtop'>






                    <div className='left row'>
                        <SubHeaer title="Our Agency Story" subtitle="Check Out Our Company story and work process" />
                        <p style={{
                            fontSize: "15px",
                            paddingRight: "30px",
                            marginBottom: "20px",
                            lineHeight: "30px"
                        }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eos obcaecati fuga sed quo eius ipsam exercitationem rerum, autem vel voluptas explicabo quos at veritatis dignissimos eaque blanditiis veniam. Veniam quis dicta voluptas, totam deserunt, error neque, sit tempora iusto quaerat libero provident commodi sint! Nam consequuntur quibusdam amet sint.
                        </p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos nesciunt impedit animi fuga quo rerum quisquam accusantium similique dicta ratione?</p>
                        <button className='btn2'>More About Us</button>


                    </div>
                    <div className='right row'>
                        <Image src="/abb.jpg" alt='' width={900} height={1000}/>
                    </div>
                </div>


            </section>
        </>
    )
}

export default About
