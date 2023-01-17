import {  useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

type product = {
    _id: string;
    name: string;
    image: string;
    category: string;
    brand: string;
    price: number;
    year: number;
};

const ProductCard = ({ _id, name, image, category, brand, price, year }: product) => {
    console.log(name, image, category, brand, price, year);
  // use for toast
    const [isAlreadyAvailable, setIsAlreadyAvailable] = useState(false);
    const navigate = useNavigate();


  return (
    <div className="bg-white rounded-md shadow  hover:shadow-lg duration-100 relative">

      <div onClick={()=> navigate(`/product/${_id}`)} className="w-full h-[200px] overflow-hidden relative cursor-pointer ">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover "
        />
        {/* <Image
          src={product?.imageURLs[0]}
          alt="product image"
          width={300}
          height={200}
          className="rounded-t-md object-cover h-[200px]"
        ></Image> */}
      </div>

      <label
        // onClick={}
        tabIndex={0}
        className="btn btn-sm btn-ghost btn-circle absolute top-0 right-0 bg-[#00000033]"
      >
        <div className="">
          <AiOutlineHeart
            className="text-secondary hover:text-primary"
            size={22}
          />
        </div>
      </label>

      <div className="p-4">
        <h1 className=" font-semibold">{name}</h1>
        <div className="flex justify-between items-center mt-4">
          <div className="sm:flex items-center">
            <p className="text-lg text-warning font-semibold">
              ${price}
            </p>
          </div>
          <div className="flex items-center">
            <button
            //   onClick={handleSetLocalStorage}
              className="bg-primary text-white btn-square btn-sm rounded-md flex justify-center items-center hover:bg-secondary hover:text-primary"
            >
              <MdAddShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;