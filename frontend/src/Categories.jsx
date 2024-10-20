import React from 'react'

const Categories = () => {
  return (
    <div className='mt-5 text-center text-white'>
        <h1 className='text-2xl'>Categories</h1>
        <div className='flex flex-col justify-center gap-3 space-x-4 mt-4'>
            <div className='bg-[#055505] p-2 rounded-lg ml-4'>
                <img src="cats/tea.jpg" alt="" />
                <p>Herbal Tea & Soups</p>
            </div>
            <div className='bg-[#055505] p-2 rounded-lg'>
                <img src="cats/rice.jpeg" alt="" />
                <p>Rice grains & Dhaniyangal</p>
            </div>
            <div className='bg-[#055505] p-2 rounded-lg'>
                <img src="cats/herbalcare.jpg" alt="h" />
                <p>Wellness Essentials</p>
            </div>

            <div className='bg-[#055505] p-2 rounded-lg'>
                <img src="cats/pulses.jpg" alt="h" />
                <p>Pulses and Dry Fruits/Nuts</p>
            </div>

            <div className='bg-[#055505] p-2 rounded-lg'>
                <img src="cats/spices.jpg" alt="h" />
                <p>Spices and Malts </p>
            </div>

            <div className='bg-[#055505] p-2 rounded-lg'>
                <img src="cats/oil.jpg" alt="h" />
                <p>Oils and Ghees </p>
            </div>

            <div className='bg-[#055505] p-2 rounded-lg'>
                <img src="cats/pasta.webp" alt="h" />
                <p>Millet Pastas & Noodles </p>
            </div>

            <div className='bg-[#055505] p-2 rounded-lg'>
                <img src="cats/bioclean.jpg" alt="h" />
                <p>Bio House Cleaning Products </p>
            </div>

            <div className='bg-[#055505] p-2 rounded-lg'>
                <img src="cats/sweets.jpg" alt="h" />
                <p>Delicious Sweets </p>
            </div>

            <div className='bg-[#055505] p-2 rounded-lg'>
                <img src="cats/seeds.jpg" alt="h" />
                <p>Seeds </p>
            </div>
        </div>
    </div>
  )
}

export default Categories