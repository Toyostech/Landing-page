import React from 'react'
import SubHeaer from '../SubHeaer'
import FeatureCard from './FeatureCard'

const Featured = () => {
  return (
    <>
      <section className="featured background" style={{
            padding: "30px",
            boxShadow: "0 0 20px 0 rgb(112 121 138 /18%)",
            textAlign: "center",
            cursor: "pointer"
          }}>
        <div className='container'>
          <SubHeaer title="Feature Property Types" subtitle="Find All Type of Property" />
          <FeatureCard/>
        </div>

      </section>
    </>
  )
}

export default Featured
