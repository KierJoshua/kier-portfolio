import React from 'react'
import { FaFacebookF , FaInstagram} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SideBarIcons = () => {
  return (
    <div className='self-center fixed sm:right-16 right-0 cursor-pointer z-10' data-aos="fade-left" data-aos-duration = '1500'>
        <a href="https://www.facebook.com/kierjoshuadu" target='_blank'><h1 className=' text-2xl md:text-4xl text-white border p-2 border-light-blue rounded-lg bg-light-blue mb-4 hover:scale-125 transition duration-200'><FaFacebookF /></h1></a>
        <a href="https://www.instagram.com/kier_dew/" target='_blank'><h1 className=' text-2xl md:text-4xl text-white border p-2 border-light-blue rounded-lg bg-light-blue mb-4 hover:scale-125 transition duration-200'><FaInstagram /></h1></a>
        <a href="mailto:kierjoshuadu1226@gmail.com" target='_blank'><h1 className=' text-2xl md:text-4xl text-white border p-2 border-light-blue rounded-lg bg-light-blue hover:scale-125 transition duration-200'><SiGmail /></h1></a>
    </div>
  )
}

export default SideBarIcons