import React from 'react'
import Back from '../about/Back'

const Contact = () => {
    return (
        <>
            <section className='contact mb'>
                <Back name="Contact Us" subtitle="Get Helps & Friendly Support" />
                <div className='container'>
                    <form action="" method="post" className='shadow'>

                        <h4>
                            Fillup The Form
                        </h4>
                        <div>
                            <input type="text" name="" id="" placeholder='Name' />
                            <input type="Email" name="" id="" placeholder='Email' />
                        </div>
                        <input type="text" name="" id="" placeholder='Subject' />
                        <textarea name="" cols={30} rows={10} id=""></textarea>
                        <button type="submit">Submit Request</button>

                    </form>

                </div>
            </section>

        </>
    )
}

export default Contact
