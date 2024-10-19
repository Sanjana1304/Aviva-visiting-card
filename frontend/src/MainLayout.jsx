import React from 'react';
import LeafletMapComponent from './LeafletMapComponent';

const MainLayout = () => {
  return (
    <div className='h-screen bg-cover bg-center'
   >
    <div className="font-poppins w-full flex sm:items-center justify-center min-h-screen">
      <div 
        className="w-full sm:max-w-sm shadow-lg rounded-lg overflow-hidden p-6"
        style={{
            backgroundImage: `url('/bgcard3.avif')`,
        }}>
        {/* Header and Heading */}
        <div className="text-center">
          <nav className='mb-8'>
            <ul className="flex justify-center space-x-4 cursor-pointer">
              <li>
                <a href="#" className="text-white hover:text-gray-800 transition">Home</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-800 transition">About</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-800 transition">Contact</a>
              </li>
            </ul>
          </nav>
          <h2 className="text-3xl text-[#097969] font-bold mt-2">AVIVA ORGANICS</h2>
          <p className="text-sm text-[#5F8575] text-gray-600">Where Fresh Meets Pure, Naturally!</p>
        </div>

        {/* Profile Section */}
        <div className="text-center mt-4">
          <img
            src="profile-image-url-here"
            alt="Aviva Organics"
            className="mx-auto rounded-full w-24 h-24 border-4 border-gray-300"
          />
          <h3 className="text-xl text-gray-100 font-semibold mt-2">Dr. S Gajalakshmi</h3>
          <p className="text-sm text-gray-200">Founder & Director</p>
        </div>

        {/* Quote/Description */}
        <div className="text-center mt-4 px-4">
          <p className="text-gray-200 text-[10px]">
          Aviva Organics is your one-stop destination for fresh, natural products that celebrate health and sustainability. Offering a curated selection of organic foods, skincare, and wellness essentials, Aviva Organics ensures quality and purity in every item. Discover a vibrant community dedicated to holistic living and embrace a healthier lifestyle today!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-4">
          <a
            href=""
            className="flex items-center justify-center bg-gray-200 py-2 rounded-full hover:bg-gray-300 transition">
                <div className='w-1/3 flex'>
                <img src="/wap_icon.png" className="w-6 h-6 mr-2" />
                <span>Whatsapp</span>
                </div>
          </a>

          <a
            href="http://vla.org.in"
            target='_blank'
            className="flex items-center justify-center bg-gray-200 py-2 rounded-full hover:bg-gray-300 transition">
                <div className='w-1/3 flex'>
                <img src="/website_icon.png" className="w-6 h-6 mr-2" />
                <span>Website</span>
                </div>
          </a>

          <a
            href="mailto:sensanjana072@gmail.com"
            className="flex items-center justify-center bg-gray-200 py-2 rounded-full hover:bg-gray-300 transition">
            <div className='w-1/3 flex'>
                <img src="/mail_icon.png" className="w-6 h-6 mr-2" />
                <span>Mail Us</span>
                </div>
          </a>
        </div>

        <div>
            <h1 className='text-lg font-semibold mt-5 text-gray-200'>Visit Us</h1>
            <LeafletMapComponent/>

        </div>

        
      </div>
    </div>
    </div>
  );
};

export default MainLayout;
