


import React, { useEffect, useMemo, useState } from 'react';
import { ImCross } from 'react-icons/im';

interface MainProductObj { product: object, setOpenDetailsModal: any, }
interface ProductData {
    _id: any;
    name: string;
    image: string;
    size: string;
    category: string;
    brand: string;
    price: number;
    year: number;
}



const DetailsModal: React.FC<MainProductObj> = ({ product, setOpenDetailsModal }) => {
    const [value, setValue] = useState(1)
    const { _id, name, image, size, category, brand, price, year } = product as ProductData;


    const removeQuantity = () => {
        if (value > 1) {
            setValue(value - 1)
        }
    }
    const addQuantity = () => {
        if (value < 10) {
            setValue(value + 1)
        }
    }

    return (
        <div className='popup_wrapper'>
            <div className="popup_content relative">
                <ImCross onClick={() => setOpenDetailsModal(false)} className='absolute right-0 top-0 mr-4 mt-4 h-4 w-4 cursor-pointer' />
                <div>
                    <>

                        <div className="">
                            <div className="mid-container">
                                <div className="md:flex items-center md:gap-5 bg-white  mb-5 mt-2 rounded-xl">
                                    <div className="md:w-[40%] mb-5 md:mb-0">
                                        <img className='md:w-96 md:h-96 h-72 w-full object-cover flex justify-center items-center mx-auto rounded' src={image} alt="" />
                                    </div>
                                    <div className="md:w-[60%]">
                                        <h1 className=" font-semibold text-2xl">
                                            {name}
                                        </h1>
                                        <p className="text-sm mb-2">Brand <span className='text-[17px]'>:</span> {brand}</p>
                                        <hr />

                                        <h1 className="uppercase font-semibold text-red-600 text-3xl mt-5">{price}$</h1>

                                        <p className='my-5'>Size: <span className="mx-1 border px-2 rounded cursor-pointer">{size}</span></p>

                                        <div className='flex items-center gap-5 '>
                                            <h1 className='text-gray-500'>Quantity</h1>
                                            <div className='flex justify-center items-center gap-3'>
                                                <div>
                                                    <button
                                                        onClick={() => removeQuantity()}
                                                        className=" rounded w-8 h-8 flex items-center justify-center text-3xl text-gray-400 bg-[#eef1ff]">
                                                        -
                                                    </button>
                                                </div>
                                                <div>
                                                    <div
                                                        className="w-12 h-8 text-center border-2 border-gray-300 rounded flex justify-center items-center"
                                                    >{value}</div>
                                                </div>
                                                <div onClick={() => addQuantity()}>
                                                    <button
                                                        className=" rounded w-8 h-8 flex items-center justify-center text-2xl text-gray-400 bg-[#eef1ff]">
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <SocialShare /> */}

                                        <div className='mt-10 grid grid-cols-2 gap-4'>
                                            <button className='btn btn-primary w-full rounded  text-base-100 ' type="submit"><h1>Buy Now</h1></button>

                                            <button
                                                className='btn bg-[#ff8b2c] hover:bg-[#D0611E] border-none w-full rounded  text-base-100 ' type="submit"><h1>Add To Cart</h1></button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </>
                </div>
            </div>
        </div>
    );
};

export default DetailsModal;