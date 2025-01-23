import React from 'react'
import RecentCard from './RecentCard'
import SubHeaer from '../SubHeaer'

const Recent = () => {
    return (
        <>
            <section className='recent padding' style={{
                padding : "30px"
            }}>
                <div className=''>
                    <SubHeaer title='Recent Property Listed' subtitle='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur sapiente dolorum dolor cum expedita omnis ipsa! Accusantium quisquam quos eligendi.'/>

                </div>
                
                <RecentCard />
            </section>

        </>
    )
}

export default Recent
