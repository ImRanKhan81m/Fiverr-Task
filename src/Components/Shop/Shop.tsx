import React, { useEffect, useState, useContext } from 'react';
import { dataContext } from '../../App';
import ProductCard from '../ProductCard';

const Shop = () => {
    const [selectedBrand, setSelectedBrand] = useState<string[]>([]);
    const [selectedYear, setSelectedYear] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
    const [products, setProducts] = useState<any[]>([])
    const allDataContext = useContext(dataContext);

    useEffect(() => {
        fetch('http://localhost:9000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    if (!allDataContext) return null;
    const { searchValue } = allDataContext;
    
    // filter products by searchValue and set to setProducts
    const filteredProducts = products.filter((p) => p.name.toLowerCase().includes(searchValue.toLowerCase()));
    
    // selectedBrand and selectedYear
    const handleSelectedBrand = (brand: string) => {
        setSelectedBrand((prev) => {
            if (prev.includes(brand)) {
                return prev.filter((b) => b !== brand);
            } else {
                return [...prev, brand];
            }
        });
    };

    const handleSelectedYear = (year: string) => {
        setSelectedYear((prev) => {
            if (prev.includes(year)) {
                return prev.filter((y) => y !== year);
            } else {
                return [...prev, year];
            }
        });
    };

    const handleSelectedCategory = (category: string) => {
        setSelectedCategory((prev) => {
            if (prev.includes(category)) {
                return prev.filter((c) => c !== category);
            } else {
                return [...prev, category];
            }
        });
    };

    const filteredProductsByBrandYearAndCategory = filteredProducts.filter((p) => {
        if (selectedBrand.length === 0 && selectedYear.length === 0 && selectedCategory.length === 0) {
            return true;
        } else if (selectedBrand.length === 0 && selectedYear.length === 0 && selectedCategory.length > 0) {
            return selectedCategory.includes(p.category);
        } else if (selectedBrand.length === 0 && selectedYear.length > 0 && selectedCategory.length === 0) {
            return selectedYear.includes(p.year);
        } else if (selectedBrand.length === 0 && selectedYear.length > 0 && selectedCategory.length > 0) {
            return selectedYear.includes(p.year) && selectedCategory.includes(p.category);
        } else if (selectedBrand.length > 0 && selectedYear.length === 0 && selectedCategory.length === 0) {
            return selectedBrand.includes(p.brand);
        } else if (selectedBrand.length > 0 && selectedYear.length === 0 && selectedCategory.length > 0) {
            return selectedBrand.includes(p.brand) && selectedCategory.includes(p.category);
        } else if (selectedBrand.length > 0 && selectedYear.length > 0 && selectedCategory.length === 0) {
            return selectedBrand.includes(p.brand) && selectedYear.includes(p.year);
        } else {
            return selectedBrand.includes(p.brand) && selectedYear.includes(p.year) && selectedCategory.includes(p.category);
        }
    });

    // clear all filters
    const clearAllFilters = () => {
        setSelectedBrand([]);
        setSelectedYear([]);
        setSelectedCategory([]);
    };

    // get Categories without duplicates
    const categorySet = new Set(products.map((p) => p.category));
    const categories = Array.from(categorySet).sort();

    // get Brands without duplicates
    const brandSet = new Set(products.map((p) => p.brand));
    const brands = Array.from(brandSet).sort();

    // get Years without duplicates
    const yearSet = new Set(products.map((p) => p.year));
    const years = Array.from(yearSet).sort();

    // console.log(selectedBrand, selectedYear);
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
                                                <input type="checkbox" onChange={() => handleSelectedCategory(item)} className="checkbox h-4 w-4 rounded" />
                                                <span className="label-text">{item}</span>
                                            </label>
                                        </div>
                                    )
                                    )
                                }
                            </div>

                            <div className='text-sm grid mt-5 '>
                                <h1 className='font-semibold mb-2'>Brand</h1>
                                {
                                    brands?.map((item) => (
                                        <div key={item?._id} className="form-control">
                                            <label className="label cursor-pointer flex justify-start gap-3 py-1">
                                                <input type="checkbox" onChange={() => handleSelectedBrand(item)} className="checkbox h-4 w-4 rounded" />
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
                                                <input type="checkbox" onChange={() => handleSelectedYear(item)} className="checkbox h-4 w-4 rounded" />
                                                <span className="label-text">{item}</span>
                                            </label>
                                        </div>
                                    )
                                    )
                                }
                            </div>
                        </div>
                        <div className='w-[80%]'>
                            {
                                filteredProducts?.length !== 0 && !filteredProductsByBrandYearAndCategory ? (
                                    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4">
                                
                                        {
                                            filteredProducts?.map((item) => (
                                                <ProductCard key={item?._id} product={item} />
                                            )
                                            )
                                        }
                                    </div>
                                ): (
                                        
                                    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4">
                                
                                        {
                                            filteredProductsByBrandYearAndCategory?.map((item) => (
                                                <ProductCard key={item?._id} product={item} />
                                            )
                                            )
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;