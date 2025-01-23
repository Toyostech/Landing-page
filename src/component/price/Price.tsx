import React from 'react'
import SubHeaer from '../SubHeaer'
import PriceCard from './PriceCard'

const Price = () => {
    return (
        <>
            <section style={{
                textAlign: "center"
                
            }} className='price padding'>
                <div className="container">
                    <SubHeaer title="Select Your Package" subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto nisi quasi accusamus sed saepe debitis natus pariatur magnam impedit numquam?
"/>
                    <PriceCard />
                </div>


            </section>


        </>
    )
}

export default Price
