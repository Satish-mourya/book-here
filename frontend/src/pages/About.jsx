import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 ' >Us</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px] ' src={assets.about_image} alt="" />
      
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 '>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cumque perferendis maxime beatae, adipisci ipsa hic harum dicta laboriosam id? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex, cupiditate reprehenderit repellendus recusandae consequuntur alias deserunt debitis sed nesciunt, ab ipsa! Quis nihil praesentium rem molestias quia dicta, consectetur similique alias, ut sint reiciendis perferendis deleniti veritatis numquam mollitia!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit distinctio commodi quam deleniti repellat totam vitae ad aut, natus, possimus, nulla voluptatibus provident! Impedit quaerat repudiandae omnis quas porro provident.</p>
        <b className='text-gray-800'>OUR Vision</b>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius officia commodi molestias ratione nam ab?</p>
      </div>
    </div>
    </div>
  )
}

export default About
