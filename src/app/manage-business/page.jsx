'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';



const ManageBusiness = () => {

    const [businessList, setBusinessList] = useState(
        JSON.parse(localStorage.getItem('business')) || []
      );
    
    const deleteBusiness = (index) => {
        // console.log(index);
        
        const temp = businessList.filter((business, idx) => {
            return idx!==index
        });
        // console.log(temp);
        toast.success('Business Deleted Successfully');
        
        setBusinessList(temp);
        localStorage.setItem('business', JSON.stringify(temp));
    }

    const displayBusiness = () => {
        if (businessList.length === 0) {
            return <p>Loading...</p>
        } else {
            return <table className='w-full'>
                <thead className='bg-blue-800 text-white text-left'>
                    <tr>
                        <th className='p-2'>Name</th>
                        <th className='p-2'>Email</th>
                        <th className='p-2'>pincode</th>
                        <th className='p-2'>category</th>
                        <th className='p-2'>contact</th>
                        <th className='p-2'>address</th>
                        <th className='p-2'>description</th>
                        <th colSpan={2}></th>
                    </tr>
                </thead>
                <tbody className='bg-blue-200'>
                    {
                        businessList.map((business, index) => {
                            return <tr key={business._id}>
                                <td className='p-2 border border-blue-400'>{business.name}</td>
                                <td className='p-2 border border-blue-400'>{business.email}</td>
                                <td className='p-2 border border-blue-400'>{business.pincode}</td>
                                <td className='p-2 border border-blue-400'>{business.category}</td>
                                <td className='p-2 border border-blue-400'>{business.contact}</td>
                                <td className='p-2 border border-blue-400'>{business.address}</td>
                                <td className='p-2 border border-blue-400'>{business.description}</td>
                                <td className='p-2 border border-blue-400'>
                                    <button onClick={() => deleteBusiness(index)}
                                        className='bg-red-500 rounded-full py-1 px-3 text-white'
                                    >Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        }
    }

    return (
        <div>
            <div className='max-w-[80%] mx-auto border mt-8 p-6 shadow rounded-lg'>
                <h1 className='text-center text-3xl font-bold'>Managebusinesss</h1>

                {displayBusiness()}

            </div>
        </div>
    )
}

export default ManageBusiness