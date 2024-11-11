'use client';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const AddBusiness = () => {

    const [businessList, setBusinessList] = useState(
        JSON.parse(localStorage.getItem('business')) || []
    );

    const businessForm = useFormik({
        initialValues: {
            name: '',
            address: '',
            category: '',
            image: '',
            description: '',
            pincode: '',
            contact: '',
            email: ''
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            setBusinessList([...businessList, values]);
            localStorage.setItem('business', JSON.stringify([...businessList, values]));
            toast.success('Business Added Successfully');
            resetForm();
        }
    })

    return (
        <div className='bg-cover' style={{ backgroundImage: `url('https://i.pinimg.com/originals/07/0e/74/070e74030ae6b58c731cbe8274956a3b.jpg')` }}>

            <div className='backdrop-blur-sm'>
                <div className="max-w-[70%] xl:px-7 xl:w-5/12 mx-auto py-6">
                    <div className="bg-white rounded shadow-xl p-7 sm:p-10">
                        <h3 className="mb-4 text-xl font-bold sm:text-center sm:mb-6 sm:text-2xl">
                            Add Your Business
                        </h3>
                        <form onSubmit={businessForm.handleSubmit} className='grid grid-cols-2 gap-5'>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="name"
                                    className="inline-block mb-1 font-medium"
                                >
                                    Business name
                                </label>
                                <input
                                    placeholder="Coffee Shop"
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="name"
                                    onChange={businessForm.handleChange}
                                    value={businessForm.values.name}
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="address"
                                    className="inline-block mb-1 font-medium"
                                >
                                    Address
                                </label>
                                <input
                                    placeholder="Hazratganj,Lucknow"
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="address"
                                    onChange={businessForm.handleChange}
                                    value={businessForm.values.address}
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="category"
                                    className="inline-block mb-1 font-medium"
                                >
                                    Category
                                </label>
                                <input
                                    placeholder="cafe"
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="category"
                                    onChange={businessForm.handleChange}
                                    value={businessForm.values.category}
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="image"
                                    className="inline-block mb-1 font-medium"
                                >
                                    Image
                                </label>
                                <input
                                    placeholder="https://th.bing.com/th/id/OIP._krCsLO2cCdCLKH4yirvVwHaFi?rs=1&pid=ImgDetMain"
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="image"
                                    onChange={businessForm.handleChange}
                                    value={businessForm.values.image}
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="description"
                                    className="inline-block mb-1 font-medium"
                                >
                                    Description
                                </label>
                                <input
                                    placeholder="Enjoy freshly brewed coffee,delicious pstry nd cozy atmosphere."
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="description"
                                    onChange={businessForm.handleChange}
                                    value={businessForm.values.description}
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="pincode"
                                    className="inline-block mb-1 font-medium"
                                >
                                    Pincode
                                </label>
                                <input
                                    placeholder="262001"
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="pincode"
                                    onChange={businessForm.handleChange}
                                    value={businessForm.values.pincode}
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="contact"
                                    className="inline-block mb-1 font-medium"
                                >
                                    Contact
                                </label>
                                <input
                                    placeholder="8789878790"
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="contact"
                                    onChange={businessForm.handleChange}
                                    value={businessForm.values.contact}
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="email"
                                    className="inline-block mb-1 font-medium"
                                >
                                    E-mail
                                </label>
                                <input
                                    placeholder="coffee@gmail.com"
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="email"
                                    onChange={businessForm.handleChange}
                                    value={businessForm.values.email}
                                />
                            </div>
                            <div className="mt-4 mb-2 sm:mb-4">
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                >
                                    Add Business
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBusiness;