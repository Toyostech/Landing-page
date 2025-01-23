import Back from '@/component/about/Back'
import FeatureCard from '@/component/featured/FeatureCard'

import React from 'react'

const page = () => {
  return (
    <>
    <section className='services mb'>
        <Back name="Services" title="All Sservices"  />
        <div className='featured container'>
           <FeatureCard/>

        </div>


    </section>
      
    </>
  )
}

export default page
