import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import { assets } from '../assets/assets'
const About = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa consequatur mollitia atque iure odio libero beatae ratione, praesentium, molestiae laborum nam. Rerum, porro odit, dolore officiis corporis cumque architecto aperiam eaque assumenda dolorem natus veritatis reprehenderit fuga et provident earum.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat quos harum quae deleniti quam accusantium, sint mollitia ab ratione minus ad, itaque saepe temporibus sed dolorum dicta dolores? Accusantium doloremque magnam neque tenetur nam voluptas dolorem magni modi, ex sint sit, dolor reprehenderit? Perferendis, eum!</p>
              <b>Our mission</b>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus sit excepturi et maxime omnis, vitae necessitatibus, labore pariatur harum incidunt cumque dolorem nemo, tempore qui eveniet laborum quas quaerat optio.</p>
          </div>
        </div>
        <div>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20 '>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>With our user friendly interface and hassle free ordering process, shopping has never been easier.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className='text-gray-600'>Our team with dedicated professionals is here to assist you the way,ensuring your satisfaction is our top priority</p>
          </div>
        </div>
        <NewsLetterBox/>
    </div>
  )
}

export default About
