import React from 'react';
import './App.css';

const MainLayout = () => {
  return (
    <div className='h-screen bg-cover bg-center'
   >
    <div className="font-poppins w-full flex md:items-center justify-center min-h-screen">
      <div 
        className="w-full md:max-w-sm shadow-lg rounded-lg overflow-hidden p-6"
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
            alt="Sharon Jeff"
            className="mx-auto rounded-full w-24 h-24 border-4 border-gray-300"
          />
          <h3 className="text-lg font-semibold mt-2">SHARON JEFF</h3>
          <p className="text-sm text-gray-500">Founder/Owner</p>
        </div>

        {/* Quote/Description */}
        <div className="text-center mt-4 px-4">
          <p className="text-gray-600 text-sm">
            When a seller chooses an agent to act in their behalf, they're also handling over enormous responsibility. A great selling result happens when the agent.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-4">
          <a
            href="https://www.paypal.com"
            className="flex items-center justify-center bg-gray-200 py-2 rounded-full hover:bg-gray-300 transition">
            <img src="paypal-logo-url-here" alt="PayPal" className="w-6 h-6 mr-2" />
            Paypal
          </a>

          <a
            href="https://www.website.com"
            className="flex items-center justify-center bg-gray-200 py-2 rounded-full hover:bg-gray-300 transition">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0-2C5.37 1 1 5.37 1 12s4.37 11 11 11 11-4.37 11-11S18.63 1 12 1zm-.05 15.78c-.56 0-1.02-.46-1.02-1.02v-6.52c0-.56.46-1.02 1.02-1.02s1.02.46 1.02 1.02v6.52c0 .56-.46 1.02-1.02 1.02zm0 0"></path></svg>
            Website
          </a>

          <a
            href="https://www.linkedin.com"
            className="flex items-center justify-center bg-gray-200 py-2 rounded-full hover:bg-gray-300 transition">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 3.57H3.55c-.56 0-1.02.46-1.02 1.02v14.83c0 .56.46 1.02 1.02 1.02h16.91c.56 0 1.02-.46 1.02-1.02V4.59c0-.56-.46-1.02-1.02-1.02zm-12.03 13.86h-2.7V10.6h2.7v6.83zm-1.35-7.75c-.9 0-1.63-.73-1.63-1.63 0-.9.73-1.63 1.63-1.63.9 0 1.63.73 1.63 1.63 0 .9-.73 1.63-1.63 1.63zm10.28 7.75h-2.7v-3.57c0-.9-.73-1.63-1.63-1.63s-1.63.73-1.63 1.63v3.57h-2.7V10.6h2.7v.9c.46-.56 1.17-.9 1.9-.9 1.35 0 2.46 1.1 2.46 2.46v5.37h-.01z"></path></svg>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MainLayout;
