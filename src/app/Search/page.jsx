'use client';
import React, { useEffect, useState } from 'react'

const categoryOptions = [
  'Grocery and organic products',
  'Bookstore and Cafe',
  'Clothing and Hndicrafts',
  'Restaurant',
  'Laundary/Dry Cleaning Services',
  'Education/Preschool',
  'Pharmacy',
  'Florists',
]

const Search = () => {

  const [businessList, setBusinessList] = useState(
    JSON.parse(localStorage.getItem('business')) || []
  );

  const [selCategory, setSelCategory] = useState('');
  const [location, setLocation] = useState('');
  const [businessName, setBusinessName] = useState('');

  console.log(businessList);

  const searchBusiness = () => {
      const data = JSON.parse(localStorage.getItem('business')) || [];
      setBusinessList(data.filter(business => (
        business.name.toLowerCase().includes(businessName.toLowerCase()) && business.address.toLowerCase().includes(location.toLowerCase()) && business.category.toLowerCase().includes(selCategory.toLowerCase())
      )))
  }

  useEffect(() => {
    searchBusiness();
  }, [selCategory, location, businessName])
  


  return (
    <div>
      <div className='bg-gray-200'>
        <div className='max-w-[80%] mx-auto py-10 space-y-3'>
          <h1 className='text-4xl font-bold text-center'>Explore nearby</h1>
          <h3 className='text-center text-xl'>Find Local Businesses Near You!</h3>

          <div className='grid grid-cols-12 gap-5 mx-auto'>
            <input
              placeholder='Search Business Name ...'
              onChange={e => setBusinessName(e.target.value)}
              value={businessName}
              type="text" className='col-span-12 md:col-span-6 p-3 border rounded-lg ' />
            <input
              placeholder='Search Business Address Here ...'
              onChange={e => setLocation(e.target.value)}
              value={location}
              type="text" className='col-span-12 md:col-span-3 p-3 border rounded-lg ' />
            <select
              placeholder='Search Business Name ...'
              type="text"
              onChange={e => setSelCategory(e.target.value)}
              value={selCategory}
              className='col-span-12 md:col-span-3 p-3 border rounded-lg ' >
              <option value="">Select Category</option>
              {categoryOptions.map((category) => (
                <option value={category}>{category}</option>
              ))
              }
            </select>
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {
              businessList.map(business => (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={business.image}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {business.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {business.name}
                    </h2>
                    <p className="mt-1">{business.address}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

    </div>
  )
}

export default Search;