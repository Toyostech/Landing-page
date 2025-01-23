import Back from '@/component/about/Back'
import PriceCard from '@/component/price/PriceCard'
import React from 'react'

const page = () => {
    return (
        <>
            <section className='services mb'>

                <Back name="30 days money back guarantee " title="No Extra Fees, Friendly Support" cover='' />
                <div className='price container'>
                    <PriceCard />
                </div>
            </section>

        </>
    )
}

export default page
