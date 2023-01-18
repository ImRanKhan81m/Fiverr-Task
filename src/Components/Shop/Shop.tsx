import React, { useEffect, useState } from 'react';
import ProductCard from '../../shared/ProductCard';

const Shop = () => {
    const [products, setProducts] = useState<any[]>([])

    useEffect(() => {
        fetch('http://localhost:9000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    // get Categories without duplicates
    const categorySet = new Set(products.map((p) => p.category));
    const categories = Array.from(categorySet).sort();

    // get Brands without duplicates
    const brandSet = new Set(products.map((p) => p.brand));
    const brands = Array.from(brandSet).sort();

    // get Years without duplicates
    const yearSet = new Set(products.map((p) => p.year));
    const years = Array.from(yearSet).sort();

    return (
        <div className='pb-14'>
            <div className='mid-container'>

                <div className='mt-10'>

                    <div className='flex justify-between items-center gap-10'>
                        <div className='w-[20%]'>
                            <h1 className='font-semibold border-b border-b-gray-400 pb-1 '>All Categories</h1>
                        </div>
                        <div className='w-[80%]'>
                            <div className='flex justify-between items-center'>
                                <div className='w-[40%]'>
                                    {/* <p >Total {data?.data?.length} items Found</p> */}
                                </div>

                                <div className='flex gap-3 w-[60%] justify-end items-center'>
                                    <p className='font-bold'>Sort by :</p>
                                    <select className="select select-bordered md:w-44 w-full  focus:outline-none">
                                        <option disabled selected>Best Match</option>
                                        <option>Price Low to High</option>
                                        <option>Price High to Low</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex sm:gap-10 gap-5 mt-3'>
                        <div className='w-[20%]'>
                            <div className='text-sm grid gap-1'>
                                {
                                    categories?.map((item) => (
                                        <div key={item?._id} className="form-control">
                                            <label className="label cursor-pointer flex justify-start gap-3 py-1">
                                                <input type="checkbox" className="checkbox h-4 w-4 rounded" />
                                                <span className="label-text">{item}</span>
                                            </label>
                                        </div>
                                    )
                                    )
                                }
                            </div>

                            {/* <div>
                                <h1 className='font-semibold mt-5'>Price</h1>
                                <div className='mt-2'>
                                    <input type="range" min="0" max="100" className="range  range-xs range-primary" step="25" />
                                    <div className="w-full flex justify-between text-xs px-2">
                                        <span>10K</span>
                                        <span>20K</span>
                                        <span>40K</span>
                                        <span>80K</span>
                                        <span>100K+</span>
                                    </div>
                                </div>
                            </div> */}

                            <div className='text-sm grid mt-5 '>
                                <h1 className='font-semibold mb-2'>Brand</h1>
                                {
                                    brands?.map((item) => (
                                        <div key={item?._id} className="form-control">
                                            <label className="label cursor-pointer flex justify-start gap-3 py-1">
                                                <input type="checkbox" className="checkbox h-4 w-4 rounded" />
                                                <span className="label-text">{item}</span>
                                            </label>
                                        </div>
                                    )
                                    )
                                }
                            </div>

                            <div className='text-sm grid mt-5 '>
                                <h1 className='font-semibold mb-2 '>Year</h1>
                                {
                                    years?.map((item) => (
                                        <div key={item?._id} className="form-control">
                                            <label className="label cursor-pointer flex justify-start gap-3 py-1">
                                                <input type="checkbox" className="checkbox h-4 w-4 rounded" />
                                                <span className="label-text">{item}</span>
                                            </label>
                                        </div>
                                    )
                                    )
                                }
                            </div>
                        </div>
                        <div className='w-[80%]'>
                            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4">
                                {/* map product by typescript */}
                                {
                                    products?.map((item) => (
                                        <ProductCard key={item?._id} product={item} />
                                    )
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;